# Step 5: Accepting and Doing Lab Assignments

> **⏱️ Time Required:** 10 minutes to read, then ongoing | **Difficulty:** Easy
> **What You Need:** GitHub account, GitHub Desktop, VS Code installed

---

## How Assignments Work in This Course

Your instructor uses **GitHub Classroom** to distribute lab assignments. Here's the flow:

```
Instructor creates      You click the       GitHub creates        You do the work
an assignment     →     invite link    →    YOUR personal copy  →  in your copy
                                            of the assignment
```

Each assignment gives you your own **private repository** where you write code. Only you and your instructor can see it.

---

## Accepting an Assignment

### Step 1: Get the Assignment Link

Your instructor will share an **assignment link** with you. It looks like:
```
https://classroom.github.com/a/XXXXXXX
```

**Where to find assignment links:**

1. **Google Classroom (Primary)** — Join using the link below or class code `zxfnnqag`:
   - 🔗 **https://classroom.google.com/c/ODU4MzYxMzU0MTI5?cjc=zxfnnqag**
   - All assignment links, deadlines, and announcements are posted here
2. **WhatsApp group** — Your instructor may also share links here
3. **In class** — Written on the board during lab sessions

> **⚠️ Important:** Make sure you have joined the Google Classroom first! All GitHub Classroom assignment links will be posted there.

### Step 2: Click the Link

1. Open the link in **Chrome**
2. If asked, **sign in to GitHub** with your account
3. You'll see a page that says something like:
   > "Accept this assignment: Lab-05-HTML-Tables"
4. Click the green **"Accept this assignment"** button

### Step 3: Wait for Your Repository

1. GitHub will create a **personal copy** of the assignment for you
2. Wait 10–30 seconds
3. You'll see a message like:
   > "You're ready to go! Your assignment repository has been created: `MandsaurUniversity/lab-05-html-tables-rahulsharma`"
4. Click the link to see your repository on GitHub

### Step 4: Clone Your Assignment

Use the same cloning process from the previous guide:

**Using GitHub Desktop:**
1. Open GitHub Desktop
2. **File → Clone repository**
3. Go to the **GitHub.com** tab — your new assignment should appear in the list
4. Select it and click **Clone**
5. Choose a local path (e.g., `Desktop/Assignments/lab-05-html-tables`)
6. Click **Clone**

**Using Git CLI:**
```bash
cd Desktop/Assignments
git clone https://github.com/MandsaurUniversity/lab-05-html-tables-rahulsharma.git
cd lab-05-html-tables-rahulsharma
code .
```

---

## Doing the Assignment

### Step 1: Read the Instructions

Every assignment repository contains a `README.md` file with:
- What you need to do
- Which files to create or edit
- Expected output
- Grading criteria

### Step 2: Open in VS Code

1. In GitHub Desktop, click **"Open in Visual Studio Code"**
2. Or open VS Code → **File → Open Folder** → Select the assignment folder

### Step 3: Create or Edit Files

1. Look at the `README.md` instructions
2. Create the required HTML/CSS/JS files
3. Write your code
4. **Save frequently** (`Ctrl + S`)

### Step 4: Preview Your Work

1. Right-click your `.html` file in VS Code
2. Select **"Open with Live Server"** (if Live Server extension is installed)
3. Or double-click the `.html` file in File Explorer to open in Chrome
4. Check if your output matches the expected result

### Recommended Folder Structure for Each Assignment

```
lab-05-html-tables-rahulsharma/
├── README.md          ← Assignment instructions (don't modify)
├── index.html         ← Your main HTML file
├── style.css          ← Your CSS (if required)
├── script.js          ← Your JavaScript (if required)
└── images/            ← Any images you use
    └── logo.png
```

---

## Tips for Doing Lab Work

### Do's ✅

| Tip | Why |
|-----|-----|
| Save your work frequently (`Ctrl + S`) | Prevents losing work if computer crashes |
| Test in Chrome after every change | Catch errors early |
| Read error messages carefully | They tell you what's wrong |
| Use the course content files as reference | They have working code examples |
| Ask your instructor if stuck | Better than struggling silently |

### Don'ts ❌

| Avoid | Why |
|-------|-----|
| Don't copy-paste code without understanding | You won't learn, and exams test understanding |
| Don't modify `README.md` in assignments | It contains the instructions |
| Don't wait until the last minute | You'll rush and make mistakes |
| Don't submit someone else's work | The instructor can see your commit history |

---

## You're Ready! ✅

You know how to accept and work on assignments. Next, learn how to submit your work:

**👉 [Step 6: Submitting Your Work](06-Submitting-Your-Work.md)**

---

*Part of the Web Technology (25BCA060) course. Instructions and Prerequisites.*
