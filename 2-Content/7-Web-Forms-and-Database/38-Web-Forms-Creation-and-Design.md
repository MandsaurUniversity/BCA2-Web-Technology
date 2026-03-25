# Day 38 — Web Forms: Creation & Design

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 7 — Web Forms & Database
🧪 **Lab Experiment:** 22 (Part 1)

---

## Learning Objectives

By the end of this session, students will be able to:
- Understand the concept of web forms and form processing
- Design professional web forms using HTML and CSS/Bootstrap
- Use all HTML form elements effectively
- Plan a multi-page form-based website

---

## 1. How Web Forms Work

> **Analogy:** A web form is like a **paper application form** at a university office. You fill it in (client-side), submit it at the counter (server), and the clerk processes it (server-side processing) — entering your data into the system (database).

### Form Processing Flow

```
User fills form → Browser sends data → Web Server receives → 
Server processes → Stores in Database → Sends response back
```

### Form Action & Method

```html
<form action="process.html" method="GET">   <!-- Data in URL -->
<form action="process.html" method="POST">  <!-- Data in body (secure) -->
```

| Attribute | Purpose |
|-----------|---------|
| `action` | URL where form data is sent |
| `method` | `GET` (URL params) or `POST` (body) |
| `enctype` | Data encoding (needed for file uploads) |
| `target` | Where to display response |

### GET vs POST

| Feature | GET | POST |
|---------|-----|------|
| Data location | URL query string | Request body |
| Visible | Yes | No |
| Security | Less secure | More secure |
| Data limit | ~2048 chars | No limit |
| Bookmarkable | Yes | No |
| Use for | Search, filters | Login, registration |

---

## 2. Complete Form Elements Reference

### Text Inputs

```html
<input type="text" name="username" placeholder="Username" required>
<input type="email" name="email" placeholder="Email" required>
<input type="password" name="pwd" minlength="8">
<input type="tel" name="phone" pattern="\d{10}">
<input type="url" name="website" placeholder="https://...">
<input type="search" name="q" placeholder="Search...">
<input type="number" name="age" min="16" max="100" step="1">
<input type="range" name="rating" min="1" max="10" value="5">
```

### Date & Time

```html
<input type="date" name="dob">
<input type="time" name="appt-time">
<input type="datetime-local" name="meeting">
<input type="month" name="start-month">
<input type="week" name="start-week">
```

### Selection Controls

```html
<!-- Radio Buttons (choose ONE) -->
<input type="radio" name="gender" value="male" id="m">
<label for="m">Male</label>
<input type="radio" name="gender" value="female" id="f">
<label for="f">Female</label>

<!-- Checkboxes (choose MANY) -->
<input type="checkbox" name="lang" value="html" id="html">
<label for="html">HTML</label>
<input type="checkbox" name="lang" value="css" id="css">
<label for="css">CSS</label>

<!-- Dropdown -->
<select name="course">
    <option value="" disabled selected>Select course</option>
    <option value="bca">BCA</option>
    <option value="bba">BBA</option>
</select>

<!-- Multi-Select -->
<select name="skills" multiple size="4">
    <option>HTML</option>
    <option>CSS</option>
    <option>JavaScript</option>
    <option>Bootstrap</option>
</select>

<!-- Datalist (autocomplete) -->
<input type="text" list="cities" name="city">
<datalist id="cities">
    <option value="Mandsaur">
    <option value="Indore">
    <option value="Bhopal">
</datalist>
```

### Other Controls

```html
<textarea name="message" rows="5" cols="40" placeholder="Your message..."></textarea>

<input type="file" name="photo" accept="image/*">
<input type="file" name="docs" accept=".pdf,.doc" multiple>

<input type="color" name="fav-color" value="#0d6efd">
<input type="hidden" name="user_id" value="12345">
```

### Grouping with Fieldset

```html
<fieldset>
    <legend>Personal Information</legend>
    <label>Name: <input type="text" name="name"></label><br>
    <label>Email: <input type="email" name="email"></label>
</fieldset>
```

---

## 3. Input Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `required` | Must fill before submit | `<input required>` |
| `placeholder` | Hint text | `placeholder="Enter name"` |
| `value` | Default value | `value="BCA"` |
| `readonly` | Can't edit | `<input readonly>` |
| `disabled` | Can't edit or submit | `<input disabled>` |
| `autofocus` | Focus on page load | `<input autofocus>` |
| `autocomplete` | Browser auto-fill | `autocomplete="off"` |
| `pattern` | Regex validation | `pattern="\d{10}"` |
| `min/max` | Numeric range | `min="0" max="100"` |
| `minlength/maxlength` | Text length | `minlength="3"` |
| `step` | Number increment | `step="0.01"` |

---

## Practical Session

### 🧪 Lab Experiment 22 (Part 1): Student Admission Form

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Admission Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white text-center py-3">
                        <h3 class="mb-0">🎓 Mandsaur University</h3>
                        <p class="mb-0">Student Admission Form — BCA 2026-27</p>
                    </div>
                    <div class="card-body p-4">
                        <form class="needs-validation" novalidate>

                            <!-- Personal Information -->
                            <fieldset class="mb-4">
                                <legend class="fs-5 text-primary border-bottom pb-2">Personal Information</legend>
                                
                                <div class="row g-3 mt-2">
                                    <div class="col-md-4">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="fname" placeholder="First" required>
                                            <label for="fname">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="mname" placeholder="Middle">
                                            <label for="mname">Middle Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="lname" placeholder="Last" required>
                                            <label for="lname">Last Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row g-3 mt-1">
                                    <div class="col-md-6">
                                        <label class="form-label">Date of Birth</label>
                                        <input type="date" class="form-control" name="dob" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Gender</label>
                                        <div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="gm" value="male" required>
                                                <label class="form-check-label" for="gm">Male</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="gf" value="female">
                                                <label class="form-check-label" for="gf">Female</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="go" value="other">
                                                <label class="form-check-label" for="go">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <label class="form-label">Photo</label>
                                    <input type="file" class="form-control" accept="image/jpeg,image/png" name="photo">
                                    <small class="text-muted">JPEG or PNG, max 200KB</small>
                                </div>
                            </fieldset>

                            <!-- Contact Information -->
                            <fieldset class="mb-4">
                                <legend class="fs-5 text-primary border-bottom pb-2">Contact Information</legend>
                                
                                <div class="row g-3 mt-2">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Email" required>
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="tel" class="form-control" id="phone" placeholder="Phone" 
                                                   required pattern="\d{10}">
                                            <label for="phone">Phone (10 digits)</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-floating mt-3">
                                    <textarea class="form-control" id="address" placeholder="Address" 
                                              style="height: 80px" required></textarea>
                                    <label for="address">Full Address</label>
                                </div>

                                <div class="row g-3 mt-1">
                                    <div class="col-md-4">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="city" 
                                                   list="cityList" placeholder="City" required>
                                            <label for="city">City</label>
                                            <datalist id="cityList">
                                                <option value="Mandsaur">
                                                <option value="Indore">
                                                <option value="Bhopal">
                                                <option value="Ujjain">
                                            </datalist>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating">
                                            <select class="form-select" id="state" required>
                                                <option value="" disabled selected></option>
                                                <option>Madhya Pradesh</option>
                                                <option>Rajasthan</option>
                                                <option>Gujarat</option>
                                                <option>Maharashtra</option>
                                            </select>
                                            <label for="state">State</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="pin" 
                                                   placeholder="PIN" pattern="\d{6}" required>
                                            <label for="pin">PIN Code</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <!-- Academic Information -->
                            <fieldset class="mb-4">
                                <legend class="fs-5 text-primary border-bottom pb-2">Academic Information</legend>
                                
                                <div class="row g-3 mt-2">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <select class="form-select" id="course" required>
                                                <option value="" disabled selected></option>
                                                <option>BCA</option>
                                                <option>BBA</option>
                                                <option>B.Tech CSE</option>
                                            </select>
                                            <label for="course">Course Applying For</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="pct12" 
                                                   placeholder="%" min="33" max="100" step="0.01" required>
                                            <label for="pct12">12th Percentage (%)</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-3">
                                    <label class="form-label">Subjects of Interest</label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="sWeb" value="web">
                                                <label class="form-check-label" for="sWeb">Web Development</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="sApp" value="app">
                                                <label class="form-check-label" for="sApp">App Development</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="sAI" value="ai">
                                                <label class="form-check-label" for="sAI">AI / Machine Learning</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <!-- Terms & Submit -->
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="terms" required>
                                <label class="form-check-label" for="terms">
                                    I certify that the information provided is correct
                                </label>
                                <div class="invalid-feedback">You must agree before submitting</div>
                            </div>

                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button type="reset" class="btn btn-outline-secondary">Reset</button>
                                <button type="submit" class="btn btn-primary btn-lg px-5">Submit Application</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        (function () {
            'use strict';
            const forms = document.querySelectorAll('.needs-validation');
            Array.from(forms).forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    if (!form.checkValidity()) {
                        event.stopPropagation();
                    } else {
                        alert('Application submitted successfully!');
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        })();
    </script>

</body>
</html>
```

---

## Summary

| Concept | Details |
|---------|---------|
| Form Methods | `GET` (URL), `POST` (body) |
| Input Types | text, email, password, tel, number, date, file, color |
| Selection | radio (one), checkbox (many), select (dropdown) |
| Grouping | `<fieldset>` + `<legend>` |
| Validation | `required`, `pattern`, `min/max`, `minlength/maxlength` |

---

*Day 38 of 55 | Unit 7 — Web Forms & Database | Web Technology (25BCA060)*
