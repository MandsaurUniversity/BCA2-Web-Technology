# Step 7: Troubleshooting and Help

> **Use this guide when you run into problems.** Find your issue in the table of contents below.

---

## Table of Contents

1. [GitHub and Account Issues](#1-github-and-account-issues)
2. [GitHub Desktop Problems](#2-github-desktop-problems)
3. [Git CLI Problems](#3-git-cli-problems)
4. [VS Code Issues](#4-vs-code-issues)
5. [Browser and HTML Issues](#5-browser-and-html-issues)
6. [CSS Not Working](#6-css-not-working)
7. [JavaScript Not Working](#7-javascript-not-working)
8. [Assignment Submission Issues](#8-assignment-submission-issues)
9. [Getting Help](#9-getting-help)

---

## 1. GitHub and Account Issues

### "I forgot my GitHub password"

1. Go to https://github.com/password_reset
2. Enter your email address
3. Click **"Send password reset email"**
4. Check your email (also check **Spam** folder)
5. Click the reset link and set a new password

### "I forgot my GitHub username"

1. Open the password reset page: https://github.com/password_reset
2. Enter your email address
3. The reset email will contain your username

### "I can't sign in to GitHub"

- Make sure **Caps Lock** is off
- Try resetting your password (see above)
- Make sure you're using the correct email
- If using university email, check if it has expired

---

## 2. GitHub Desktop Problems

### "Repository not found" when cloning

- Double-check the repository URL
- Course repository: `https://github.com/MandsaurUniversity/BCA2-Web-Technology.git`
- Make sure you have internet access
- Make sure you're signed in to GitHub Desktop

### "Push origin" button is greyed out

- You haven't committed yet. Write a commit message and click **"Commit to main"** first
- Then the Push button will become active

### "Fetch failed" or "Network error"

- Check your internet connection
- Try again in a few minutes
- If on university Wi-Fi, try from a different network

### GitHub Desktop shows "conflicts"

A conflict means you and someone else (or the instructor) changed the same file.

1. GitHub Desktop will highlight the conflicted files
2. Open the file in VS Code
3. Look for lines like:
   ```
   <<<<<<< HEAD
   Your version of the code
   =======
   The other version of the code
   >>>>>>> main
   ```
4. **Choose which version to keep** — delete the lines you don't want and the `<<<<<<<`, `=======`, `>>>>>>>` markers
5. Save the file
6. Go back to GitHub Desktop → Commit → Push

### "I accidentally committed the wrong file"

Don't panic! Your instructor sees all commits, so:
1. Make the correction in VS Code
2. Save the file
3. Make a new commit: `Fix: correct the previous mistake in index.html`
4. Push again

---

## 3. Git CLI Problems

### "git is not recognized as an internal or external command"

Git is not installed or not in your PATH:
1. **Install Git:** Go to https://git-scm.com/download/win and install
2. **Close and reopen** Command Prompt after installation
3. Try `git --version` again

### "fatal: not a git repository"

You are not inside a Git repository folder:
```bash
cd Desktop\BCA2-Web-Technology
```
Make sure you `cd` into the correct folder first.

### "Permission denied (publickey)"

This happens with SSH. Use HTTPS instead:
```bash
git remote set-url origin https://github.com/MandsaurUniversity/BCA2-Web-Technology.git
```

### "Your branch is behind 'origin/main'"

The remote has updates you don't have locally:
```bash
git pull origin main
```

---

## 4. VS Code Issues

### VS Code doesn't show my files

- Make sure you opened a **folder**, not a single file
- **File → Open Folder** → Select your project folder

### "Live Server" extension doesn't work

- Make sure it's installed: **Extensions** (Ctrl+Shift+X) → Search "Live Server"
- Make sure you right-click on an **.html** file (not .css or .js)
- Try closing and reopening VS Code

### My code looks messy (no colors)

VS Code uses **syntax highlighting** based on file extension:
- Make sure your file is saved with the correct extension (`.html`, `.css`, `.js`)
- Check the bottom-right corner of VS Code — it should say "HTML", "CSS", or "JavaScript"
- If it says "Plain Text", click it and select the correct language

### VS Code shows a warning about "Git not found"

- Install Git (see Section 3 above)
- Or ignore this warning if you're using GitHub Desktop

---

## 5. Browser and HTML Issues

### My HTML page shows raw code instead of a webpage

- Make sure the file extension is `.html` (not `.html.txt` or `.txt`)
- Enable "File name extensions" in File Explorer:
  **View** tab → Check **"File name extensions"**

### Images are not showing

Common reasons and fixes:

| Issue | Fix |
|-------|-----|
| Wrong file name | `src="Logo.png"` but file is `logo.png` (case matters!) |
| Wrong path | `src="images/photo.jpg"` — make sure the `images/` folder exists |
| Misspelled extension | `photo.jpeg` vs `photo.jpg` |
| Missing `src` attribute | `<img alt="photo">` → needs `src="photo.jpg"` |

### The page looks different from what I expected

1. Press `F12` to open Developer Tools
2. Check the **Console** tab for error messages (red text)
3. Check the **Elements** tab to see your actual HTML structure
4. Right-click an element → **Inspect** to see its applied styles

### My page shows weird characters (like `Ã©` instead of `é`)

Add this to your `<head>` section:
```html
<meta charset="UTF-8">
```

---

## 6. CSS Not Working

### I added CSS but nothing changed

Check these in order:

1. **Is the CSS file linked correctly?**
   ```html
   <link rel="stylesheet" href="style.css">
   ```
   Make sure the filename matches exactly (case-sensitive).

2. **Is the CSS file in the same folder as the HTML file?**
   If it's in a subfolder: `href="css/style.css"`

3. **Did you save both files?** (`Ctrl + S` on both HTML and CSS files)

4. **Hard refresh the browser:** `Ctrl + Shift + R`

5. **Check for typos in CSS:**
   ```css
   /* Wrong */
   backround-color: red;

   /* Correct */
   background-color: red;
   ```

6. **Check for missing semicolons:**
   ```css
   /* Wrong — missing ; after first property */
   color: red
   font-size: 16px;

   /* Correct */
   color: red;
   font-size: 16px;
   ```

### CSS works on some elements but not others

- Check **specificity**: An `id` selector (`#myid`) overrides a `class` selector (`.myclass`)
- Use DevTools (F12 → Elements → Styles panel) to see which CSS rules are being applied
- Look for ~~strikethrough~~ text in the Styles panel — that means a rule is overridden

---

## 7. JavaScript Not Working

### Nothing happens when I click a button

1. **Open the Console** (`F12` → Console tab)
2. Look for **red error messages**
3. Common errors:
   - `Uncaught ReferenceError: X is not defined` → Variable or function name is misspelled
   - `Uncaught TypeError: Cannot read property '...' of null` → Element not found, check your ID

### "Uncaught SyntaxError: Unexpected token"

You have a syntax error:
- Missing closing bracket `}` or parenthesis `)`
- Extra comma at the end of a list
- Unclosed string (missing `"` or `'`)

### alert() or prompt() not working

- Make sure your `<script>` tag is at the **bottom** of the body (before `</body>`)
- Or use `<script defer src="script.js"></script>` in the `<head>`

### My JavaScript file is not loading

```html
<!-- Make sure this is correct -->
<script src="script.js"></script>
```
- Check the filename matches exactly
- Check the file is in the correct location
- Check the Console (F12) for 404 errors

---

## 8. Assignment Submission Issues

### "I pushed but the instructor says my work isn't there"

1. Go to your assignment on GitHub (in the browser)
2. Check that your files are visible there
3. Check the **commit time** — is it recent?
4. Make sure you pushed to the **correct repository** (not the main course repo)

### "I accepted the assignment but can't find my repository"

1. Go to https://github.com
2. Click your profile icon → **"Your repositories"**
3. Your assignment repo should be listed there
4. If not, try accepting the assignment link again

### "The deadline has passed — can I still submit?"

- GitHub allows pushes even after the deadline
- But your instructor decides whether to accept late submissions
- Talk to your instructor

### "I accidentally modified the README.md"

1. Open GitHub Desktop
2. Right-click the changed `README.md`
3. Click **"Discard changes"**
4. The file goes back to its original state

---

## 9. Getting Help

### Where to Ask for Help

| Resource | Best For |
|----------|---------|
| **Your Instructor** | Assignment-specific questions, grading, deadlines |
| **Classmates** | "Did anyone else face this issue?" |
| **Google Search** | Technical errors (copy-paste the error message) |
| **Stack Overflow** | Programming questions (search before asking) |
| **MDN Web Docs** (developer.mozilla.org) | HTML/CSS/JS reference documentation |
| **W3Schools** (w3schools.com) | Beginner-friendly tutorials and examples |

### How to Ask a Good Question

When asking for help, include:

1. **What you're trying to do:** "I'm trying to create a table with 3 rows and 4 columns"
2. **What you expected:** "The table should have borders"
3. **What actually happened:** "The table appears but without any borders"
4. **What you already tried:** "I added `border: 1px solid black` in CSS but it didn't work"
5. **Your code** (or a screenshot)

### Emergency: "I Deleted Everything!"

Don't panic:
- If you've been pushing regularly, your work is **safe on GitHub**
- Clone the repository again (see Guide 03)
- All your previous commits are preserved

---

## Quick Reference Card

| I Want To... | Do This |
|-------------|---------|
| Save my file | `Ctrl + S` |
| Undo a mistake | `Ctrl + Z` |
| Preview HTML in browser | Right-click in VS Code → Open with Live Server |
| Hard refresh browser | `Ctrl + Shift + R` |
| Open Developer Tools | `F12` |
| Check for errors | F12 → Console tab (look for red text) |
| Commit my work | GitHub Desktop → Write message → Click "Commit to main" |
| Upload to GitHub | GitHub Desktop → Click "Push origin" |
| Get latest updates | GitHub Desktop → Click "Fetch origin" → "Pull origin" |
| See my repos | https://github.com → Your profile → Repositories |

---

*Part of the Web Technology (25BCA060) course. Instructions and Prerequisites.*
