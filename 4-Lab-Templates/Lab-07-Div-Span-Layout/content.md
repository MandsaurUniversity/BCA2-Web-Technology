# Dummy Content — Div/Span Layout for Infrastructure Page

This lab uses the **same infrastructure content as Lab 06**. Refer to `../Lab-06-University-Infrastructure-Table/content.md` for the full descriptions of all 8 infrastructure items.

The difference is: instead of using `<table>` for layout, you will use `<div>` and `<span>` with CSS.

---

## Page Structure (Using Divs)

Use the following div-based layout:

```
+--------------------------------------------------+
|              div#header                           |
|   Mandsaur University — Campus Infrastructure     |
+----------+---------------------------------------+
|          |                                       |
| div      |       div#main-content                |
| #sidebar |                                       |
|          |  +----------------------------------+  |
| Quick    |  | div.card                         |  |
| Links:   |  |  <img> + <h3> + <p>             |  |
| - Home   |  +----------------------------------+  |
| - Labs   |  | div.card                         |  |
| - Library|  |  <img> + <h3> + <p>             |  |
| - Sports |  +----------------------------------+  |
| - Hostel |  | div.card                         |  |
| - Cafe   |  |  <img> + <h3> + <p>             |  |
|          |  +----------------------------------+  |
+----------+---------------------------------------+
|              div#footer                           |
|   © 2025 Mandsaur University                      |
+--------------------------------------------------+
```

---

## Suggested Div IDs and Classes

| Element | Tag | ID/Class | Purpose |
|---------|-----|----------|---------|
| Page wrapper | `<div>` | `id="wrapper"` | Contains everything, sets max-width |
| Header | `<div>` | `id="header"` | University name and page title |
| Sidebar | `<div>` | `id="sidebar"` | Quick navigation links |
| Main content | `<div>` | `id="main-content"` | Infrastructure cards |
| Each item | `<div>` | `class="card"` | One infrastructure item |
| Footer | `<div>` | `id="footer"` | Copyright information |

---

## Suggested CSS Properties

Write these in `style.css`:

### Body and Wrapper
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}
#wrapper {
    max-width: 1200px;
    margin: 0 auto;
}
```

### Header
```css
#header {
    background-color: #1a5276;
    color: white;
    padding: 20px;
    text-align: center;
}
```

### Sidebar
```css
#sidebar {
    float: left;
    width: 20%;
    background-color: #d5dbdb;
    padding: 15px;
    min-height: 500px;
}
```

### Main Content
```css
#main-content {
    float: left;
    width: 75%;
    padding: 15px;
}
```

### Cards
```css
.card {
    background-color: white;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 15px;
    overflow: hidden; /* clearfix for floated image */
}
.card img {
    float: left;
    margin-right: 15px;
}
```

### Footer
```css
#footer {
    clear: both;
    background-color: #1a5276;
    color: white;
    padding: 10px;
    text-align: center;
}
```

---

## Using `<span>` for Inline Styling

Use `<span>` to highlight specific text within paragraphs:

```html
<p>The lab has <span style="color: #e74c3c; font-weight: bold;">120 computers</span> 
with <span style="color: #2980b9; font-weight: bold;">high-speed internet</span> connectivity.</p>
```

You can also use CSS classes with spans:
```html
<span class="highlight">Important text</span>
<span class="capacity">300 rooms</span>
```

```css
.highlight { color: #e74c3c; font-weight: bold; }
.capacity { color: #27ae60; font-style: italic; }
```

---

## Infrastructure Items

Use the same 8 items from Lab 06:
1. Main Academic Building
2. Computer Science Laboratory
3. Central Library
4. Auditorium
5. Boys Hostel
6. Girls Hostel
7. Sports Complex
8. Cafeteria

Refer to `../Lab-06-University-Infrastructure-Table/content.md` for full descriptions and placeholder image URLs.
