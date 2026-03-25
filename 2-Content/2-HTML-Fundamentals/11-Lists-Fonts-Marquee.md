# Day 11 — Lists, Font Styling & Marquee Tag

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 2 — HTML Fundamentals
🧪 **Lab Experiment:** 1 (Lists portion)

---

## Learning Objectives

By the end of this session, students will be able to:
- Create ordered, unordered, and definition lists
- Nest lists within lists
- Change list marker styles
- Use the Marquee tag for scrolling text
- Apply font color changes

---

## 1. Ordered Lists (`<ol>`)

An ordered list displays items with numbers.

```html
<h3>Steps to Create a Web Page</h3>
<ol>
    <li>Open a text editor (VS Code)</li>
    <li>Write HTML code</li>
    <li>Save with .html extension</li>
    <li>Open in a web browser</li>
</ol>
```

### Changing the Number Type

```html
<ol type="1">  <!-- 1, 2, 3 (default) -->
<ol type="A">  <!-- A, B, C -->
<ol type="a">  <!-- a, b, c -->
<ol type="I">  <!-- I, II, III (Roman) -->
<ol type="i">  <!-- i, ii, iii -->
<ol start="5"> <!-- Start counting from 5 -->
```

---

## 2. Unordered Lists (`<ul>`)

An unordered list displays items with bullet points.

```html
<h3>Programming Languages</h3>
<ul>
    <li>Python</li>
    <li>JavaScript</li>
    <li>Java</li>
    <li>C++</li>
</ul>
```

### Changing the Bullet Style

```html
<ul type="disc">    <!-- ● Filled circle (default) -->
<ul type="circle">  <!-- ○ Empty circle -->
<ul type="square">  <!-- ■ Filled square -->
<ul type="none">    <!-- No bullet -->
```

---

## 3. Definition Lists (`<dl>`)

Used for terms and their definitions (like a glossary).

```html
<dl>
    <dt><strong>HTML</strong></dt>
    <dd>HyperText Markup Language — used for structuring web content.</dd>
    
    <dt><strong>CSS</strong></dt>
    <dd>Cascading Style Sheets — used for styling web pages.</dd>
    
    <dt><strong>JavaScript</strong></dt>
    <dd>A programming language for making web pages interactive.</dd>
</dl>
```

| Tag | Purpose |
|-----|---------|
| `<dl>` | Definition List container |
| `<dt>` | Definition Term (the word) |
| `<dd>` | Definition Description (the meaning, indented) |

---

## 4. Nested Lists

Lists can be placed inside other lists:

```html
<h3>BCA Curriculum</h3>
<ol>
    <li>Semester 1
        <ul>
            <li>Programming in C</li>
            <li>Computer Fundamentals</li>
            <li>Mathematics</li>
        </ul>
    </li>
    <li>Semester 2
        <ul>
            <li>Web Technology</li>
            <li>Data Structures</li>
            <li>Discrete Mathematics</li>
        </ul>
    </li>
    <li>Semester 3
        <ul>
            <li>Database Management</li>
            <li>Object-Oriented Programming</li>
        </ul>
    </li>
</ol>
```

---

## 5. The `<font>` Tag — Changing Font Color

```html
<font color="red" size="4" face="Georgia">This is red text in Georgia font</font>
<font color="#FF5722" size="6" face="Courier New">Orange in Courier</font>
```

> ⚠️ Deprecated in HTML5 — use CSS `color`, `font-size`, `font-family` instead. Covered here as it's in the syllabus.

---

## 6. Marquee Tag

The `<marquee>` tag creates **scrolling text** or content.

```html
<!-- Basic scrolling text (left to right) -->
<marquee>Welcome to Mandsaur University!</marquee>

<!-- Different directions -->
<marquee direction="right">Right to left ←</marquee>
<marquee direction="up">Scrolling up ↑</marquee>
<marquee direction="down">Scrolling down ↓</marquee>
```

### Marquee Attributes

| Attribute | Purpose | Values |
|-----------|---------|--------|
| `direction` | Scroll direction | `left`, `right`, `up`, `down` |
| `behavior` | Scroll behavior | `scroll` (continuous), `alternate` (bounce), `slide` (stop at edge) |
| `scrollamount` | Speed (pixels per frame) | Number (default: 6) |
| `scrolldelay` | Delay between frames (ms) | Number (default: 85) |
| `loop` | Number of loops | Number or `infinite` |
| `bgcolor` | Background color | Color name or hex |
| `width` | Width | Pixels or % |
| `height` | Height | Pixels |

### Marquee Examples

```html
<!-- Bouncing text -->
<marquee behavior="alternate" scrollamount="5">
    <font color="red" size="5">⚡ Flash Sale — 50% Off! ⚡</font>
</marquee>

<!-- Slow scroll with background -->
<marquee direction="up" height="100" scrollamount="2" bgcolor="#f0f0f0">
    <p>Notice 1: Exam schedule released</p>
    <p>Notice 2: Holiday on April 14</p>
    <p>Notice 3: Submit assignments by Friday</p>
</marquee>

<!-- Scrolling image -->
<marquee scrollamount="3">
    <img src="https://via.placeholder.com/100x50?text=Ad1" alt="Ad">
    &nbsp;&nbsp;&nbsp;
    <img src="https://via.placeholder.com/100x50?text=Ad2" alt="Ad">
</marquee>
```

> ⚠️ `<marquee>` is **deprecated** in HTML5 and not recommended for production websites. We cover it because it's in the syllabus. Use CSS animations instead (covered in Unit 4).

---

## Practical Session

### 🧪 Lab Experiment 1 (Lists): Enhanced Department Page with Lists

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BCA Department</title>
</head>
<body bgcolor="#FAFAFA">

    <!-- Marquee announcement -->
    <marquee bgcolor="#FF5722" scrollamount="4">
        <font color="white" size="3">
            📢 Admissions Open for 2026-27! Apply now at mandsauruniversity.edu.in
        </font>
    </marquee>

    <h1 align="center">Department of Computer Applications</h1>
    <h2 align="center">Mandsaur University</h2>
    <hr>

    <h3>Programs Offered</h3>
    <ol type="I">
        <li><strong>BCA</strong> (Bachelor of Computer Applications)
            <ul type="circle">
                <li>Duration: 3 Years (6 Semesters)</li>
                <li>Eligibility: 10+2 with Mathematics</li>
                <li>Fee: Contact admission office</li>
            </ul>
        </li>
    </ol>

    <h3>Semester II Subjects</h3>
    <ol>
        <li>Web Technology
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Bootstrap Framework</li>
            </ul>
        </li>
        <li>Data Structures
            <ul>
                <li>Arrays, Linked Lists</li>
                <li>Stacks, Queues, Trees</li>
            </ul>
        </li>
        <li>Discrete Mathematics</li>
        <li>English Communication</li>
        <li>Environmental Studies</li>
    </ol>

    <h3>Key Features</h3>
    <ul type="square">
        <li>Industry-oriented curriculum</li>
        <li>Experienced faculty</li>
        <li>Modern computer labs</li>
        <li>Placement assistance</li>
        <li>Regular workshops and seminars</li>
    </ul>

    <h3>Technologies Taught</h3>
    <dl>
        <dt><font color="blue"><b>HTML</b></font></dt>
        <dd>The standard markup language for creating web pages.</dd>
        
        <dt><font color="blue"><b>CSS</b></font></dt>
        <dd>Stylesheet language for designing beautiful web pages.</dd>
        
        <dt><font color="blue"><b>JavaScript</b></font></dt>
        <dd>Programming language for adding interactivity to websites.</dd>
        
        <dt><font color="blue"><b>MySQL</b></font></dt>
        <dd>Relational database management system for data storage.</dd>
    </dl>

    <hr>
    <marquee behavior="alternate" scrollamount="3">
        <font color="green" size="4">🎓 Building Tomorrow's IT Leaders Today 🎓</font>
    </marquee>

</body>
</html>
```

---

## Practice Exercise

Create `book-catalog.html`:
1. Use an ordered list to show "Top 5 Programming Books"
2. Each book should have a nested unordered list with: Author, Year, Rating
3. Add a definition list for 5 programming terms
4. Include a marquee at the top with "New Arrivals"
5. Use different list types (`type` attribute) across the page

---

## Summary

| Tag | Purpose |
|-----|---------|
| `<ol>` | Ordered list (numbered) |
| `<ul>` | Unordered list (bullets) |
| `<li>` | List item |
| `<dl>` | Definition list |
| `<dt>` | Definition term |
| `<dd>` | Definition description |
| `<marquee>` | Scrolling content (deprecated) |
| `<font>` | Font styling (deprecated) |

---

*Day 11 of 55 | Unit 2 — HTML Fundamentals | Web Technology (25BCA060)*
