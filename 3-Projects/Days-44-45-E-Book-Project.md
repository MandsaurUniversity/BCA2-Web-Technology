# Days 44–45 — Project: E-Book / E-Magazine Website

🔬 **Type:** Project Work
🕐 **Duration:** 4 Hours (2 days × 2 hours)
📚 **Unit:** Projects
🧪 **Lab Experiment:** 23

---

## Project Brief

Build an **interactive E-Book or E-Magazine website** that presents a topic from the Web Technology course in a visually rich, multi-page digital publication format using HTML5, CSS3, JavaScript, and Bootstrap.

---

## Topic Suggestions

Choose ONE topic and create an e-book around it:

| Topic | Pages ~5-7 |
|-------|-----------|
| "HTML5 — A Complete Guide" | Intro, Elements, Forms, Canvas, APIs, Summary |
| "CSS Mastery" | Selectors, Box Model, Flexbox, Grid, Animations |
| "JavaScript for Beginners" | Variables, Functions, DOM, Events, Validation |
| "Web Development Career Guide" | Introduction, Frontend, Backend, Tools, Roadmap |
| "Bootstrap Handbook" | Setup, Grid, Components, Forms, Responsive Tips |

---

## Requirements

### Technical Specifications

| Requirement | Details |
|------------|---------|
| **Pages** | Minimum 5 pages/sections (can be single-page with navigation) |
| **HTML5** | Semantic elements, proper structure |
| **CSS** | Custom theme (colors, fonts, spacing), print-friendly |
| **Bootstrap** | Layout, navigation, cards, accordion |
| **JavaScript** | Page navigation, dark mode toggle, reading progress, bookmark |
| **Responsive** | Readable on phone, tablet, desktop |
| **Media** | At least 3 code examples, 2 tables, 1 list |

---

## Recommended Structure (Single-Page Book)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Book: HTML5 Complete Guide</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        :root {
            --book-bg: #fff;
            --book-text: #333;
            --book-accent: #0d6efd;
        }
        [data-theme="dark"] {
            --book-bg: #1a1a2e;
            --book-text: #e0e0e0;
            --book-accent: #4da6ff;
        }
        body {
            background: var(--book-bg);
            color: var(--book-text);
            transition: all 0.3s ease;
        }
        .book-container { max-width: 800px; margin: 0 auto; }
        .chapter { padding: 40px 0; border-bottom: 1px solid #dee2e6; }
        .chapter-number {
            font-size: 0.9rem; text-transform: uppercase;
            letter-spacing: 3px; color: var(--book-accent);
        }
        code { background: #f8f9fa; padding: 2px 6px; border-radius: 3px; }
        [data-theme="dark"] code { background: #2d2d44; }
        pre { background: #2d2d44; color: #e0e0e0; padding: 20px;
              border-radius: 8px; overflow-x: auto; }
        .reading-progress {
            position: fixed; top: 0; left: 0; height: 4px;
            background: var(--book-accent); z-index: 9999; transition: width 0.1s;
        }
        .toc-sidebar {
            position: sticky; top: 80px;
        }
        .back-to-top {
            position: fixed; bottom: 30px; right: 30px; display: none;
            z-index: 999;
        }
    </style>
</head>
<body>

    <!-- Reading Progress Bar -->
    <div class="reading-progress" id="readingProgress"></div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">📖 E-Book</a>
            <div class="d-flex align-items-center">
                <button class="btn btn-outline-light btn-sm me-2" id="darkModeToggle">
                    🌙 Dark Mode
                </button>
                <button class="btn btn-outline-light btn-sm" data-bs-toggle="offcanvas" 
                        data-bs-target="#tocPanel">
                    📑 Contents
                </button>
            </div>
        </div>
    </nav>

    <!-- Table of Contents Offcanvas -->
    <div class="offcanvas offcanvas-start" id="tocPanel">
        <div class="offcanvas-header">
            <h5>Table of Contents</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
            <nav class="nav flex-column">
                <a class="nav-link" href="#cover">Cover</a>
                <a class="nav-link" href="#ch1">Chapter 1: Introduction</a>
                <a class="nav-link" href="#ch2">Chapter 2: HTML5 Elements</a>
                <a class="nav-link" href="#ch3">Chapter 3: Forms & Input</a>
                <a class="nav-link" href="#ch4">Chapter 4: Canvas & SVG</a>
                <a class="nav-link" href="#ch5">Chapter 5: APIs</a>
                <a class="nav-link" href="#summary">Summary</a>
            </nav>
        </div>
    </div>

    <div class="container py-4">
        <div class="row">

            <!-- Sidebar TOC (desktop) -->
            <div class="col-lg-3 d-none d-lg-block">
                <div class="toc-sidebar">
                    <h6 class="text-muted text-uppercase mb-3">Contents</h6>
                    <nav class="nav flex-column small" id="sidebarNav">
                        <a class="nav-link py-1" href="#cover">Cover</a>
                        <a class="nav-link py-1" href="#ch1">1. Introduction</a>
                        <a class="nav-link py-1" href="#ch2">2. Elements</a>
                        <a class="nav-link py-1" href="#ch3">3. Forms</a>
                        <a class="nav-link py-1" href="#ch4">4. Canvas & SVG</a>
                        <a class="nav-link py-1" href="#ch5">5. APIs</a>
                        <a class="nav-link py-1" href="#summary">Summary</a>
                    </nav>
                </div>
            </div>

            <!-- Book Content -->
            <div class="col-lg-9 book-container">

                <!-- Cover -->
                <section id="cover" class="text-center py-5">
                    <p class="text-muted mb-2">BCA Semester II — Web Technology</p>
                    <h1 class="display-3 fw-bold text-primary">HTML5</h1>
                    <h2 class="display-6">A Complete Guide</h2>
                    <hr class="w-25 mx-auto my-4">
                    <p class="lead">A student e-book covering HTML5 fundamentals,<br>
                    new elements, forms, canvas, and modern web APIs.</p>
                    <p class="text-muted mt-4">By: [Your Name] | Roll: [Your Roll No]<br>
                    Mandsaur University — 2026</p>
                </section>

                <!-- Chapter 1 -->
                <section id="ch1" class="chapter">
                    <p class="chapter-number">Chapter 1</p>
                    <h2>Introduction to HTML5</h2>
                    <p>HTML5 is the fifth and latest major version of HTML.
                    It was published by the W3C in October 2014 and represents
                    a major evolution of web markup language...</p>
                    
                    <div class="alert alert-info">
                        <strong>Key Fact:</strong> HTML5 introduced semantic elements, 
                        multimedia support, and powerful APIs for building modern web apps.
                    </div>

                    <h4>What's New in HTML5?</h4>
                    <table class="table table-bordered">
                        <thead class="table-primary">
                            <tr><th>Feature</th><th>Description</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Semantic Elements</td><td><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, etc.</td></tr>
                            <tr><td>Multimedia</td><td><code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code></td></tr>
                            <tr><td>Canvas</td><td>2D drawing API</td></tr>
                            <tr><td>SVG</td><td>Scalable Vector Graphics</td></tr>
                            <tr><td>New Form Inputs</td><td>date, email, range, color</td></tr>
                            <tr><td>APIs</td><td>Geolocation, Web Storage, Drag & Drop</td></tr>
                        </tbody>
                    </table>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My First HTML5 Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;Welcome&lt;/header&gt;
    &lt;main&gt;Content here&lt;/main&gt;
    &lt;footer&gt;Footer&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                </section>

                <!-- Chapter 2 -->
                <section id="ch2" class="chapter">
                    <p class="chapter-number">Chapter 2</p>
                    <h2>HTML5 Semantic Elements</h2>
                    <p>Add your content about semantic elements here: 
                    <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, 
                    <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, 
                    <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, 
                    <code>&lt;footer&gt;</code>.</p>
                    <p><em>[Students complete this chapter with their content]</em></p>
                </section>

                <!-- Chapter 3 -->
                <section id="ch3" class="chapter">
                    <p class="chapter-number">Chapter 3</p>
                    <h2>HTML5 Forms & Input Types</h2>
                    <p>Cover the new input types and form validation.</p>
                    <p><em>[Students complete this chapter]</em></p>
                </section>

                <!-- Chapter 4 -->
                <section id="ch4" class="chapter">
                    <p class="chapter-number">Chapter 4</p>
                    <h2>Canvas & SVG</h2>
                    <p>Explain the <code>&lt;canvas&gt;</code> element and SVG graphics.</p>
                    <p><em>[Students complete this chapter]</em></p>
                </section>

                <!-- Chapter 5 -->
                <section id="ch5" class="chapter">
                    <p class="chapter-number">Chapter 5</p>
                    <h2>HTML5 APIs</h2>
                    <p>Cover Geolocation, Web Storage, and Drag & Drop.</p>
                    <p><em>[Students complete this chapter]</em></p>
                </section>

                <!-- Summary -->
                <section id="summary" class="chapter">
                    <p class="chapter-number">Summary</p>
                    <h2>Key Takeaways</h2>
                    <ul>
                        <li>HTML5 introduced semantic elements for better structure</li>
                        <li>New input types simplify form creation and validation</li>
                        <li>Canvas and SVG enable rich graphics in the browser</li>
                        <li>Web APIs like Geolocation and Web Storage add powerful features</li>
                        <li>HTML5 is the foundation of modern web development</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>

    <!-- Back to Top -->
    <button class="btn btn-primary rounded-circle back-to-top shadow" id="backToTop" 
            style="width: 50px; height: 50px;">↑</button>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    (function() {
        'use strict';

        // Reading Progress Bar
        window.addEventListener('scroll', function() {
            var scrollTop = window.scrollY;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            var progress = (scrollTop / docHeight) * 100;
            document.getElementById('readingProgress').style.width = progress + '%';

            // Back to top button
            var btn = document.getElementById('backToTop');
            btn.style.display = scrollTop > 300 ? 'block' : 'none';
        });

        // Back to top
        document.getElementById('backToTop').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Dark Mode Toggle
        document.getElementById('darkModeToggle').addEventListener('click', function() {
            var isDark = document.body.getAttribute('data-theme') === 'dark';
            document.body.setAttribute('data-theme', isDark ? '' : 'dark');
            this.textContent = isDark ? '🌙 Dark Mode' : '☀️ Light Mode';
            localStorage.setItem('ebook-theme', isDark ? 'light' : 'dark');
        });

        // Load saved theme
        if (localStorage.getItem('ebook-theme') === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            document.getElementById('darkModeToggle').textContent = '☀️ Light Mode';
        }

        // Close offcanvas on link click
        document.querySelectorAll('.offcanvas .nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                var offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('tocPanel'));
                if (offcanvas) offcanvas.hide();
            });
        });
    })();
    </script>

</body>
</html>
```

---

## Grading Rubric

| Criteria | Marks | Checklist |
|----------|-------|-----------|
| Content Quality (5+ chapters) | 15 | Accurate, well-written, covers topic thoroughly |
| HTML5 Semantic Structure | 10 | Proper use of semantic elements |
| CSS/Bootstrap Styling | 10 | Visually appealing, consistent theme |
| JavaScript Features | 15 | Dark mode, progress bar, back-to-top, TOC navigation |
| Code Examples & Tables | 10 | At least 3 code blocks, 2 tables, 1 list |
| Responsive Design | 5 | Readable on all screen sizes |
| Creativity & UX | 5 | Original design touches, good reading experience |
| **Total** | **70** | |

---

## Tips for Students

1. **Choose a topic you're comfortable with** — you'll write better content
2. **Write in your own words** — this tests understanding, not copy-paste
3. **Include working code examples** — tested in your browser
4. **Use Bootstrap for layout** — but add custom CSS for personality
5. **Test on mobile** — resize your browser to check responsiveness
6. **Have fun with it** — this is YOUR digital book!

---

*Days 44–45 of 55 | Projects | Web Technology (25BCA060)*
