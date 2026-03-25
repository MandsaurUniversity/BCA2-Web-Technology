# Day 12 — Div, Span & Page Layout

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 2 — HTML Fundamentals
🧪 **Lab Experiment:** 7

---

## Learning Objectives

By the end of this session, students will be able to:
- Understand block vs inline elements
- Use `<div>` for section-level grouping
- Use `<span>` for inline text grouping
- Replace table-based layouts with div-based layouts
- Apply basic styling attributes to div elements

---

## 1. Block vs Inline Elements

### Block Elements

Block elements take up the **full width available** and start on a **new line**.

```
┌──────────────────────────────────────────┐
│ <h1>This is a heading (full width)       │
├──────────────────────────────────────────┤
│ <p>This paragraph also takes full width  │
├──────────────────────────────────────────┤
│ <div>Div is a block element             │
└──────────────────────────────────────────┘
```

Common block elements: `<div>`, `<p>`, `<h1>`–`<h6>`, `<table>`, `<ul>`, `<ol>`, `<form>`, `<hr>`

### Inline Elements

Inline elements only take up **as much width as needed** and do NOT start a new line.

```
This is a paragraph with <strong>bold</strong> and <em>italic</em> words inline.
```

Common inline elements: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<b>`, `<i>`, `<code>`

---

## 2. The `<div>` Tag

> **Analogy:** `<div>` is like a **cardboard box** — it groups related items together. You can label the box, color it, size it, and move it around. By nesting boxes inside boxes, you build a page **layout**.

```html
<div style="background-color: #e0f7fa; padding: 15px; margin: 10px;">
    <h2>About Us</h2>
    <p>We are the BCA department at Mandsaur University.</p>
</div>

<div style="background-color: #fff3e0; padding: 15px; margin: 10px;">
    <h2>Our Courses</h2>
    <p>We offer BCA, a three-year undergraduate program.</p>
</div>
```

### Common Uses of `<div>`

| Use | Description |
|-----|-------------|
| **Sections** | Group related content (header, footer, sidebar) |
| **Layout** | Create page structure (columns, rows) |
| **Styling target** | Apply CSS to a group of elements |
| **Wrapper** | Wrap the entire page content |

---

## 3. The `<span>` Tag

> **Analogy:** If `<div>` is a box, `<span>` is a **highlighter pen**. It marks a small piece of text within a line, without breaking the flow.

```html
<p>
    The exam is on <span style="color: red; font-weight: bold;">15th April</span> 
    in room <span style="background-color: yellow;">301</span>.
</p>
```

### Div vs Span

| Feature | `<div>` | `<span>` |
|---------|---------|----------|
| **Type** | Block element | Inline element |
| **Line break** | Starts on new line | Stays in the flow |
| **Default width** | Full width of parent | Only the content width |
| **Use for** | Sections, layouts, groups | Words, phrases within text |
| **Analogy** | A cardboard box | A highlighter pen |

---

## 4. Replacing Table Layouts with Div Layouts

In Day 10, we used tables for page layout. Now we replace that with `<div>` (the modern approach).

### Old Way (Table Layout) vs New Way (Div Layout)

**Old Way — Table:**
```html
<table width="100%">
    <tr>
        <td width="25%">Sidebar</td>
        <td width="75%">Main Content</td>
    </tr>
</table>
```

**New Way — Div (using inline styles for now, CSS later):**
```html
<div style="width: 100%; overflow: hidden;">
    <div style="width: 25%; float: left; background: #eee; padding: 10px;">
        Sidebar
    </div>
    <div style="width: 70%; float: left; padding: 10px;">
        Main Content
    </div>
</div>
```

---

## Practical Session

### 🧪 Lab Experiment 7: Div/Span Layout for University Page

**Objective:** Recreate the university infrastructure page from Lab 6, but using `<div>` and `<span>` tags instead of tables.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>University Infrastructure - Div Layout</title>
</head>
<body style="margin: 0; font-family: Arial, sans-serif;">

    <!-- Header -->
    <div style="background-color: #0D47A1; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Mandsaur University</h1>
        <p style="margin: 5px 0 0 0;">Excellence in Education</p>
    </div>

    <!-- Navigation Bar -->
    <div style="background-color: #1565C0; padding: 10px; text-align: center;">
        <a href="#" style="color: white; text-decoration: none; margin: 0 15px;">Home</a>
        <a href="#" style="color: white; text-decoration: none; margin: 0 15px;">About</a>
        <a href="#" style="color: white; text-decoration: none; margin: 0 15px;">Departments</a>
        <a href="#" style="color: white; text-decoration: none; margin: 0 15px;">Facilities</a>
        <a href="#" style="color: white; text-decoration: none; margin: 0 15px;">Contact</a>
    </div>

    <!-- Main Content Wrapper -->
    <div style="max-width: 960px; margin: 20px auto; padding: 0 20px;">
        
        <!-- Two-column section -->
        <div style="overflow: hidden; margin-bottom: 20px;">
            <!-- Left column -->
            <div style="width: 48%; float: left;">
                <img src="https://via.placeholder.com/450x300?text=Computer+Lab" 
                     alt="Computer Lab" style="width: 100%;">
                <p style="text-align: center;"><strong>Computer Lab</strong></p>
            </div>
            <!-- Right column -->
            <div style="width: 48%; float: right;">
                <h2>Computer Labs</h2>
                <p>
                    Our computer labs feature <span style="color: #1565C0; font-weight: bold;">60 workstations</span> 
                    with high-speed internet connectivity.
                </p>
                <p>
                    Software: <span style="background-color: #E3F2FD; padding: 2px 6px;">VS Code</span>, 
                    <span style="background-color: #E3F2FD; padding: 2px 6px;">MySQL</span>, 
                    <span style="background-color: #E3F2FD; padding: 2px 6px;">Python</span>
                </p>
            </div>
        </div>
        
        <!-- Second two-column section (reversed) -->
        <div style="overflow: hidden; margin-bottom: 20px; clear: both;">
            <div style="width: 48%; float: left;">
                <h2>Library</h2>
                <p>
                    The central library has over 
                    <span style="color: red; font-weight: bold;">50,000 books</span> 
                    and digital resources.
                </p>
            </div>
            <div style="width: 48%; float: right;">
                <img src="https://via.placeholder.com/450x300?text=Library" 
                     alt="Library" style="width: 100%;">
                <p style="text-align: center;"><strong>Central Library</strong></p>
            </div>
        </div>

        <!-- Info boxes -->
        <div style="clear: both; overflow: hidden;">
            <div style="width: 30%; float: left; background: #E8F5E9; padding: 15px; margin: 1%; text-align: center;">
                <h3>Smart Classrooms</h3>
                <p>Projectors, interactive boards, and multimedia systems</p>
            </div>
            <div style="width: 30%; float: left; background: #FFF3E0; padding: 15px; margin: 1%; text-align: center;">
                <h3>Sports Complex</h3>
                <p>Indoor and outdoor sports facilities for all students</p>
            </div>
            <div style="width: 30%; float: left; background: #F3E5F5; padding: 15px; margin: 1%; text-align: center;">
                <h3>Hostels</h3>
                <p>Separate boys and girls hostels with modern amenities</p>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div style="clear: both; background-color: #0D47A1; color: white; text-align: center; padding: 15px; margin-top: 20px;">
        <p>&copy; 2026 Mandsaur University | All Rights Reserved</p>
    </div>

</body>
</html>
```

---

## Practice Exercise

Create `portfolio.html` — a personal portfolio page using only `<div>` and `<span>` (no tables):

1. **Header div** — Your name and tagline
2. **Navigation div** — Links to sections (About, Skills, Contact)
3. **About div** — A paragraph about yourself with `<span>` highlighting
4. **Skills div** — Three columns (Frontend, Backend, Tools) using floated divs
5. **Contact div** — Your contact details
6. **Footer div** — Copyright

---

## Summary

| Concept | Key Takeaway |
|---------|-------------|
| Block elements | Full width, new line (`<div>`, `<p>`, `<h1>`) |
| Inline elements | Flow within text (`<span>`, `<a>`, `<strong>`) |
| `<div>` | Groups block content; used for layouts and sections |
| `<span>` | Targets inline text for styling |
| Float layout | `float: left/right` creates multi-column layouts |
| Modern practice | Use `<div>` instead of `<table>` for page layout |

---

*Day 12 of 55 | Unit 2 — HTML Fundamentals | Web Technology (25BCA060)*
