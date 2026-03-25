# Day 29 — JavaScript Form Validation

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 5 — JavaScript
🧪 **Lab Experiment:** 21

---

## Learning Objectives

By the end of this session, students will be able to:
- Validate form fields using JavaScript
- Display real-time error messages
- Use regular expressions for pattern matching
- Combine HTML5 validation with JavaScript validation

---

## 1. Why Client-Side Validation?

> **Analogy:** Client-side validation is like the **security check at the airport entrance**. It catches obvious issues (no ticket, wrong ID) before you even reach the counter. But the airline counter (server) still verifies everything — client-side validation improves UX but doesn't replace server-side validation.

| Type | Where | Purpose |
|------|-------|---------|
| Client-side (JS) | Browser | Instant feedback, better UX |
| Server-side | Server | Security, data integrity |
| Both needed | Always | Defense in depth |

---

## 2. Basic Form Validation

```javascript
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    // Check empty fields
    if (name === '') {
        alert('Name is required!');
        return false;
    }
    
    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Enter a valid email!');
        return false;
    }
    
    // Check password length
    if (password.length < 8) {
        alert('Password must be at least 8 characters!');
        return false;
    }
    
    return true; // All valid
}
```

---

## 3. Regular Expressions (Regex)

| Pattern | Matches | Use |
|---------|---------|-----|
| `/^[A-Za-z ]+$/` | Letters and spaces only | Names |
| `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | Standard email format | Email |
| `/^\d{10}$/` | Exactly 10 digits | Phone number |
| `/^(?=.*[A-Z])(?=.*\d).{8,}$/` | 1 uppercase + 1 digit + min 8 chars | Strong password |
| `/^\d{6}$/` | Exactly 6 digits | PIN code |

```javascript
const nameRegex = /^[A-Za-z ]{2,50}$/;
console.log(nameRegex.test("Rahul Kumar"));  // true
console.log(nameRegex.test("123"));          // false
```

---

## 4. Real-Time Validation

Instead of showing alert boxes, display inline error messages:

```javascript
function showError(inputId, message) {
    const errorEl = document.getElementById(inputId + 'Error');
    errorEl.textContent = message;
    errorEl.style.display = 'block';
    document.getElementById(inputId).style.borderColor = '#E91E63';
}

function clearError(inputId) {
    const errorEl = document.getElementById(inputId + 'Error');
    errorEl.textContent = '';
    errorEl.style.display = 'none';
    document.getElementById(inputId).style.borderColor = '#4CAF50';
}
```

---

## Practical Session

### 🧪 Lab Experiment 21: Complete Form Validation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Segoe UI', sans-serif; background: #f4f4f4; padding: 30px; }
        
        .form-container {
            max-width: 500px; margin: 0 auto; background: white;
            border-radius: 12px; padding: 30px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        h1 { color: #1565C0; text-align: center; margin-bottom: 25px; }
        
        .form-group { margin-bottom: 18px; }
        label { display: block; font-weight: 600; margin-bottom: 5px; color: #333; }
        
        input, select, textarea {
            width: 100%; padding: 10px 12px; border: 2px solid #ddd;
            border-radius: 6px; font-size: 15px; transition: border-color 0.3s;
        }
        input:focus, select:focus, textarea:focus {
            outline: none; border-color: #1565C0;
        }
        
        .error-msg {
            color: #E91E63; font-size: 13px; margin-top: 4px; display: none;
        }
        .valid { border-color: #4CAF50 !important; }
        .invalid { border-color: #E91E63 !important; }
        
        .password-strength {
            height: 5px; border-radius: 3px; margin-top: 5px; transition: all 0.3s;
        }
        .strength-weak { background: #E91E63; width: 33%; }
        .strength-medium { background: #FF9800; width: 66%; }
        .strength-strong { background: #4CAF50; width: 100%; }
        
        .btn-submit {
            width: 100%; padding: 12px; background: #1565C0; color: white;
            border: none; border-radius: 6px; font-size: 16px; cursor: pointer;
            transition: background 0.3s;
        }
        .btn-submit:hover { background: #0D47A1; }
        .btn-submit:disabled { background: #ccc; cursor: not-allowed; }
        
        .success-msg {
            text-align: center; color: #4CAF50; font-weight: bold;
            padding: 15px; display: none;
        }
    </style>
</head>
<body>

<div class="form-container">
    <h1>Registration Form</h1>
    
    <form id="regForm" onsubmit="return handleSubmit(event)">
        
        <div class="form-group">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="e.g., Rahul Kumar"
                   oninput="validateName()">
            <div class="error-msg" id="fullnameError"></div>
        </div>

        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" placeholder="e.g., rahul@example.com"
                   oninput="validateEmail()">
            <div class="error-msg" id="emailError"></div>
        </div>

        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="e.g., 9876543210" maxlength="10"
                   oninput="validatePhone()">
            <div class="error-msg" id="phoneError"></div>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Min 8 chars, 1 uppercase, 1 digit"
                   oninput="validatePassword()">
            <div class="password-strength" id="strengthBar"></div>
            <div class="error-msg" id="passwordError"></div>
        </div>

        <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Re-enter password"
                   oninput="validateConfirm()">
            <div class="error-msg" id="confirmPasswordError"></div>
        </div>

        <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="date" id="dob" onchange="validateDOB()">
            <div class="error-msg" id="dobError"></div>
        </div>

        <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender" onchange="validateGender()">
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <div class="error-msg" id="genderError"></div>
        </div>

        <button type="submit" class="btn-submit">Register</button>
    </form>

    <div class="success-msg" id="successMsg">
        ✅ Registration Successful! Welcome aboard!
    </div>
</div>

<script>
    // Utility functions
    function showError(id, msg) {
        document.getElementById(id + 'Error').textContent = msg;
        document.getElementById(id + 'Error').style.display = 'block';
        document.getElementById(id).classList.add('invalid');
        document.getElementById(id).classList.remove('valid');
    }
    function clearError(id) {
        document.getElementById(id + 'Error').style.display = 'none';
        document.getElementById(id).classList.remove('invalid');
        document.getElementById(id).classList.add('valid');
    }

    // Validators
    function validateName() {
        const val = document.getElementById('fullname').value.trim();
        if (val.length < 2) { showError('fullname', 'Name must be at least 2 characters'); return false; }
        if (!/^[A-Za-z ]+$/.test(val)) { showError('fullname', 'Name can only contain letters and spaces'); return false; }
        clearError('fullname'); return true;
    }

    function validateEmail() {
        const val = document.getElementById('email').value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { showError('email', 'Enter a valid email address'); return false; }
        clearError('email'); return true;
    }

    function validatePhone() {
        const val = document.getElementById('phone').value.trim();
        if (!/^\d{10}$/.test(val)) { showError('phone', 'Phone must be exactly 10 digits'); return false; }
        clearError('phone'); return true;
    }

    function validatePassword() {
        const val = document.getElementById('password').value;
        const bar = document.getElementById('strengthBar');
        
        if (val.length < 8) {
            showError('password', 'Password must be at least 8 characters');
            bar.className = 'password-strength strength-weak';
            return false;
        }
        
        let strength = 0;
        if (/[A-Z]/.test(val)) strength++;
        if (/[a-z]/.test(val)) strength++;
        if (/[0-9]/.test(val)) strength++;
        if (/[^A-Za-z0-9]/.test(val)) strength++;
        
        if (strength <= 2) bar.className = 'password-strength strength-medium';
        else bar.className = 'password-strength strength-strong';
        
        if (!/(?=.*[A-Z])(?=.*\d)/.test(val)) {
            showError('password', 'Must include at least 1 uppercase letter and 1 digit');
            return false;
        }
        clearError('password'); return true;
    }

    function validateConfirm() {
        const pwd = document.getElementById('password').value;
        const confirm = document.getElementById('confirmPassword').value;
        if (confirm !== pwd) { showError('confirmPassword', 'Passwords do not match'); return false; }
        clearError('confirmPassword'); return true;
    }

    function validateDOB() {
        const val = document.getElementById('dob').value;
        if (!val) { showError('dob', 'Date of birth is required'); return false; }
        const age = new Date().getFullYear() - new Date(val).getFullYear();
        if (age < 16 || age > 100) { showError('dob', 'Age must be between 16 and 100'); return false; }
        clearError('dob'); return true;
    }

    function validateGender() {
        const val = document.getElementById('gender').value;
        if (!val) { showError('gender', 'Please select a gender'); return false; }
        clearError('gender'); return true;
    }

    // Form Submit
    function handleSubmit(e) {
        e.preventDefault();
        const isValid = validateName() & validateEmail() & validatePhone() &
                        validatePassword() & validateConfirm() & validateDOB() & validateGender();
        
        if (isValid) {
            document.getElementById('regForm').style.display = 'none';
            document.getElementById('successMsg').style.display = 'block';
        }
        return false;
    }
</script>

</body>
</html>
```

---

## Summary

| Concept | Example |
|---------|---------|
| Basic validation | Check empty, length, format |
| Regex patterns | `/^[A-Za-z ]+$/`, `/^\d{10}$/` |
| Real-time validation | `oninput` event + inline errors |
| Password strength | Check uppercase, digits, symbols |
| Submit prevention | `event.preventDefault()` |

---

*Day 29 of 55 | Unit 5 — JavaScript | Web Technology (25BCA060)*
