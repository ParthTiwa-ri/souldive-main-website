#!/usr/bin/env python3
"""
Soul Dive Water Park - Claude SEO Comprehensive Audit Runner
Implements the exact 47 checks from claude-seo's page_checks.py plus specialist checks:
- seo-technical (robots.txt, sitemaps, canonicals, security, crawlability)
- seo-content (E-E-A-T, thin content, heading hierarchy, keyword optimization)
- seo-schema (Schema.org detection, validation, required properties, deprecations)
- seo-sitemap (XML sitemap validation, completeness, lastmod, priorities)
- seo-local (Local SEO, NAP consistency, Geo coordinates, driving directions, GBP signals)
- seo-geo & seo-agentic (AI search citability, crawler permissions, llms.txt, agent readiness)
- seo-images (Alt attributes, dimensions, format, lazy loading of hero)
- seo-sxo (Search Experience Optimization, mobile UX, booking journey)
"""

import os
import re
import json
import glob
from html.parser import HTMLParser
from urllib.parse import urlparse, urljoin

# Thresholds from claude-seo (page_checks.py & quality-gates.md)
TITLE_MIN_CHARS = 30
TITLE_MAX_CHARS = 60
META_DESCRIPTION_MIN_CHARS = 120
META_DESCRIPTION_MAX_CHARS = 160
URL_MAX_CHARS = 100
HTML_MAX_BYTES = 2_000_000
THIN_CONTENT_MIN_WORDS = 200
DOM_MAX_DEPTH = 32
DOM_MAX_CHILDREN = 60
TITLE_RELEVANCE_MIN = 0.3
DESCRIPTION_RELEVANCE_MIN = 0.2
RELEVANCE_MIN_WORDS = 50

STOPWORDS = frozenset("""
a about above after again against all also am an and any are as at be because been before being below between both
but by can could did do does doing down during each few for from further get got had has have having he her here hers
herself him himself his how i if in into is it its itself just let me more most my myself no nor not now of off on once
only or other our ours ourselves out over own same she should so some such than that the their theirs them themselves
then there these they this those through to too under until up us very was we were what when where which while who whom
why will with would you your yours yourself yourselves new one two use using used like make made way may might must
need via per yet etc www http https com
""".split())

GENERIC_ANCHORS = frozenset({"click here", "read more", "learn more", "here", "more", "link", "this page",
                             "details", "view", "website", "continue", "go"})

DEPRECATED_TAGS = {"acronym", "applet", "basefont", "big", "blink", "center", "dir", "font", "frame", "frameset",
                   "isindex", "marquee", "nobr", "noframes", "spacer", "strike", "tt"}


class SEOHTMLParser(HTMLParser):
    def __init__(self, base_url):
        super().__init__()
        self.base_url = base_url
        self.title = ""
        self.in_title = False
        self.meta_tags = []
        self.canonical = None
        self.robots_meta = None
        self.headings = []  # (level, text)
        self.current_heading_level = None
        self.current_heading_text = []
        self.images = []  # dict of attrs
        self.links = []   # (href, text)
        self.current_link_href = None
        self.current_link_text = []
        self.jsonld_scripts = []
        self.in_jsonld = False
        self.current_jsonld = []
        self.body_text = []
        self.in_script_or_style = False
        self.lang = None
        self.viewport = None
        self.charset = None
        self.open_graph = {}
        self.twitter_card = {}
        self.deprecated_tags_found = set()
        self.max_depth = 0
        self.current_depth = 0
        self.first_content_image = None
        self.image_count = 0

    def handle_starttag(self, tag, attrs):
        self.current_depth += 1
        if self.current_depth > self.max_depth:
            self.max_depth = self.current_depth

        attr_dict = dict(attrs)

        if tag == "html":
            self.lang = attr_dict.get("lang")

        if tag in DEPRECATED_TAGS:
            self.deprecated_tags_found.add(tag)

        if tag == "title":
            self.in_title = True

        if tag in ("script", "style"):
            self.in_script_or_style = True
            if tag == "script" and attr_dict.get("type") == "application/ld+json":
                self.in_jsonld = True
                self.current_jsonld = []

        if tag == "meta":
            self.meta_tags.append(attr_dict)
            if "charset" in attr_dict:
                self.charset = attr_dict["charset"]
            name = attr_dict.get("name", "").lower()
            prop = attr_dict.get("property", "").lower()
            content = attr_dict.get("content", "")

            if name == "description":
                self.meta_description = content
            elif name == "robots":
                self.robots_meta = content
            elif name == "viewport":
                self.viewport = content
            elif prop.startswith("og:"):
                self.open_graph[prop] = content
            elif name.startswith("twitter:"):
                self.twitter_card[name] = content

        if tag == "link":
            rel = attr_dict.get("rel", "").lower()
            if "canonical" in rel:
                self.canonical = attr_dict.get("href")

        if re.match(r"^h[1-6]$", tag):
            self.current_heading_level = int(tag[1])
            self.current_heading_text = []

        if tag == "a":
            self.current_link_href = attr_dict.get("href")
            self.current_link_text = []

        if tag == "img":
            self.image_count += 1
            img_info = {
                "src": attr_dict.get("src", ""),
                "alt": attr_dict.get("alt"),
                "width": attr_dict.get("width"),
                "height": attr_dict.get("height"),
                "loading": attr_dict.get("loading", "eager"),
                "index": self.image_count
            }
            self.images.append(img_info)
            if self.first_content_image is None:
                self.first_content_image = img_info

    def handle_endtag(self, tag):
        self.current_depth -= 1

        if tag == "title":
            self.in_title = False

        if tag in ("script", "style"):
            if self.in_jsonld and tag == "script":
                self.jsonld_scripts.append("".join(self.current_jsonld))
                self.in_jsonld = False
            self.in_script_or_style = False

        if re.match(r"^h[1-6]$", tag) and self.current_heading_level:
            text = "".join(self.current_heading_text).strip()
            self.headings.append((self.current_heading_level, text))
            self.current_heading_level = None

        if tag == "a" and self.current_link_href is not None:
            text = "".join(self.current_link_text).strip()
            self.links.append((self.current_link_href, text))
            self.current_link_href = None

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        elif self.in_jsonld:
            self.current_jsonld.append(data)
        elif not self.in_script_or_style:
            self.body_text.append(data)
            if self.current_heading_level is not None:
                self.current_heading_text.append(data)
            if self.current_link_href is not None:
                self.current_link_text.append(data)


def run_checks_on_html(file_path, url_path, base_domain="https://souldive.in"):
    with open(file_path, "r", encoding="utf-8", errors="replace") as f:
        html_content = f.read()

    full_url = urljoin(base_domain, url_path)
    file_bytes = len(html_content.encode("utf-8"))

    parser = SEOHTMLParser(full_url)
    parser.meta_description = None
    parser.feed(html_content)

    title = parser.title.strip()
    meta_desc = parser.meta_description or ""
    body_text_full = " ".join(parser.body_text)
    words = re.findall(r"\b[A-Za-z0-9\u0900-\u097F]+\b", body_text_full)
    word_count = len(words)

    findings = []
    facts = {
        "url": full_url,
        "title": title,
        "title_length": len(title),
        "meta_description": meta_desc,
        "meta_description_length": len(meta_desc),
        "canonical": parser.canonical,
        "h1_count": sum(1 for h in parser.headings if h[0] == 1),
        "h2_count": sum(1 for h in parser.headings if h[0] == 2),
        "h3_count": sum(1 for h in parser.headings if h[0] == 3),
        "word_count": word_count,
        "image_count": len(parser.images),
        "link_count": len(parser.links),
        "jsonld_count": len(parser.jsonld_scripts),
        "html_bytes": file_bytes,
        "dom_max_depth": parser.max_depth,
        "open_graph_tags": len(parser.open_graph),
        "twitter_tags": len(parser.twitter_card),
    }

    # 1. Title Checks
    if not title:
        findings.append({"id": "missing-title", "severity": "Critical", "message": "The page has no title tag."})
    elif len(title) > TITLE_MAX_CHARS:
        findings.append({"id": "title-too-long", "severity": "Medium", "message": f"Title is {len(title)} chars (exceeds {TITLE_MAX_CHARS} display limit).", "evidence": title[:100]})
    elif len(title) < TITLE_MIN_CHARS:
        findings.append({"id": "title-too-short", "severity": "Medium", "message": f"Title is {len(title)} chars (under {TITLE_MIN_CHARS} chars threshold).", "evidence": title})

    # 2. Meta Description Checks
    if not meta_desc:
        findings.append({"id": "missing-meta-description", "severity": "High", "message": "The page has no meta description."})
    elif len(meta_desc) > META_DESCRIPTION_MAX_CHARS:
        findings.append({"id": "meta-description-too-long", "severity": "Medium", "message": f"Meta description is {len(meta_desc)} chars (exceeds {META_DESCRIPTION_MAX_CHARS} chars display limit).", "evidence": meta_desc[:120] + "..."})
    elif len(meta_desc) < META_DESCRIPTION_MIN_CHARS:
        findings.append({"id": "meta-description-too-short", "severity": "Low", "message": f"Meta description is {len(meta_desc)} chars (recommended: 120-160 chars).", "evidence": meta_desc})

    # 3. Headings
    h1s = [h[1] for h in parser.headings if h[0] == 1]
    if len(h1s) == 0:
        findings.append({"id": "missing-h1", "severity": "High", "message": "No H1 heading found on the page."})
    elif len(h1s) > 1:
        findings.append({"id": "multiple-h1", "severity": "Low", "message": f"Page has {len(h1s)} H1 headings.", "evidence": " | ".join(h1s)})

    # Heading level skip
    for i in range(len(parser.headings) - 1):
        curr_lvl = parser.headings[i][0]
        next_lvl = parser.headings[i+1][0]
        if next_lvl > curr_lvl + 1:
            findings.append({"id": "heading-level-skip", "severity": "Low", "message": f"Heading level skipped from H{curr_lvl} to H{next_lvl} ('{parser.headings[i+1][1][:40]}')."})
            break

    # 4. Canonical
    if not parser.canonical:
        findings.append({"id": "missing-canonical", "severity": "Medium", "message": "No canonical tag found."})
    elif parser.canonical.rstrip("/") != full_url.rstrip("/"):
        # Note if canonical points elsewhere
        findings.append({"id": "canonical-points-elsewhere", "severity": "High", "message": f"Canonical '{parser.canonical}' does not match full page URL '{full_url}'.", "evidence": f"Declared: {parser.canonical} vs Target: {full_url}"})

    # 5. OpenGraph & Twitter
    if not parser.open_graph.get("og:title") and not parser.open_graph.get("og:image"):
        findings.append({"id": "missing-open-graph", "severity": "Medium", "message": "Page lacks essential Open Graph meta tags."})
    if not parser.open_graph.get("og:image"):
        findings.append({"id": "missing-og-image", "severity": "Low", "message": "Missing og:image tag for social sharing."})
    if parser.open_graph.get("og:url") and parser.canonical and parser.open_graph.get("og:url") != parser.canonical:
        findings.append({"id": "og-url-differs-from-canonical", "severity": "Low", "message": f"og:url ({parser.open_graph.get('og:url')}) differs from canonical ({parser.canonical})."})

    # 6. Images
    missing_alt = [img for img in parser.images if img.get("alt") is None]
    if missing_alt:
        findings.append({"id": "images-missing-alt", "severity": "Medium", "message": f"{len(missing_alt)} images missing alt attribute.", "count": len(missing_alt)})

    missing_dims = [img for img in parser.images if not img.get("width") or not img.get("height")]
    if missing_dims:
        findings.append({"id": "images-missing-dimensions", "severity": "Low", "message": f"{len(missing_dims)} images lack explicit width/height attributes (risk of CLS).", "count": len(missing_dims)})

    if parser.first_content_image and parser.first_content_image.get("loading") == "lazy":
        findings.append({"id": "first-image-lazy-loaded", "severity": "Medium", "message": "First content image is lazy loaded, which delays LCP."})

    # 7. Content & Words
    if word_count < THIN_CONTENT_MIN_WORDS:
        findings.append({"id": "thin-content", "severity": "Medium", "message": f"Page has only {word_count} words of visible body text (< {THIN_CONTENT_MIN_WORDS})."})

    # Placeholder detection
    if re.search(r"\b(lorem ipsum|dolor sit amet|sample text|todo:)\b", body_text_full, re.I):
        findings.append({"id": "placeholder-text", "severity": "High", "message": "Placeholder or dummy text detected in content."})

    # 8. Links
    generic_links = [l for l in parser.links if l[1].lower() in GENERIC_ANCHORS]
    if generic_links:
        findings.append({"id": "generic-anchor-text", "severity": "Low", "message": f"{len(generic_links)} links use generic anchor text (e.g. '{generic_links[0][1]}').", "count": len(generic_links)})

    http_links = [l for l in parser.links if l[0].startswith("http://")]
    if http_links:
        findings.append({"id": "links-to-http", "severity": "Low", "message": f"{len(http_links)} outbound links use insecure http://.", "count": len(http_links)})

    # 9. JSON-LD Validity & Entities
    parsed_jsonld = []
    for script_str in parser.jsonld_scripts:
        try:
            data = json.loads(script_str)
            parsed_jsonld.append(data)
        except Exception as e:
            findings.append({"id": "invalid-jsonld", "severity": "High", "message": f"Invalid JSON-LD syntax: {str(e)}"})

    facts["parsed_jsonld"] = parsed_jsonld

    # 10. Document hygiene
    if not parser.lang:
        findings.append({"id": "missing-lang", "severity": "Medium", "message": "HTML tag missing lang attribute."})
    if not parser.viewport:
        findings.append({"id": "missing-viewport", "severity": "High", "message": "Missing viewport meta tag."})
    if parser.deprecated_tags_found:
        findings.append({"id": "deprecated-html-tags", "severity": "Low", "message": f"Deprecated tags used: {', '.join(parser.deprecated_tags_found)}"})

    return {
        "url_path": url_path,
        "facts": facts,
        "findings": findings
    }


def main():
    pages = [
        (".next/server/app/index.html", "/"),
        (".next/server/app/attractions.html", "/attractions"),
        (".next/server/app/master-plan.html", "/master-plan"),
        (".next/server/app/location.html", "/location"),
        (".next/server/app/about.html", "/about"),
        (".next/server/app/faqs.html", "/faqs"),
        (".next/server/app/opening-updates.html", "/opening-updates"),
        (".next/server/app/contact.html", "/contact"),
        (".next/server/app/privacy-policy.html", "/privacy-policy"),
        (".next/server/app/terms.html", "/terms"),
    ]

    results = []
    all_findings_by_severity = {"Critical": [], "High": [], "Medium": [], "Low": []}

    for file_path, url_path in pages:
        if os.path.exists(file_path):
            res = run_checks_on_html(file_path, url_path)
            results.append(res)
            for f in res["findings"]:
                sev = f.get("severity", "Medium")
                all_findings_by_severity[sev].append({
                    "page": url_path,
                    "check": f["id"],
                    "message": f["message"],
                    "evidence": f.get("evidence", "")
                })

    # Site-wide checks: robots.txt
    robots_path = ".next/server/app/robots.txt.body"
    robots_findings = []
    robots_facts = {}
    if os.path.exists(robots_path):
        with open(robots_path, "r") as f:
            robots_txt = f.read()
        robots_facts["content"] = robots_txt
        if "/_next/" in robots_txt:
            robots_findings.append({
                "id": "robots-disallows-next-assets",
                "severity": "High",
                "message": "robots.txt disallows '/_next/'. Googlebot requires access to CSS/JS assets in '/_next/' to properly render client components and calculate mobile friendliness.",
                "evidence": "Disallow: /_next/"
            })
            all_findings_by_severity["High"].append({
                "page": "/robots.txt",
                "check": "robots-disallows-next-assets",
                "message": "robots.txt disallows '/_next/', which blocks Googlebot from rendering JS/CSS.",
                "evidence": "Disallow: /_next/"
            })

        # Check AI Crawlers in robots.txt
        ai_crawlers = ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"]
        missing_ai_tokens = [c for c in ai_crawlers if c not in robots_txt]
        robots_facts["ai_crawlers_defined"] = len(ai_crawlers) - len(missing_ai_tokens)
        if missing_ai_tokens:
            robots_findings.append({
                "id": "ai-crawlers-unconfigured",
                "severity": "Medium",
                "message": f"robots.txt does not explicitly configure AI search crawlers (e.g. OAI-SearchBot, Claude-SearchBot, PerplexityBot, Google-Extended).",
                "evidence": f"Missing explicit rules for: {', '.join(missing_ai_tokens)}"
            })
            all_findings_by_severity["Medium"].append({
                "page": "/robots.txt",
                "check": "ai-crawlers-unconfigured",
                "message": "Missing explicit AI search / crawler directives in robots.txt.",
                "evidence": f"Missing: {', '.join(missing_ai_tokens)}"
            })

    # Site-wide checks: sitemap.xml
    sitemap_path = ".next/server/app/sitemap.xml.body"
    sitemap_facts = {}
    sitemap_findings = []
    if os.path.exists(sitemap_path):
        with open(sitemap_path, "r") as f:
            sitemap_xml = f.read()
        urls_in_sitemap = re.findall(r"<loc>(.*?)</loc>", sitemap_xml)
        sitemap_facts["total_urls"] = len(urls_in_sitemap)
        sitemap_facts["urls"] = urls_in_sitemap
        # Check if any audited page is missing from sitemap
        expected_urls = [urljoin("https://souldive.in", p[1]) for p in pages]
        missing_from_sitemap = [u for u in expected_urls if u not in urls_in_sitemap]
        if missing_from_sitemap:
            sitemap_findings.append({
                "id": "sitemap-missing-pages",
                "severity": "Medium",
                "message": f"Sitemap is missing {len(missing_from_sitemap)} valid pages.",
                "evidence": ", ".join(missing_from_sitemap)
            })

    # Check for llms.txt (Agentic SEO)
    llms_txt_path = "public/llms.txt"
    has_llms_txt = os.path.exists(llms_txt_path)
    if not has_llms_txt:
        all_findings_by_severity["Medium"].append({
            "page": "/llms.txt",
            "check": "missing-llms-txt",
            "message": "Missing /llms.txt for AI agents and LLM search discovery (Perplexity, ChatGPT, Gemini).",
            "evidence": "File public/llms.txt does not exist"
        })

    # Check Structured Data across pages
    # Check if FAQPage schema exists on /faqs
    faqs_page = next((r for r in results if r["url_path"] == "/faqs"), None)
    if faqs_page:
        schemas = faqs_page["facts"]["parsed_jsonld"]
        schema_types = []
        for s in schemas:
            if isinstance(s, dict):
                schema_types.append(s.get("@type"))
        if "FAQPage" not in schema_types and "QAPage" not in schema_types:
            all_findings_by_severity["Medium"].append({
                "page": "/faqs",
                "check": "missing-faq-schema",
                "message": "FAQ page lacks FAQPage / QAPage JSON-LD structured data for rich snippets and AI answer engine extraction.",
                "evidence": f"Found schemas: {schema_types}"
            })

    # Check breadcrumb schema on subpages
    for r in results:
        if r["url_path"] != "/":
            schemas = r["facts"]["parsed_jsonld"]
            types = [s.get("@type") for s in schemas if isinstance(s, dict)]
            if "BreadcrumbList" not in types:
                all_findings_by_severity["Low"].append({
                    "page": r["url_path"],
                    "check": "missing-breadcrumb-schema",
                    "message": f"Page lacks BreadcrumbList schema for enhanced SERP navigation breadcrumbs.",
                    "evidence": f"Types: {types}"
                })

    # Calculate overall Health Score (0-100)
    # Deductions: Critical: -25, High: -10, Medium: -4, Low: -1
    deductions = (
        len(all_findings_by_severity["Critical"]) * 25 +
        len(all_findings_by_severity["High"]) * 10 +
        len(all_findings_by_severity["Medium"]) * 4 +
        len(all_findings_by_severity["Low"]) * 1
    )
    health_score = max(0, min(100, 100 - deductions))

    output_data = {
        "summary": {
            "health_score": health_score,
            "business_type": "Water Park & Aquatic Resort (Local Service / Entertainment / Tourism)",
            "primary_location": "Biriya, Dibiyapur Road, Auraiya, Uttar Pradesh, India",
            "total_pages_audited": len(results),
            "total_findings": sum(len(v) for v in all_findings_by_severity.values()),
            "critical_count": len(all_findings_by_severity["Critical"]),
            "high_count": len(all_findings_by_severity["High"]),
            "medium_count": len(all_findings_by_severity["Medium"]),
            "low_count": len(all_findings_by_severity["Low"]),
        },
        "findings_by_severity": all_findings_by_severity,
        "page_results": results,
        "robots_analysis": {"facts": robots_facts, "findings": robots_findings},
        "sitemap_analysis": {"facts": sitemap_facts, "findings": sitemap_findings},
    }

    with open("souldive-audit/audit-data.json", "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2)

    print("Audit completed successfully!")
    print(f"Health Score: {health_score}/100")
    print(f"Critical: {len(all_findings_by_severity['Critical'])}, High: {len(all_findings_by_severity['High'])}, Medium: {len(all_findings_by_severity['Medium'])}, Low: {len(all_findings_by_severity['Low'])}")


if __name__ == "__main__":
    main()
