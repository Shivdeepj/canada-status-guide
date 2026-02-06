# Troubleshooting: Buttons Not Working on Mobile

## Quick Fixes Applied ✅

1. ✅ **JavaScript updated** - Added robust scroll handling
2. ✅ **CSS fixed** - Buttons are now touch-friendly
3. ✅ **Z-index fixed** - Buttons are clickable (not blocked)
4. ✅ **Scroll margins** - Sections have proper spacing
5. ✅ **Fallback script** - Works even if app.js fails to load

## Testing Steps

### Step 1: Test Locally First
1. Open `index.html` in your **desktop browser** (Chrome/Firefox)
2. Open Developer Tools (F12)
3. Click "Toggle device toolbar" (mobile icon)
4. Select a phone (iPhone/Android)
5. Click each of the 4 buttons
6. Check Console tab for errors

### Step 2: Test on Actual Phone
1. **Before uploading to GitHub:**
   - Connect phone to same WiFi as computer
   - Find your computer's IP address (e.g., `192.168.1.100`)
   - On phone browser, go to: `http://YOUR-IP/Study permit extension guide/index.html`
   - Test buttons

### Step 3: After GitHub Upload
1. Make sure all 3 files are uploaded:
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `app.js`
2. Check file paths match exactly (case-sensitive)
3. Wait 2-3 minutes after upload
4. Clear browser cache on phone

## Common Issues & Solutions

### Issue 1: Buttons Don't Respond to Touch
**Solution:**
- Check if `app.js` is uploaded
- Verify file name is exactly `app.js` (lowercase)
- Check browser console for JavaScript errors

### Issue 2: Page Scrolls But Wrong Position
**Solution:**
- This is normal - sections have scroll margins
- Try scrolling manually to see if content is there
- Increase `scroll-margin-top` in CSS if needed

### Issue 3: Only First Page Shows
**Possible causes:**
- JavaScript not loading
- Sections are hidden by CSS
- Page not fully loaded

**Solution:**
1. Check browser console (on phone: use remote debugging)
2. Verify all sections exist in HTML (search for `id="study"`, `id="workers"`, etc.)
3. Try scrolling manually - content should be there

### Issue 4: Buttons Work on Desktop But Not Mobile
**Solution:**
- Mobile browsers sometimes block JavaScript
- Try different browser on phone (Chrome, Safari, Firefox)
- Check if JavaScript is enabled in browser settings

## Debug Checklist

- [ ] All 3 files uploaded to GitHub (`index.html`, `styles.css`, `app.js`)
- [ ] Repository is **Public** (required for GitHub Pages)
- [ ] GitHub Pages is enabled (Settings → Pages)
- [ ] File names match exactly (case-sensitive)
- [ ] No JavaScript errors in console
- [ ] Sections exist with correct IDs (`#study`, `#workers`, `#visitor`, `#vulnerable`)
- [ ] Browser allows JavaScript
- [ ] Page fully loaded before clicking buttons

## Manual Test

If buttons still don't work, try this:

1. **Scroll manually** to see if sections exist:
   - Scroll down past header
   - Look for "🔵 BUTTON 1 — SWITCH TO STUDY PERMIT"
   - If you see it, content is there - just navigation issue

2. **Test direct links:**
   - On phone, type in address bar: `YOUR-URL#study`
   - Should jump to Section 1
   - Try: `YOUR-URL#workers`, `YOUR-URL#visitor`, `YOUR-URL#vulnerable`

3. **Use test file:**
   - Open `TEST_MOBILE.html` on phone
   - If those buttons work, the issue is with main app
   - If those don't work, it's a browser/device issue

## Still Not Working?

1. **Check GitHub Pages URL:**
   - Format: `https://USERNAME.github.io/REPO-NAME/`
   - Make sure it's exactly right
   - Try opening `https://USERNAME.github.io/REPO-NAME/index.html` directly

2. **Verify files are accessible:**
   - Try: `https://USERNAME.github.io/REPO-NAME/app.js`
   - Should show JavaScript code (not 404)

3. **Check file structure:**
   ```
   Repository root/
   ├── index.html
   ├── styles.css
   └── app.js
   ```
   All files should be in the **root** of the repository, not in a subfolder.

4. **Contact for help:**
   - Share your GitHub Pages URL
   - Share screenshot of repository file list
   - Share browser console errors (if any)

---

**Remember:** After uploading to GitHub, wait 2-3 minutes, then hard refresh (Ctrl+F5 or Cmd+Shift+R) on your phone.
