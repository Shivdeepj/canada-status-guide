# How to Host Your App on GitHub Pages (Mobile-Friendly)

Follow these steps to put your app online so it works on mobile phones:

## Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com) and sign up (free)
2. Verify your email

## Step 2: Create a New Repository
1. Click the **"+"** icon (top right) → **"New repository"**
2. Name it: `canada-status-guide` (or any name you like)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** check "Initialize with README"
5. Click **"Create repository"**

## Step 3: Upload Your Files
### Option A: Using GitHub Website (Easiest)
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `app.js`
3. Click **"Commit changes"**

### Option B: Using GitHub Desktop (Recommended)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in
3. Click **"File"** → **"Add Local Repository"**
4. Click **"Choose..."** and select your folder: `Study permit extension guide`
5. Click **"Publish repository"** (make it public)

## Step 4: Enable GitHub Pages
1. In your repository, go to **"Settings"** (top menu)
2. Scroll to **"Pages"** (left sidebar)
3. Under **"Source"**, select **"main"** branch (or **"master"** if that's your branch)
4. Click **"Save"**
5. Wait 1-2 minutes

## Step 5: Your App is Live!
- Your URL will be: `https://YOUR-USERNAME.github.io/canada-status-guide/`
- Replace `YOUR-USERNAME` with your GitHub username
- Example: `https://shivdeep.github.io/canada-status-guide/`

## Step 6: Test on Mobile
1. Open the URL on your phone's browser
2. Click the 4 buttons at the top
3. They should scroll smoothly to each section
4. All content should be visible and readable

## Troubleshooting

**Problem:** Buttons don't work on mobile
- **Solution:** Make sure `app.js` is uploaded and the file path in `index.html` is correct

**Problem:** Styles look broken
- **Solution:** Check that `styles.css` is in the same folder as `index.html`

**Problem:** GitHub Pages shows 404
- **Solution:** Wait 5-10 minutes, then refresh. Make sure the repository is **Public**.

**Problem:** Changes don't appear
- **Solution:** After uploading new files, wait 1-2 minutes and do a hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Quick Update Instructions
When you make changes:
1. Edit files locally
2. Upload the changed files to GitHub (replace old ones)
3. Wait 1-2 minutes
4. Refresh your browser

---

**Need help?** Check GitHub's official guide: [pages.github.com](https://pages.github.com/)
