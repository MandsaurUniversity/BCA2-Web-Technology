# Days 42–43 — Project: Department Website

🔬 **Type:** Project Work
🕐 **Duration:** 4 Hours (2 days × 2 hours)
📚 **Unit:** Projects
🧪 **Lab Experiment:** 22

---

## Project Brief

Build a **complete, multi-page responsive website for the BCA Department of Mandsaur University** using all technologies learned in this course: HTML5, CSS3, JavaScript, and Bootstrap.

---

## Requirements

### Must-Have Pages (Minimum 5)

| Page | Filename | Description |
|------|----------|-------------|
| Home | `index.html` | Hero section, carousel, quick links, overview |
| About | `about.html` | Department history, vision, mission, stats |
| Courses | `courses.html` | Semester-wise subjects, syllabus cards |
| Faculty | `faculty.html` | Faculty profiles with cards |
| Contact | `contact.html` | Contact form, map, address info |
| Admission *(bonus)* | `admission.html` | Admission form with validation |

### Technical Requirements

| Requirement | Details |
|------------|---------|
| **HTML5** | Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`) |
| **CSS** | External stylesheet, custom styling beyond Bootstrap |
| **Bootstrap** | Grid system, navbar, cards, carousel, forms, modals |
| **JavaScript** | Form validation, dynamic content, interactivity |
| **Responsive** | Works on mobile, tablet, and desktop |
| **Navigation** | Consistent navbar across all pages |
| **Accessibility** | Alt text on images, proper heading hierarchy, labels on forms |

---

## Project Structure

```
department-website/
├── index.html
├── about.html
├── courses.html
├── faculty.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── (placeholder images)
```

---

## Day 42: Build the Structure (2 Hours)

### Step 1: Create Shared Navbar (copy to all pages)

```html
<!-- Navbar — same on every page -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
    <div class="container">
        <a class="navbar-brand fw-bold" href="index.html">🎓 MU — BCA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                <li class="nav-item"><a class="nav-link" href="courses.html">Courses</a></li>
                <li class="nav-item"><a class="nav-link" href="faculty.html">Faculty</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
```

### Step 2: Create Shared Footer

```html
<footer class="bg-dark text-white py-4 mt-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h5>🎓 Mandsaur University</h5>
                <p class="text-muted small">BCA Department — Empowering future IT professionals</p>
            </div>
            <div class="col-md-4">
                <h6>Quick Links</h6>
                <ul class="list-unstyled small">
                    <li><a href="index.html" class="text-muted text-decoration-none">Home</a></li>
                    <li><a href="courses.html" class="text-muted text-decoration-none">Courses</a></li>
                    <li><a href="contact.html" class="text-muted text-decoration-none">Contact</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h6>Contact</h6>
                <p class="text-muted small mb-1">📧 bca@mfrims.ac.in</p>
                <p class="text-muted small">📞 +91-7422-123456</p>
            </div>
        </div>
        <hr>
        <p class="text-center text-muted small mb-0">&copy; 2026 Mandsaur University. All rights reserved.</p>
    </div>
</footer>
```

### Step 3: Home Page — `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BCA Department — Mandsaur University</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>

    <!-- Paste Navbar here -->

    <!-- Hero Carousel -->
    <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="bg-primary text-white text-center py-5" style="padding: 100px 0 !important;">
                    <div class="container">
                        <h1 class="display-3 fw-bold">Welcome to BCA Department</h1>
                        <p class="lead fs-4">Bachelor of Computer Applications — Mandsaur University</p>
                        <a href="courses.html" class="btn btn-outline-light btn-lg mt-3">View Courses</a>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="bg-success text-white text-center py-5" style="padding: 100px 0 !important;">
                    <div class="container">
                        <h1 class="display-3 fw-bold">Learn. Build. Create.</h1>
                        <p class="lead fs-4">Hands-on practical experience with modern web technologies</p>
                        <a href="about.html" class="btn btn-outline-light btn-lg mt-3">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>

    <!-- Features Section -->
    <section class="py-5">
        <div class="container">
            <h2 class="text-center text-primary mb-5">Why Choose BCA at MU?</h2>
            <div class="row g-4">
                <div class="col-md-4 text-center">
                    <div class="display-3 mb-3">💻</div>
                    <h4>Modern Curriculum</h4>
                    <p>Industry-aligned syllabus covering web development, programming, and databases.</p>
                </div>
                <div class="col-md-4 text-center">
                    <div class="display-3 mb-3">🔬</div>
                    <h4>Practical Focus</h4>
                    <p>30+ lab experiments per subject with hands-on coding every day.</p>
                </div>
                <div class="col-md-4 text-center">
                    <div class="display-3 mb-3">🎯</div>
                    <h4>Career Ready</h4>
                    <p>Placement assistance and skill development programs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Paste Footer here -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

### Step 4: Custom CSS — `css/style.css`

```css
/* BCA Department Website Styles */

/* Global */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Active nav link */
.nav-link.active {
    font-weight: bold;
    border-bottom: 2px solid white;
}

/* Card hover effect */
.card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Section spacing */
section {
    padding: 60px 0;
}
```

---

## Day 43: Complete Remaining Pages (2 Hours)

### Build these pages following the same pattern:

1. **about.html** — Department history, stats (cards showing "3 Year Program", "6 Semesters", etc.), vision/mission
2. **courses.html** — Semester-wise accordion, subject cards with Bootstrap tabs
3. **faculty.html** — Faculty cards with image placeholders, designation, expertise
4. **contact.html** — Bootstrap form with validation + address/map section

### Custom JavaScript — `js/script.js`

```javascript
// Highlight active page in navbar
(function() {
    'use strict';
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
})();

// Contact form validation
var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!this.checkValidity()) {
            e.stopPropagation();
            this.classList.add('was-validated');
        } else {
            alert('Thank you! Your message has been sent.');
            this.reset();
            this.classList.remove('was-validated');
        }
    });
}
```

---

## Grading Rubric

| Criteria | Marks | Checklist |
|----------|-------|-----------|
| HTML5 Semantic Structure | 10 | Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| CSS Styling & Custom CSS | 10 | External CSS, beyond default Bootstrap |
| Bootstrap Components | 15 | Grid, navbar, cards, carousel, forms |
| JavaScript Interactivity | 10 | Form validation, dynamic content |
| Responsive Design | 10 | Works on mobile + desktop |
| Navigation & Consistency | 5 | Same navbar/footer on all pages |
| Content & Creativity | 5 | Meaningful content, good UX |
| Code Quality | 5 | Clean, indented, commented |
| **Total** | **70** | |

---

*Days 42–43 of 55 | Projects | Web Technology (25BCA060)*
