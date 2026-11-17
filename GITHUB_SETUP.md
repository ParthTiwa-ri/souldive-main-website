# Push Code to GitHub

Follow these steps in your terminal to push your project to GitHub:

### Step 1: Stage and commit all changes
```bash
git add .
git commit -m "Update Soul Dive website: navigation, maps, and bento cards"
```

---

### Step 2: Connect to your GitHub repository
```bash
git remote add origin https://github.com/ParthTiwa-ri/souldive-main-website.git
```
> **Note:** If it says `error: remote origin already exists`, update it with:
> ```bash
> git remote set-url origin https://github.com/ParthTiwa-ri/souldive-main-website.git
> ```

---

### Step 3: Push to the main branch
```bash
git branch -M main
git push -u origin main
```

