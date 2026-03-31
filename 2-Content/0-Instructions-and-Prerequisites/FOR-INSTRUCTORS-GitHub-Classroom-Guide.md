# GitHub Classroom Setup and Usage — Instructor Guide

> **For:** Faculty / Instructor / Lecturer  
> **Purpose:** Complete plan for using GitHub Classroom to distribute, collect, review, and showcase student lab work

---

## Table of Contents

1. [Overview and Benefits](#1-overview-and-benefits)
2. [One-Time Setup](#2-one-time-setup)
3. [Creating Your Classroom](#3-creating-your-classroom)
4. [Creating Assignments](#4-creating-assignments)
5. [Assignment Templates for Each Unit](#5-assignment-templates-for-each-unit)
6. [Distributing Assignments to Students](#6-distributing-assignments-to-students)
7. [Reviewing and Grading Student Work](#7-reviewing-and-grading-student-work)
8. [Showcasing Student Work](#8-showcasing-student-work)
9. [Encouraging Student Engagement](#9-encouraging-student-engagement)
10. [Semester Workflow Timeline](#10-semester-workflow-timeline)
11. [Troubleshooting](#11-troubleshooting)

---

## 1. Overview and Benefits

### What Is GitHub Classroom?

**GitHub Classroom** is a free tool by GitHub that lets you:
- Create **template-based assignments** that auto-generate individual repositories for each student
- Collect student work **automatically** — no USB drives, no emails, no "sir, my file got corrupted"
- Review code with **inline comments** directly on GitHub
- See when students started and submitted their work (commit history)
- Build a permanent **portfolio** of student work across semesters

### Why Use It for This Course?

| Traditional Method | GitHub Classroom |
|-------------------|-----------------|
| Students email ZIP files | Each student gets their own repo automatically |
| "Sir, I lost my pendrive" | Work is backed up on GitHub |
| Hard to track who submitted what | Dashboard shows all submissions at a glance |
| No history of student progress | Full commit history shows learning progression |
| Plagiarism hard to detect | Commit timestamps and diff history reveal copying patterns |
| Work disappears after semester | Portfolio persists — students can show it to employers |

### What Students Will Experience

1. Click an assignment link
2. Get their own private repository
3. Write code in VS Code
4. Push via GitHub Desktop (no CLI knowledge needed)
5. Instructor sees their work instantly

---

## 2. One-Time Setup

### Prerequisites

You need:
- A **GitHub account** (use your `@meu.edu.in` email if possible)
- The **MandsaurUniversity** GitHub organization (already created — this repo is under it)
- **GitHub Education** benefits (free private repos for classrooms)

### Apply for GitHub Education (If Not Already Done)

1. Go to: https://education.github.com/benefits
2. Click **"Get benefits"**
3. Select **"Teacher"**
4. Verify with your university email (`@meu.edu.in`) or upload a faculty ID
5. Benefits are usually approved within a few days
6. This gives you **free unlimited private repos** for your classroom

### Ensure Organization Access

The course repo is already at `MandsaurUniversity/BCA2-Web-Technology`. You need **Owner** or **Admin** access to this organization to create classrooms and assignments.

---

## 3. Creating Your Classroom

### Step 1: Go to GitHub Classroom

1. Open: https://classroom.github.com
2. Sign in with your GitHub account
3. Click **"New classroom"**

### Step 2: Select Your Organization

1. Choose **MandsaurUniversity** from the list
2. If it doesn't appear, you may need to grant GitHub Classroom access to the organization

### Step 3: Name Your Classroom

Use a clear, specific name:
```
BCA-II-Web-Technology-2025-26
```

Or with batch details:
```
BCA-SemII-WebTech-March2026
```

### Step 4: Add Students (Roster)

You have two options:

**Option A: Import from a CSV file (Recommended)**
1. Create a CSV file with columns: `identifier,name`
   ```csv
   25BCA001,Anjali Verma
   25BCA002,Bharat Patel
   25BCA003,Chetan Joshi
   ...
   ```
2. Upload this file when prompted

**Option B: Let students self-identify**
1. When students accept their first assignment, they select their name from the roster
2. Less work for you upfront, but students might pick the wrong name

### Step 5: Invite Teaching Assistants (Optional)

If you have TAs or co-instructors, add them as collaborators.

---

## 4. Creating Assignments

### Types of Assignments

| Type | When to Use | Example |
|------|------------|---------|
| **Individual** | Lab exercises (most common) | "Create an HTML table for your timetable" |
| **Group** | Projects | "Build a department website (team of 3)" |

### Creating an Individual Assignment

1. In your classroom dashboard, click **"New assignment"**
2. Fill in the details:

| Field | What to Enter | Example |
|-------|--------------|---------|
| **Title** | Short, descriptive name | `Lab-05-HTML-Tables` |
| **Deadline** | Date and time | `2026-04-05 5:00 PM IST` |
| **Individual or group** | Individual | Select "Individual" |
| **Repository visibility** | Private | Select "Private" (only student + instructor can see) |
| **Template repository** | A starter repo with instructions | See Section 5 below |

3. Click **"Create assignment"**
4. GitHub generates an **invite link** like:
   ```
   https://classroom.github.com/a/XXXXXXX
   ```

### Creating a Template Repository

A **template** is a starter repository that every student gets a copy of when they accept the assignment.

**How to create a template:**

1. Go to https://github.com/MandsaurUniversity
2. Create a new repository: `template-lab-05-html-tables`
3. Add these starter files:

**`README.md`** (Assignment instructions):
```markdown
# Lab 05: HTML Tables

## Objective
Create a class timetable using HTML tables.

## Instructions
1. Create `index.html` in this repository
2. Build a timetable for your BCA class (Monday to Saturday)
3. Use `colspan` for break/lunch rows
4. Use `rowspan` for lab sessions that span 2 periods
5. Add a proper table caption and header row

## Expected Output
A well-structured HTML table showing your weekly timetable.

## Grading Criteria
- [ ] Table has correct structure (5 marks)
- [ ] Uses colspan and rowspan correctly (5 marks)
- [ ] Has proper headings and caption (3 marks)
- [ ] Clean, readable HTML code (2 marks)

**Total: 15 marks**

## Reference
See `2-Content/2-HTML-Fundamentals/10-Tables-in-HTML.md` in the course repository.
```

4. Go to repository **Settings** → Check **"Template repository"**

Now when you create assignments, select this as the template.

---

## 5. Assignment Templates for Each Unit

Below is a suggested assignment plan mapped to the course content:

### Unit 2: HTML Fundamentals

| Assignment | Lab # | Template Idea |
|-----------|-------|--------------|
| `Lab-01-Department-Webpage` | 1 | Empty `index.html` + README with instructions |
| `Lab-02-03-Hyperlinks-Images` | 2, 3 | A page with placeholder text; student adds links and images |
| `Lab-04-Background-Colors` | 4 | Basic HTML file; student adds color styling |
| `Lab-05-06-HTML-Tables` | 5, 6 | README with timetable requirements |
| `Lab-07-Div-Span-Layout` | 7 | Previous table-layout page; student converts to div layout |
| `Lab-08-Frames` | 8 | Folder structure with 3 empty HTML files for frames |
| `Lab-09-Multimedia` | 9 | Starter page + sample audio/video files |

### Unit 3: HTML5

| Assignment | Lab # | Template Idea |
|-----------|-------|--------------|
| `Lab-12-13-HTML5-Forms` | 12, 13 | Empty form page; student adds all input types |

### Unit 4: CSS

| Assignment | Lab # | Template Idea |
|-----------|-------|--------------|
| `Lab-10-Inline-CSS` | 10 | A plain HTML page; student adds inline CSS |
| `Lab-11-External-CSS` | 11 | HTML page + empty `style.css`; student writes CSS rules |

### Unit 5: JavaScript

| Assignment | Lab # | Template Idea |
|-----------|-------|--------------|
| `Lab-17-JS-Form-Validation` | 17 | A form HTML page; student adds JS validation |
| `Lab-18-JS-Alert-OnLoad` | 18 | Empty page; student adds alert on page load |
| `Lab-19-JS-Background-Timer` | 19 | Empty page; student adds timed background change |
| `Lab-20-JS-Dynamic-Styling` | 20 | A paragraph page; student adds bold/italic/underline buttons |
| `Lab-21-JS-Hidden-Div` | 21 | Page with a hidden div; student adds show/hide functionality |

### Unit 6: Bootstrap

| Assignment | Lab # | Template Idea |
|-----------|-------|--------------|
| `Lab-14-Bootstrap-Shopping` | 14 | Empty page with Bootstrap CDN linked |
| `Lab-15-Bootstrap-Navbar` | 15, 25, 28 | Navigation requirements |
| `Lab-16-Bootstrap-Carousel` | 16, 27 | Sample images provided |
| `Lab-26-Bootstrap-Form` | 26, 30 | Form requirements + validation specs |
| `Lab-29-Bootstrap-Grid-Gallery` | 29 | Sample images; student builds responsive grid |

### Unit 7: Web Forms & Database

| Assignment | Lab # | Template Idea |
|-----------|-------|--------------|
| `Lab-22-Department-Website` | 22 | Multi-page project brief |
| `Lab-23-EBook-Project` | 23 | E-book project requirements |
| `Lab-24-Login-System` | 24 | Empty page; student builds login with localStorage |

### Projects (Group Assignments)

| Assignment | Template Idea |
|-----------|--------------|
| `Project-Department-Website` | 5-page brief with starter files + grading rubric |
| `Project-EBook` | E-book brief with starter template |

---

## 6. Distributing Assignments to Students

### Sharing the Assignment Link

After creating an assignment, share the invite link with students.

#### Google Classroom (Primary Distribution Channel)

The course uses **Google Classroom** as the main hub for distributing GitHub Classroom assignment links:

- **Google Classroom Link:** https://classroom.google.com/c/ODU4MzYxMzU0MTI5?cjc=zxfnnqag
- **Class Code:** `zxfnnqag`
- **GitHub Classroom:** https://classroom.github.com/classrooms/142240674-classroom-bca-2025-26-sem2-web-technology

**To post an assignment on Google Classroom:**
1. Go to the Google Classroom → **Classwork** tab
2. Click **+ Create** → **Assignment**
3. Title: e.g., `Lab 05 — HTML Tables`
4. Description: Paste the experiment objectives and deadline
5. In the assignment body, paste the GitHub Classroom invite link
6. Set the due date and click **Assign**

#### All Distribution Methods

| Method | How | Priority |
|--------|-----|----------|
| **Google Classroom** | Create an assignment with the GitHub Classroom link | ⭐ Primary |
| **WhatsApp Group** | Post the link with a short description | Secondary |
| **In-Class** | Write the short link on the board | Backup |
| **Email** | Send to the class mailing list | As needed |

### Sample Message for Students

```
📝 New Lab Assignment: Lab-05-HTML-Tables

Click this link to accept the assignment:
https://classroom.github.com/a/XXXXXXX

📅 Deadline: Saturday, April 5, 2026, 5:00 PM
📖 Reference: Course repo → 2-Content/2-HTML-Fundamentals/10-Tables-in-HTML.md

Steps:
1. Click the link above
2. Accept the assignment
3. Clone your repo using GitHub Desktop
4. Do the work in VS Code
5. Commit & Push when done

Need help? See: 0-Instructions-and-Prerequisites/ in the course repo
```

---

## 7. Reviewing and Grading Student Work

### The Classroom Dashboard

1. Go to https://classroom.github.com
2. Select your classroom
3. Click on an assignment
4. You'll see a list of all students with:
   - ✅ Submitted (has commits after accepting)
   - ❌ Not submitted (accepted but no commits)
   - ⬜ Not accepted (hasn't clicked the link yet)

### Reviewing Code

1. Click on a student's repository
2. Click on the files they created
3. To leave feedback:
   - Click on a file → Click a specific line number → **Add a comment**
   - Comments are visible to the student
   - Example: "Good use of colspan! Try adding `border-collapse: collapse` for cleaner borders."

### Using Pull Requests for Formal Review

For projects or detailed reviews:
1. In the student's repo, go to **Pull requests** tab
2. Click **"New pull request"** if there isn't one
3. Add line-by-line comments
4. Submit your review as **"Approve"**, **"Request changes"**, or **"Comment"**

### Grading

GitHub Classroom supports **autograding** (automated tests), but for this HTML/CSS/JS course, **manual review** is more appropriate.

**Quick grading workflow:**
1. Open the assignment dashboard
2. For each student:
   - Open their repo
   - Check if the HTML file renders correctly (open in browser or use the code preview)
   - Verify code quality (proper structure, comments, naming)
   - Note the grade in your records
   - Optionally leave a comment on their repo

---

## 8. Showcasing Student Work

Keep students motivated by showcasing excellent work:

### Create a "Student Showcase" Repository

1. Create a repo: `MandsaurUniversity/BCA2-Web-Technology-Showcase`
2. With student permission, add their best work (screenshots + links)
3. This inspires other students and builds portfolio value

### Star Excellent Repositories

GitHub stars are a form of recognition:
1. When you see excellent student work, **Star** their repo
2. Students see that their instructor noticed their work

### In-Class Presentation

At the end of each unit:
1. Pick 2–3 best submissions
2. Display their GitHub repos on the projector
3. Ask the students to briefly explain their approach
4. This creates healthy competition and engagement

---

## 9. Encouraging Student Engagement

### The Contribution Graph

Every student's GitHub profile has a **contribution graph** (the green squares). Each commit adds a green square. Encourage students to:
- Commit regularly (builds a visible work ethic)
- Keep their profile public (portfolio for internships)

### Badges and Recognition

Create a simple recognition system:

| Achievement | How to Earn |
|------------|-------------|
| 🥇 First to Submit | First student to push a complete assignment |
| ⭐ Clean Code | Well-structured, properly indented code |
| 🎨 Creative Design | Visually appealing output beyond requirements |
| 💪 Consistent Contributor | Regular commits throughout the semester |
| 🤝 Peer Helper | Helps classmates with Git/GitHub issues |

### GitHub Pages (Optional — Advanced)

Students can host their HTML projects as **live websites** using GitHub Pages:
1. In the student's repo → **Settings** → **Pages**
2. Under "Source", select **main** branch → Click **Save**
3. The website is live at: `https://mandsauruniversity.github.io/repo-name/`

This is incredibly motivating — students can share their live website links with family and friends!

---

## 10. Semester Workflow Timeline

### Before Semester Starts
- [ ] Create GitHub organization (or use existing `MandsaurUniversity`)
- [ ] Apply for GitHub Education benefits
- [ ] Create the classroom on GitHub Classroom
- [ ] Prepare template repositories for the first 2–3 assignments
- [ ] Test the workflow yourself (accept an assignment, clone, push)

### Week 1 (Getting Started)
- [ ] Share course repo link with students
- [ ] In-class session: Help students create GitHub accounts
- [ ] In-class session: Install VS Code and GitHub Desktop
- [ ] Guide students through cloning the course repository
- [ ] Release first assignment (Lab 01 — Basic HTML page)

### Ongoing (Each Lab Session)
- [ ] Share assignment link at the start of the lab
- [ ] Walk around and help students who are stuck
- [ ] Remind students to **commit and push** before leaving
- [ ] Review submissions within 2–3 days
- [ ] Leave at least one comment on each submission

### End of Each Unit
- [ ] Review all submissions for that unit
- [ ] Showcase 2–3 best works in class
- [ ] Record grades
- [ ] Prepare templates for the next unit's assignments

### End of Semester
- [ ] Final project review
- [ ] Compile grades from all assignments
- [ ] Archive the classroom (optional)
- [ ] Encourage students to keep their repos for their portfolio

---

## 11. Troubleshooting

### Student can't accept assignment

| Issue | Solution |
|-------|----------|
| "Not a member of the organization" | Student needs to accept the organization invite (check their email) |
| "Couldn't fork repository" | GitHub Classroom issue — wait and retry |
| Link doesn't work | Regenerate the assignment link |

### Student pushed to wrong repository

1. The student may have accidentally committed to the main course repo
2. Check the course repo's commit history
3. Revert the unwanted commit if needed
4. Guide the student to their correct assignment repo

### Student says "I can't push"

- Most common: They haven't committed first
- Second most common: Authentication expired — sign in again via GitHub Desktop
- Third: They're trying to push to the main course repo (read-only for students)

### Too many students, hard to review

- Prioritize reviewing assignment quality over speed
- Use the assignment dashboard's "Submitted" filter
- Create a simple grading rubric (checkbox-style in the README)
- Consider peer review: Have students review each other's code

---

## Quick Reference

| Task | Where |
|------|-------|
| Create classroom | https://classroom.github.com → New classroom |
| Create assignment | Classroom dashboard → New assignment |
| Get invite link | Assignment page → Copy link |
| See submissions | Assignment page → Student list |
| Review code | Student repo → Files → Line comments |
| Course repo | https://github.com/MandsaurUniversity/BCA2-Web-Technology |

---

*This guide is part of the Web Technology (25BCA060) course materials at Mandsaur University.*
