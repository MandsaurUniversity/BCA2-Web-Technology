# Step 6: Submitting Your Work

> **⏱️ Time Required:** 5–10 minutes per submission | **Difficulty:** Easy
> **What You Need:** Completed assignment, GitHub Desktop (or Git CLI)

---

## What Is "Submitting"?

When you **submit** your work, you are:
1. **Saving** your changes (called a "commit")
2. **Uploading** those changes to GitHub (called a "push")

Once pushed, your instructor can see your work on GitHub and review it.

Think of it like writing an answer in your exam notebook (commit) and then handing it to the teacher (push).

---

## Method 1: Using GitHub Desktop (Recommended) 🖱️

### Step 1: Open Your Assignment in GitHub Desktop

1. Open **GitHub Desktop**
2. In the top-left, make sure your **assignment repository** is selected
   (e.g., `lab-05-html-tables-rahulsharma`)
3. You'll see a list of **changed files** on the left side

### Step 2: Review Your Changes

- GitHub Desktop shows files with changes highlighted:
  - **Green** = Lines you added
  - **Red** = Lines you removed
- Look through the changes to make sure everything looks correct

### Step 3: Write a Commit Message

At the bottom-left, you'll see two text fields:

1. **Summary** (required): Write a short description of what you did
   - Example: `Complete Lab 5 - HTML timetable with colspan and rowspan`
   - Example: `Add index.html with department description`

2. **Description** (optional): Add more details if needed
   - Example: `Created a class timetable using HTML tables. Used colspan for lunch break row and rowspan for lab sessions.`

### Step 4: Commit

1. Click the blue **"Commit to main"** button
2. Your changes are now **saved locally** (like saving a document)

### Step 5: Push to GitHub

1. Click the **"Push origin"** button at the top
   (It may say "Publish branch" if this is your first push)
2. Wait a few seconds
3. Your work is now **uploaded to GitHub** and visible to your instructor! 🎉

### Visual Summary

```
[You write code in VS Code]
         ↓
[Changes appear in GitHub Desktop]
         ↓
[Write a commit message describing your work]
         ↓
[Click "Commit to main"]
         ↓
[Click "Push origin"]
         ↓
[✅ Your instructor can see your work on GitHub]
```

---

## Method 2: Using Git Command Line ⌨️

If you prefer using the terminal:

### Step 1: Open Terminal in Your Assignment Folder

Open Command Prompt and navigate to your assignment folder:
```bash
cd Desktop\Assignments\lab-05-html-tables-rahulsharma
```

### Step 2: Check What Changed

```bash
git status
```

This shows which files were added or modified. New/changed files appear in **red**.

### Step 3: Add Your Files

```bash
git add .
```

The `.` means "add all changes". The files now appear in **green** when you run `git status` again.

### Step 4: Commit with a Message

```bash
git commit -m "Complete Lab 5 - HTML timetable with colspan and rowspan"
```

### Step 5: Push to GitHub

```bash
git push origin main
```

### Quick One-Liner (After You're Comfortable)

```bash
git add . && git commit -m "your message here" && git push origin main
```

---

## When to Submit

| Situation | What to Do |
|-----------|-----------|
| **After finishing the assignment** | Commit + Push |
| **At the end of each lab session** | Commit + Push (even if not fully done) |
| **After making significant progress** | Commit (you can push later) |
| **Before leaving the lab** | Always push! (so your work is saved online) |

💡 **Golden Rule:** Commit early, commit often, and always push before you leave.

---

## Writing Good Commit Messages

Your commit messages become a permanent record of your work. Write them clearly.

### Good Examples ✅

| Message | Why It's Good |
|---------|--------------|
| `Add timetable using HTML table tags` | Describes what was added |
| `Fix hyperlink to Wikipedia page` | Describes what was fixed |
| `Add CSS styling for paragraph colors` | Clear and specific |
| `Complete Lab 10 - inline and external CSS` | References the lab number |
| `Add form validation for age field` | Describes the specific feature |

### Bad Examples ❌

| Message | Why It's Bad |
|---------|-------------|
| `update` | Too vague — what was updated? |
| `done` | What's done? |
| `asdfg` | Meaningless |
| `changes` | What changes? |
| `fixed stuff` | What stuff? |

---

## How to Make Additional Changes After Submitting

Already pushed but want to make changes? No problem!

1. Make your changes in VS Code
2. Save (`Ctrl + S`)
3. Go to GitHub Desktop
4. Write a new commit message (e.g., `Fix table border styling`)
5. Click **Commit to main**
6. Click **Push origin**

You can push as many times as you want. Your instructor sees the **latest version**.

---

## Checking If Your Submission Was Successful

### From GitHub Desktop
- After pushing, the "Push origin" button should disappear or show "Fetch origin"
- This means everything is uploaded

### From the Browser
1. Go to your assignment repository on GitHub:
   `https://github.com/MandsaurUniversity/lab-05-html-tables-YOURUSERNAME`
2. Check if your files are visible
3. Click on a file to verify the content is correct
4. Check the **commit time** — it should show your recent commit

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Push origin" is greyed out | You need to **commit** first (Step 4) before pushing |
| "Nothing to commit" | You haven't saved your changes in VS Code (`Ctrl + S`) or haven't made any changes |
| "Authentication failed" | Sign in again: GitHub Desktop → File → Options → Accounts → Sign in |
| "Rejected — non-fast-forward" | Click **Pull origin** first, then try pushing again |
| Pushed but instructor says they can't see files | Check that you pushed to the correct repository |

---

## You're Ready! ✅

You can now submit your work. For common problems and help, see:

**👉 [Step 7: Troubleshooting and Help](07-Troubleshooting-and-Help.md)**

---

*Part of the Web Technology (25BCA060) course. Instructions and Prerequisites.*
