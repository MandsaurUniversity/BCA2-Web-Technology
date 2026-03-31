# Day 39 — Advanced Form Validation with JavaScript

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 7 — Web Forms & Database
🧪 **Lab Experiment:** 22 (Part 2), 24

---

## Learning Objectives

By the end of this session, students will be able to:
- Implement client-side form validation using JavaScript
- Use regular expressions for pattern matching
- Validate forms in real-time (on input/blur)
- Display custom error messages dynamically

---

## 1. Validation Strategy

> **Analogy:** Client-side validation is like a **security guard at the gate** — catches obvious problems before they reach the manager (server). But the manager (server) still checks again because the guard can be bypassed.

### Validation Layers

| Layer | Technology | Purpose |
|-------|-----------|---------|
| HTML5 | `required`, `pattern`, `min/max` | Basic browser validation |
| JavaScript | Custom logic, regex | Enhanced client-side |
| Server | PHP, Node.js, etc. | Final authority (never trust client) |

---

## 2. Common Regex Patterns

```javascript
// Email: basic pattern
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone: 10 digits (Indian)
const phoneRegex = /^[6-9]\d{9}$/;

// Password: min 8 chars, 1 uppercase, 1 lowercase, 1 digit
const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

// PIN Code (Indian)
const pinRegex = /^\d{6}$/;

// Name: only letters and spaces
const nameRegex = /^[a-zA-Z\s]{2,50}$/;

// Roll Number: e.g., 25BCA060
const rollRegex = /^\d{2}BCA\d{3}$/i;
```

> **Code Explanation:**
> - Each `const` declares a regular expression (regex) pattern stored in a variable
> - The pattern is enclosed between `/` forward slashes — this is JavaScript regex syntax
> - `emailRegex` — matches standard email format with alphanumeric characters, dots, and domain
> - `phoneRegex` — ensures exactly 10 digits starting with 6, 7, 8, or 9 (valid Indian mobile numbers)
> - `pwdRegex` — uses lookaheads `(?=...)` to require at least one lowercase, one uppercase, and one digit
> - `pinRegex` — matches exactly 6 digits (Indian postal PIN codes like 458001)
> - `nameRegex` — allows only letters (A-Z, a-z) and spaces, between 2 and 50 characters
> - `rollRegex` — matches patterns like `25BCA060`; the `i` flag makes it case-insensitive

### Regex Character-by-Character Breakdown

Let's break down each regex pattern **character by character** so you understand exactly how they work:

#### Pattern 1: Name — `/^[a-zA-Z\s]{2,50}$/`

```
/^[a-zA-Z\s]{2,50}$/

/       → Start of regex
^       → "Must START at the beginning" (no characters before this)
[       → Start of character class (allowed characters)
  a-z   → Any lowercase letter (a through z)
  A-Z   → Any uppercase letter (A through Z)
  \s    → Any whitespace (space, tab)
]       → End of character class
{2,50}  → Repeat the character class MINIMUM 2 times, MAXIMUM 50 times
$       → "Must END here" (no characters after this)
/       → End of regex
```

> ✅ Matches: `Rahul Kumar`, `Priya`, `Amit Patel`
> ❌ Rejects: `R` (too short), `Rahul123` (numbers not allowed), empty string

#### Pattern 2: Phone — `/^[6-9]\d{9}$/`

```
/^[6-9]\d{9}$/

^       → Start of string
[6-9]   → First digit must be 6, 7, 8, or 9 (Indian mobile numbers)
\d      → Any digit (0-9)
{9}     → Exactly 9 more digits (total = 1 + 9 = 10 digits)
$       → End of string
```

> ✅ Matches: `9876543210`, `7014567890`, `6234567890`
> ❌ Rejects: `1234567890` (starts with 1), `987654321` (only 9 digits), `98765432100` (11 digits)

#### Pattern 3: Password — `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/`

```
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

^            → Start of string
(?=.*[a-z])  → LOOKAHEAD: somewhere ahead, there must be a lowercase letter
(?=.*[A-Z])  → LOOKAHEAD: somewhere ahead, there must be an uppercase letter
(?=.*\d)     → LOOKAHEAD: somewhere ahead, there must be a digit
.{8,}        → Any character (.), at least 8 times ({8,} means 8 or more)
$            → End of string
```

> ✅ Matches: `Rahul123`, `MyPass99`, `SecureP1`
> ❌ Rejects: `rahul123` (no uppercase), `RAHUL123` (no lowercase), `Rahul` (too short), `RahulKumar` (no digit)

#### Pattern 4: Email — `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`

```
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

^                    → Start of string
[a-zA-Z0-9._%+-]+   → One or more characters before @ (letters, digits, dots, etc.)
@                    → Literal @ symbol (required in every email)
[a-zA-Z0-9.-]+      → One or more characters for domain name
\.                   → Literal dot (escaped with \)
[a-zA-Z]{2,}        → Top-level domain, at least 2 letters (com, in, org)
$                    → End of string
```

> ✅ Matches: `rahul@example.com`, `priya.sharma@mu.ac.in`
> ❌ Rejects: `rahul@`, `@example.com`, `rahul@.com`

#### Pattern 5: Roll Number — `/^\d{2}BCA\d{3}$/i`

```
/^\d{2}BCA\d{3}$/i

^       → Start of string
\d{2}   → Exactly 2 digits (year like 25)
BCA     → Literal text "BCA"
\d{3}   → Exactly 3 digits (roll like 060)
$       → End of string
/i      → Flag: case-Insensitive (matches "bca" and "BCA")
```

> ✅ Matches: `25BCA060`, `25bca001`, `26BCA100`
> ❌ Rejects: `BCA060` (no year), `25BCA06` (only 2 digits at end), `25MBA001` (not BCA)

### Common Regex Metacharacters Reference Table

| Symbol | Name | Meaning | Example | Matches |
|--------|------|---------|---------|---------|
| `^` | Caret | Start of string | `^Hello` | "Hello World" |
| `$` | Dollar | End of string | `com$` | "example.com" |
| `.` | Dot | Any single character | `h.t` | "hat", "hot", "h1t" |
| `*` | Star | Zero or more times | `ab*c` | "ac", "abc", "abbc" |
| `+` | Plus | One or more times | `ab+c` | "abc", "abbc" (not "ac") |
| `?` | Question | Zero or one time | `colou?r` | "color", "colour" |
| `[]` | Bracket | Character class | `[aeiou]` | Any vowel |
| `[^]` | Negated bracket | NOT these chars | `[^0-9]` | Any non-digit |
| `()` | Parentheses | Group | `(ab)+` | "ab", "abab" |
| `\|` | Pipe | OR | `cat\|dog` | "cat" or "dog" |
| `\d` | Digit | Any digit [0-9] | `\d{3}` | "123", "456" |
| `\D` | Non-digit | Any non-digit | `\D+` | "abc", "hello" |
| `\w` | Word char | Letter, digit, `_` | `\w+` | "hello_123" |
| `\W` | Non-word | Not letter/digit/`_` | `\W` | "@", "#", " " |
| `\s` | Whitespace | Space, tab, newline | `\s+` | " ", "\t" |
| `\S` | Non-space | Not whitespace | `\S+` | "hello" |
| `{n}` | Exact count | Exactly n times | `\d{6}` | "458001" |
| `{n,m}` | Range count | n to m times | `\w{2,5}` | "ab", "hello" |

### Lookaheads Explained — The `(?=...)` Syntax

> **Analogy:** A lookahead is like a **teacher checking an answer sheet** — before giving marks, the teacher **peeks ahead** to make sure certain things are present, without actually reading those parts yet.

In the password regex `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/`:

| Lookahead | What It Does |
|-----------|-------------|
| `(?=.*[a-z])` | "Look ahead and confirm there's at least one **lowercase** letter somewhere" |
| `(?=.*[A-Z])` | "Look ahead and confirm there's at least one **uppercase** letter somewhere" |
| `(?=.*\d)` | "Look ahead and confirm there's at least one **digit** somewhere" |

**How it works step by step:**

```
Password: "Rahul123"

Step 1: (?=.*[a-z]) → Peek: is there a lowercase letter? "a" found → ✅
Step 2: (?=.*[A-Z]) → Peek: is there an uppercase letter? "R" found → ✅
Step 3: (?=.*\d)    → Peek: is there a digit? "1" found → ✅
Step 4: .{8,}       → Is the total length 8 or more? 8 chars → ✅
Result: MATCH! ✅
```

> **Key Point:** Lookaheads **check** but don't **consume** characters — they just peek ahead and return to the same position. This is why all three lookaheads can check the same string independently.

---

## 3. Real-Time Validation

```javascript
function showError(input, message) {
    const feedback = input.nextElementSibling;
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    if (feedback) feedback.textContent = message;
}

function showSuccess(input) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
}

// Validate on blur (when user leaves field)
document.getElementById('email').addEventListener('blur', function() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.value)) {
        showError(this, 'Please enter a valid email');
    } else {
        showSuccess(this);
    }
});

// Validate on input (real-time as user types)
document.getElementById('phone').addEventListener('input', function() {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (this.value.length === 10 && phoneRegex.test(this.value)) {
        showSuccess(this);
    } else if (this.value.length >= 10) {
        showError(this, 'Enter valid 10-digit number starting with 6-9');
    }
});
```

> **Code Explanation:**
> - `showError(input, message)` — adds the `is-invalid` Bootstrap class to the input (shows red border) and sets the error message text
> - `showSuccess(input)` — adds the `is-valid` Bootstrap class (shows green border) and removes any error state
> - `addEventListener('blur', ...)` — fires when the user **leaves** a field (clicks or tabs away). This validates the email only after the user is done typing.
> - `addEventListener('input', ...)` — fires on **every keystroke** as the user types. Used for phone number to give instant feedback.
> - `emailRegex.test(this.value)` — the `.test()` method returns `true` if the value matches the regex pattern, `false` otherwise
> - `this` — refers to the input element that triggered the event
> - The phone validation waits until `length >= 10` before showing an error, so the user isn't harassed while still typing

---

## 4. Password Strength Meter

```javascript
function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    return strength; // 0-5
}

document.getElementById('password').addEventListener('input', function() {
    const strength = checkPasswordStrength(this.value);
    const bar = document.getElementById('strengthBar');
    const labels = ['', 'Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
    const colors = ['', 'bg-danger', 'bg-warning', 'bg-info', 'bg-primary', 'bg-success'];
    bar.style.width = (strength * 20) + '%';
    bar.className = 'progress-bar ' + colors[strength];
    bar.textContent = labels[strength];
});
```

> **Code Explanation:**
> - `checkPasswordStrength(password)` — a function that scores a password from 0 (empty) to 5 (very strong) by counting how many criteria it meets
> - `password.length >= 8` — checks minimum length (adds 1 point)
> - `/[A-Z]/.test(password)` — checks for at least one uppercase letter (adds 1 point)
> - `/[a-z]/.test(password)` — checks for at least one lowercase letter (adds 1 point)
> - `/\d/.test(password)` — checks for at least one digit (adds 1 point)
> - `/[!@#$%^&*(),.?":{}|<>]/.test(password)` — checks for special characters (adds 1 point)
> - `bar.style.width = (strength * 20) + '%'` — each criterion is worth 20% of the progress bar (5 × 20% = 100%)
> - `bar.className = 'progress-bar ' + colors[strength]` — changes the bar color from red (weak) to green (strong)
> - The strength meter updates on **every keystroke** (`input` event) giving real-time visual feedback

---

## 5. Confirm Password Match

```javascript
document.getElementById('confirmPwd').addEventListener('input', function() {
    const pwd = document.getElementById('password').value;
    if (this.value !== pwd) {
        showError(this, 'Passwords do not match');
    } else if (this.value.length > 0) {
        showSuccess(this);
    }
});
```

> **Code Explanation:**
> - `document.getElementById('confirmPwd')` — selects the "confirm password" input field
> - `document.getElementById('password').value` — gets the current value of the original password field
> - `this.value !== pwd` — compares the confirm field with the original password
> - If they don't match → show red error "Passwords do not match"
> - If they match AND the field isn't empty → show green success indicator
> - The `input` event ensures the comparison happens in real-time as the user types

---

## 6. Error Recovery UX — Guiding Users to Fix Mistakes

> **Analogy:** When a student makes errors on an exam paper, a good teacher doesn't just write "Wrong" — they circle the mistake and write **what the correct answer should be**. Error recovery UX works the same way.

### Principles of Good Error Messages

| Bad Error Message ❌ | Good Error Message ✅ | Why Better? |
|----------------------|----------------------|-------------|
| "Invalid input" | "Name must contain only letters (A-Z)" | Tells the user exactly what's wrong |
| "Error" | "Phone number must be 10 digits starting with 6-9" | Shows the expected format |
| "Wrong format" | "Email must include @ and a domain (e.g., name@example.com)" | Gives an example |
| "Password too weak" | "Password needs at least 8 characters, 1 uppercase letter, and 1 number" | Lists specific requirements |

### Best Practices for Form Error Recovery

1. **Show errors immediately** (on `blur` or `input` events), not just on submit
2. **Place error messages near the field** — don't make users hunt for the problem
3. **Use colour AND text** — red border + message text (colour alone doesn't help colour-blind users)
4. **Provide an error summary** at the top listing all errors when the form is submitted with multiple mistakes
5. **Keep valid fields green** — so the user knows which fields are correct
6. **Don't clear the form** on validation failure — let users fix just the broken fields
7. **Show positive feedback** — use green checkmarks (✅) and "Looks good!" messages for valid inputs

### Example: Specific vs Generic Error Messages

```javascript
// ❌ Bad: Generic error for everything
function validatePhone(value) {
    if (!value.match(/^[6-9]\d{9}$/)) {
        return 'Invalid phone number';  // User doesn't know what's wrong
    }
}

// ✅ Good: Specific errors based on what's wrong
function validatePhone(value) {
    if (value.length === 0) {
        return 'Phone number is required';
    }
    if (value.length !== 10) {
        return 'Phone number must be exactly 10 digits (you entered ' + value.length + ')';
    }
    if (!/^[6-9]/.test(value)) {
        return 'Indian mobile numbers must start with 6, 7, 8, or 9';
    }
    if (!/^\d+$/.test(value)) {
        return 'Phone number must contain only digits (no spaces or dashes)';
    }
    return null;  // null means no error — validation passed!
}
```

> **Code Explanation:**
> - The **bad example** returns a vague message for any failure — the user has no idea what to fix
> - The **good example** checks each condition separately and returns a **specific** message
> - `value.length === 0` — checks if the field is empty
> - `value.length !== 10` — checks if the length is exactly 10, and tells the user how many they entered
> - `!/^[6-9]/.test(value)` — checks if the first digit is valid for Indian mobile numbers
> - `!/^\d+$/.test(value)` — checks if the value contains only digits (no letters or symbols)
> - Returning `null` signals that validation passed with no errors

---

## Practical Session

### 🧪 Lab Experiments 22 (Part 2) & 24: Advanced Validated Registration Form

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Form Validation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white text-center">
                        <h3 class="mb-0">Student Registration</h3>
                        <small>With Real-Time JavaScript Validation</small>
                    </div>
                    <div class="card-body p-4">
                        <form id="regForm" novalidate>

                            <!-- Name -->
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter full name">
                                <div class="invalid-feedback">Name must be 2-50 letters only</div>
                                <div class="valid-feedback">Looks good!</div>
                            </div>

                            <!-- Roll Number -->
                            <div class="mb-3">
                                <label for="roll" class="form-label">Roll Number</label>
                                <input type="text" class="form-control" id="roll" placeholder="e.g., 25BCA060">
                                <div class="invalid-feedback">Format: 25BCA060</div>
                                <div class="valid-feedback">Valid roll number</div>
                            </div>

                            <!-- Email -->
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="name@example.com">
                                <div class="invalid-feedback">Enter a valid email address</div>
                                <div class="valid-feedback">Valid email</div>
                            </div>

                            <!-- Phone -->
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="tel" class="form-control" id="phone" placeholder="10-digit number">
                                <div class="invalid-feedback">Enter valid 10-digit number (starts with 6-9)</div>
                                <div class="valid-feedback">Valid phone number</div>
                            </div>

                            <!-- Password -->
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Min 8 characters">
                                <div class="progress mt-2" style="height: 6px;">
                                    <div class="progress-bar" id="strengthBar" role="progressbar" style="width: 0%"></div>
                                </div>
                                <small id="pwdHint" class="text-muted">Use uppercase, lowercase, numbers & symbols</small>
                                <div class="invalid-feedback">Min 8 chars, 1 uppercase, 1 lowercase, 1 digit</div>
                            </div>

                            <!-- Confirm Password -->
                            <div class="mb-3">
                                <label for="confirmPwd" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPwd" placeholder="Re-enter password">
                                <div class="invalid-feedback">Passwords do not match</div>
                                <div class="valid-feedback">Passwords match</div>
                            </div>

                            <!-- DOB -->
                            <div class="mb-3">
                                <label for="dob" class="form-label">Date of Birth</label>
                                <input type="date" class="form-control" id="dob">
                                <div class="invalid-feedback">Must be 16-30 years old</div>
                                <div class="valid-feedback">Valid age</div>
                            </div>

                            <!-- Course -->
                            <div class="mb-3">
                                <label for="course" class="form-label">Course</label>
                                <select class="form-select" id="course">
                                    <option value="">Select course...</option>
                                    <option>BCA</option>
                                    <option>BBA</option>
                                    <option>B.Tech CSE</option>
                                </select>
                                <div class="invalid-feedback">Please select a course</div>
                            </div>

                            <!-- Terms -->
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="terms">
                                <label class="form-check-label" for="terms">
                                    I agree to the terms and conditions
                                </label>
                                <div class="invalid-feedback">You must agree</div>
                            </div>

                            <!-- Error Summary -->
                            <div class="alert alert-danger d-none" id="errorSummary">
                                <strong>Please fix the following errors:</strong>
                                <ul id="errorList" class="mb-0"></ul>
                            </div>

                            <!-- Success -->
                            <div class="alert alert-success d-none" id="successMsg">
                                ✅ Registration successful!
                            </div>

                            <button type="submit" class="btn btn-primary w-100 btn-lg">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    (function() {
        'use strict';

        // Regex patterns
        const patterns = {
            name:  /^[a-zA-Z\s]{2,50}$/,
            roll:  /^\d{2}BCA\d{3}$/i,
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            phone: /^[6-9]\d{9}$/,
            pwd:   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
        };

        // Helper functions
        function showError(el, msg) {
            el.classList.add('is-invalid');
            el.classList.remove('is-valid');
            const fb = el.parentElement.querySelector('.invalid-feedback');
            if (fb && msg) fb.textContent = msg;
        }

        function showValid(el) {
            el.classList.add('is-valid');
            el.classList.remove('is-invalid');
        }

        function validate(el, regex) {
            if (regex.test(el.value.trim())) {
                showValid(el);
                return true;
            } else {
                showError(el);
                return false;
            }
        }

        // Real-time validation on blur
        const fields = [
            { id: 'name',  regex: patterns.name },
            { id: 'roll',  regex: patterns.roll },
            { id: 'email', regex: patterns.email },
            { id: 'phone', regex: patterns.phone },
            { id: 'password', regex: patterns.pwd }
        ];

        fields.forEach(function(f) {
            document.getElementById(f.id).addEventListener('blur', function() {
                if (this.value.trim() !== '') validate(this, f.regex);
            });
        });

        // Password strength meter
        document.getElementById('password').addEventListener('input', function() {
            let strength = 0;
            const val = this.value;
            if (val.length >= 8) strength++;
            if (/[A-Z]/.test(val)) strength++;
            if (/[a-z]/.test(val)) strength++;
            if (/\d/.test(val)) strength++;
            if (/[^a-zA-Z0-9]/.test(val)) strength++;

            const bar = document.getElementById('strengthBar');
            const labels = ['', 'Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
            const colors = ['', 'bg-danger', 'bg-warning', 'bg-info', 'bg-primary', 'bg-success'];
            bar.style.width = (strength * 20) + '%';
            bar.className = 'progress-bar ' + colors[strength];
            bar.textContent = labels[strength];
        });

        // Confirm password match
        document.getElementById('confirmPwd').addEventListener('input', function() {
            const pwd = document.getElementById('password').value;
            if (this.value === pwd && this.value.length > 0) {
                showValid(this);
            } else {
                showError(this, 'Passwords do not match');
            }
        });

        // DOB validation: 16-30 years old
        document.getElementById('dob').addEventListener('change', function() {
            const dob = new Date(this.value);
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            if (age >= 16 && age <= 30) {
                showValid(this);
            } else {
                showError(this, 'Must be 16-30 years old');
            }
        });

        // Course selection
        document.getElementById('course').addEventListener('change', function() {
            if (this.value !== '') {
                showValid(this);
            } else {
                showError(this, 'Please select a course');
            }
        });

        // Form submit
        document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const errors = [];

            // Validate all fields
            if (!validate(document.getElementById('name'), patterns.name)) 
                errors.push('Name must be 2-50 letters');
            if (!validate(document.getElementById('roll'), patterns.roll)) 
                errors.push('Roll number format: 25BCA060');
            if (!validate(document.getElementById('email'), patterns.email)) 
                errors.push('Enter a valid email');
            if (!validate(document.getElementById('phone'), patterns.phone)) 
                errors.push('Enter valid 10-digit phone');
            if (!validate(document.getElementById('password'), patterns.pwd)) 
                errors.push('Password needs 8+ chars, uppercase, lowercase, digit');

            const pwd = document.getElementById('password').value;
            const confirmPwd = document.getElementById('confirmPwd');
            if (confirmPwd.value !== pwd || confirmPwd.value === '') {
                showError(confirmPwd, 'Passwords do not match');
                errors.push('Passwords must match');
            }

            const dob = document.getElementById('dob');
            if (!dob.value) {
                showError(dob, 'Date of birth is required');
                errors.push('Date of birth is required');
            }

            const course = document.getElementById('course');
            if (course.value === '') {
                showError(course, 'Please select a course');
                errors.push('Select a course');
            }

            const terms = document.getElementById('terms');
            if (!terms.checked) {
                showError(terms, 'You must agree');
                errors.push('Accept terms and conditions');
            } else {
                showValid(terms);
            }

            // Show results
            const errorSummary = document.getElementById('errorSummary');
            const errorList = document.getElementById('errorList');
            const successMsg = document.getElementById('successMsg');

            if (errors.length > 0) {
                errorList.innerHTML = errors.map(function(e) { return '<li>' + e + '</li>'; }).join('');
                errorSummary.classList.remove('d-none');
                successMsg.classList.add('d-none');
            } else {
                errorSummary.classList.add('d-none');
                successMsg.classList.remove('d-none');
                this.reset();
                // Clear validation classes
                this.querySelectorAll('.is-valid, .is-invalid').forEach(function(el) {
                    el.classList.remove('is-valid', 'is-invalid');
                });
                document.getElementById('strengthBar').style.width = '0%';
            }
        });
    })();
    </script>

</body>
</html>
```

> **Code Explanation:**
> - **IIFE `(function() { ... })()`** — wraps all code in an Immediately Invoked Function Expression to keep variables private and avoid polluting the global scope
> - **`patterns` object** — stores all regex patterns in one place for easy maintenance; each key matches a form field
> - **`showError(el, msg)`** — adds Bootstrap's `is-invalid` class to show red border, and updates the error feedback text
> - **`showValid(el)`** — adds Bootstrap's `is-valid` class to show green border, removes any error state
> - **`validate(el, regex)`** — reusable function that tests an element's value against a regex and calls the appropriate feedback function
> - **`fields.forEach()`** — loops through all field definitions and attaches `blur` event listeners to each for real-time validation
> - **Password strength meter** — scores the password 0-5 by checking length, uppercase, lowercase, digits, and special characters; updates a Bootstrap progress bar with matching colour
> - **DOB age calculation** — calculates age by subtracting birth year from current year, adjusting for month/day; validates that age is between 16-30
> - **Form submit handler** — `e.preventDefault()` stops the default form submission; validates all fields and collects errors into an array
> - **Error summary** — if errors exist, displays them in a red alert box as a bulleted list; if no errors, shows a green success message and resets the form
> - **`errors.map(function(e) { return '<li>' + e + '</li>'; }).join('')`** — converts the error array into HTML list items

---

## Summary

| Concept | Technique |
|---------|-----------|
| Regex validation | `regex.test(value)` |
| Real-time | `blur` and `input` events |
| Password strength | Count criteria met (0-5) |
| Error display | `classList.add('is-invalid')` |
| Success display | `classList.add('is-valid')` |
| Error summary | Collect all errors, display in list |

---

*Day 39 of 55 | Unit 7 — Web Forms & Database | Web Technology (25BCA060)*
