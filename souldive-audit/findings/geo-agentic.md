# AI Search (GEO) & Agentic Readiness Audit: Soul Dive Water Park

**Auditor Engine:** Claude SEO (AI Overviews, ChatGPT Search, Perplexity, Agentic Browsing)

---

## 1. AI Search & Crawler Permissions

| Crawler / Engine | Status in `robots.txt` | Recommended Directives |
|---|---|---|
| `Googlebot` | Allowed | Keep Allowed (Remove `/_next/` disallow) |
| `OAI-SearchBot` (ChatGPT Search) | Allowed by wildcard | Add explicit Allow |
| `Claude-SearchBot` (Anthropic Search) | Allowed by wildcard | Add explicit Allow |
| `PerplexityBot` (Perplexity Index) | Allowed by wildcard | Add explicit Allow |
| `Google-Extended` (Gemini Training) | Allowed by wildcard | Monitor / Allow |
| `GPTBot` (OpenAI Model Training) | Allowed by wildcard | Optional training control |

---

## 2. AI Discoverability: Missing `/llms.txt`

### What is `llms.txt`?
The `llms.txt` file is an emerging open standard (similar to `robots.txt` but for LLMs) that provides AI models with concise, factual, markdown-formatted knowledge about a domain.

### Action Taken:
We will generate a production-ready `/public/llms.txt` file containing concise, structured knowledge about Soul Dive Water Park:
- Business Identity & Overview
- Location & Catchment
- Proposed Attractions & Amenities
- Development Status & Opening Season (Summer 2027)
- Official Contact Channels

---

## 3. Citability Analysis
- **Definition Blocks:** Soul Dive features crisp, factual, self-contained paragraphs in the hero and about sections ("Soul Dive Water Park is an upcoming aquatic leisure resort located at Biriya, Dibiyapur Road, Auraiya...").
- **Stat & Distance Clarity:** Exact distances (4 km, 12 km, 52 km) provide strong citable anchor data for Perplexity and Google AI Overviews when answering queries like *"Is there a water park near Auraiya or Etawah?"*.
