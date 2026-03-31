# Day 41 — User Authentication & Complete Web Application

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 7 — Web Forms & Database
🧪 **Lab Experiment:** 24

---

## Learning Objectives

By the end of this session, students will be able to:
- Understand user authentication concepts (login, registration, sessions)
- Implement a login/registration system using client-side techniques
- Understand the importance of security in web forms
- Build a complete web app with login, dashboard, and CRUD features

---

## 1. Authentication Concepts

> **Analogy:** Authentication is like showing your **University ID card** at the gate. Registration creates your ID (signup), login shows your ID (authentication), and the gate remembers you for the rest of the day (session).

### Authentication Flow

```
1. User fills login form (email + password)
2. Client sends credentials to server
3. Server checks against database
4. If valid → Create session → Redirect to dashboard
5. If invalid → Show error message
6. On logout → Destroy session
```

> **Code Explanation:**
> - **Step 1:** The user fills in their email and password on the login form (client-side)
> - **Step 2:** The browser sends these credentials to the web server via an HTTP POST request
> - **Step 3:** The server queries the database to find a user with the matching email and compares the password hash
> - **Step 4:** If the credentials match → the server creates a **session** (a temporary record that this user is logged in) and redirects to the dashboard
> - **Step 5:** If the credentials don't match → the server sends back a generic error message ("Invalid credentials" — never reveal whether the email or password was wrong)
> - **Step 6:** When the user clicks "Logout", the server destroys the session, and the user must log in again

### Key Terms

| Term | Meaning |
|------|---------|
| Authentication | Verifying identity (who are you?) |
| Authorization | Checking permissions (what can you do?) |
| Session | Server remembers logged-in user |
| Cookie | Small data stored in browser |
| Token (JWT) | Encrypted identity proof for APIs |
| Hashing | One-way encryption for passwords |

---

## 2. Security Best Practices

### Never Do These

| Bad Practice | Why It's Bad |
|-------------|-------------|
| Store passwords in plain text | Anyone with DB access sees passwords |
| Send passwords via GET | Visible in URL and browser history |
| Trust client-side only | JavaScript can be disabled/modified |
| Show "incorrect password" | Tells attacker the username exists |

### Always Do These

| Good Practice | Reason |
|--------------|--------|
| Hash passwords (bcrypt) | Even DB breach doesn't expose passwords |
| Use HTTPS | Encrypts data in transit |
| Validate server-side | Client can be bypassed |
| Show generic errors | "Invalid credentials" — don't reveal which field is wrong |
| Use CSRF tokens | Prevents cross-site request forgery |

### Password Hashing (Concept)

```
User enters: "MyPassword123"
          ↓
Hash function (bcrypt/argon2)
          ↓
Stored: "$2b$10$r4jF8kQ..." (irreversible)

Login check: hash("MyPassword123") === stored_hash? → Allow
             hash("WrongPassword") !== stored_hash? → Deny
```

> **Code Explanation:**
> - The user enters their plain-text password `"MyPassword123"`
> - A **hash function** (like bcrypt or argon2) converts it into a long, random-looking string like `"$2b$10$r4jF8kQ..."`
> - This hash is **one-way** — you cannot reverse it to get the original password back
> - During login, the server hashes the entered password again and compares it with the stored hash
> - If the hashes match → the user entered the correct password → allow login
> - If the hashes don't match → wrong password → deny access

### Deep Dive: How bcrypt Hashing Works

> **Analogy:** Hashing is like making a **smoothie** — you can blend a mango into a smoothie, but you can never turn the smoothie back into a whole mango. Similarly, you can hash a password, but you can't "un-hash" it.

#### Why Plain Text Passwords are Dangerous

| Storage Method | What's Stored | If Database is Hacked |
|---------------|--------------|----------------------|
| **Plain text** ❌ | `MyPassword123` | Attacker sees the actual password |
| **Encrypted** ⚠️ | `encrypted_string` | If attacker finds the key, they can decrypt all passwords |
| **Hashed (bcrypt)** ✅ | `$2b$10$r4jF8kQ...` | Attacker gets useless hash — can't reverse it |

#### What is Salt?

A **salt** is a random string added to the password **before** hashing. It prevents attackers from using precomputed tables (rainbow tables) to crack passwords.

```
Without Salt (BAD):
  "password123" → hash → "5f4dcc3b5aa765d..."
  (Same input always produces same hash — attackers have tables of common password hashes!)

With Salt (GOOD):
  salt = "x7kP9mQ2"  (random, unique per user)
  "x7kP9mQ2" + "password123" → hash → "a1b2c3d4e5f6..."
  
  Even if two users have the same password, their hashes are DIFFERENT
  because each user gets a unique salt!
```

#### Conceptual bcrypt Code

```javascript
// Registration — hashing a password (conceptual, server-side only)
// In real code, you'd use a library like bcryptjs in Node.js
var salt = generateRandomSalt();  // e.g., "$2b$10$r4jF8kQ..."
var hashedPassword = bcrypt.hash("MyPassword123", salt);
// Result: "$2b$10$r4jF8kQ.Xo7Jn5PvGq3dAe8Z9wY1cB4mN6pR2sT0vU3xK5lH7jI"
// Store this hash in the database — NEVER store the plain password!

// Login — verifying a password (conceptual)
var userInput = "MyPassword123";
var storedHash = "$2b$10$r4jF8kQ...";  // Retrieved from database
var isValid = bcrypt.compare(userInput, storedHash);
// bcrypt automatically extracts the salt from the stored hash
// and uses it to hash the input, then compares the results
if (isValid) {
    // Password correct → create session → redirect to dashboard
} else {
    // Password wrong → show "Invalid credentials" error
}
```

> **Code Explanation:**
> - `generateRandomSalt()` — creates a unique random string for this specific user
> - `bcrypt.hash(password, salt)` — combines the salt + password and runs the hash function. The result is a long string starting with `$2b$10$...` where `$2b$` is the algorithm identifier and `$10$` is the "cost factor" (how many times to repeat hashing — higher = slower = more secure)
> - `bcrypt.compare(input, hash)` — hashes the user's login input with the same salt (embedded in the stored hash) and checks if the result matches
> - The **cost factor** (`10`) means the hash is computed 2¹⁰ = 1,024 times, making brute-force attacks extremely slow

---

## 3. Sessions & Cookies

### How Sessions Work

```
1. User logs in successfully
2. Server creates session: { id: "abc123", user: "rahul@example.com" }
3. Server sends cookie: session_id=abc123
4. Browser stores cookie
5. Every request includes cookie automatically
6. Server reads cookie → finds session → knows who the user is
7. On logout → Server deletes session → Cookie expires
```

> **Code Explanation:**
> - **Step 1-2:** After successful login, the server creates a **session object** containing the user's info and a unique session ID
> - **Step 3:** The server sends a **Set-Cookie** HTTP header with the session ID (e.g., `session_id=abc123`)
> - **Step 4:** The browser stores this cookie automatically — the user doesn't see this happening
> - **Step 5:** On every subsequent request (page load, form submission, etc.), the browser automatically sends the cookie back to the server
> - **Step 6:** The server reads the cookie value, looks up the session in its memory/database, and identifies the user
> - **Step 7:** Logout destroys the session on the server and tells the browser to delete the cookie

### In client-side demonstration (using localStorage):

```javascript
// "Login" - store session
localStorage.setItem('loggedInUser', JSON.stringify({
    email: 'rahul@example.com',
    name: 'Rahul Kumar',
    loginTime: new Date().toISOString()
}));

// Check if logged in
const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (user) {
    // Show dashboard
} else {
    // Show login page
}

// "Logout"
localStorage.removeItem('loggedInUser');
```

> **Code Explanation:**
> - `localStorage.setItem('loggedInUser', JSON.stringify({...}))` — stores the logged-in user's details as a JSON string in the browser's localStorage (simulates a server-side session)
> - `JSON.parse(localStorage.getItem('loggedInUser'))` — retrieves and parses the stored user data; returns `null` if no user is logged in
> - The `if (user)` check determines whether to show the dashboard or the login page
> - `localStorage.removeItem('loggedInUser')` — deletes the stored session data (simulates server-side session destruction)
> - **⚠️ Important:** This is a **client-side demo only**. In production, authentication must be handled on the server — localStorage can be easily modified by the user via browser DevTools!

---

## 4. JWT (JSON Web Tokens) — Token-Based Authentication

> **Analogy:** A JWT is like a **movie ticket** — it contains your name, the movie, seat number, and a stamp proving it's genuine. You show it to the usher (server) who verifies the stamp without checking the booking system each time.

### How JWT Differs from Sessions

| Feature | Session-Based | JWT Token-Based |
|---------|--------------|----------------|
| Where stored | Server memory/database | Client (cookie/localStorage) |
| Server load | Server must look up session on every request | Server only verifies the token signature |
| Scalability | Hard to scale (session must be shared across servers) | Easy to scale (token is self-contained) |
| Best for | Traditional websites | APIs, mobile apps, single-page apps |

### JWT Structure — Three Parts

A JWT token looks like this: `xxxxx.yyyyy.zzzzz` — three parts separated by dots.

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.     ← Header (algorithm info)
eyJzdWIiOiIxIiwibmFtZSI6IlJhaHVsIEt1bWFy  ← Payload (user data)
IiwiaWF0IjoxNjE2MjM5MDIyfQ.                 
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c  ← Signature (verification)
```

```
┌──────────────────────────────────────────────────┐
│                    JWT TOKEN                      │
├──────────────┬───────────────┬────────────────────┤
│   HEADER     │   PAYLOAD     │   SIGNATURE        │
│  (algorithm) │  (user data)  │  (verification)    │
├──────────────┼───────────────┼────────────────────┤
│ {            │ {             │ HMAC-SHA256(        │
│  "alg":"HS256"│  "sub": "1", │  header + "." +    │
│  "typ":"JWT" │  "name":      │  payload,          │
│ }            │   "Rahul",    │  secret_key        │
│              │  "role":      │ )                   │
│              │   "student"   │                     │
│              │ }             │                     │
└──────────────┴───────────────┴────────────────────┘
```

### JWT Authentication Flow

```
1. User logs in with email + password
2. Server verifies credentials against database
3. Server creates a JWT token with user info + signs it with a SECRET KEY
4. Server sends the token to the client
5. Client stores the token (in localStorage or a cookie)
6. Client sends the token with every request (in the Authorization header)
7. Server verifies the token's signature — if valid, processes the request
8. Token expires after a set time (e.g., 1 hour) — user must log in again
```

> **Key Points:**
> - The **payload** is NOT encrypted — anyone can read it (use `atob()` to decode). So never put sensitive data like passwords in a JWT!
> - The **signature** ensures the token hasn't been tampered with — if someone changes the payload, the signature won't match
> - JWTs are **stateless** — the server doesn't need to store anything; all user info is inside the token itself

---

## 5. OAuth 2.0 — "Login with Google/GitHub"

> **Analogy:** OAuth is like checking into a **hotel using your Aadhaar card**. You don't create a new identity for the hotel — you use your existing government ID. Similarly, OAuth lets you log into websites using your existing Google or GitHub account.

### Why OAuth?

| Without OAuth | With OAuth |
|--------------|-----------|
| User creates yet another account (new email + password) | User clicks "Login with Google" — no new password needed |
| Website must store and protect passwords | Website never sees the user's Google password |
| User forgets password → needs recovery | Google handles all authentication |

### OAuth 2.0 Login Flow (Simplified)

```
┌──────────┐     ┌──────────────┐     ┌─────────────┐
│  User    │     │ Your Website │     │   Google     │
│ (Browser)│     │  (Server)    │     │ (Auth Server)│
└────┬─────┘     └──────┬───────┘     └──────┬───────┘
     │                  │                     │
     │ 1. Click         │                     │
     │ "Login with      │                     │
     │  Google"         │                     │
     │─────────────────→│                     │
     │                  │ 2. Redirect to      │
     │                  │    Google login page │
     │                  │────────────────────→│
     │ 3. User logs in  │                     │
     │    with Google   │                     │
     │    credentials   │                     │
     │─────────────────────────────────────→  │
     │                  │                     │
     │                  │ 4. Google sends back │
     │                  │    an authorization  │
     │                  │    code              │
     │                  │←────────────────────│
     │                  │                     │
     │                  │ 5. Your server       │
     │                  │    exchanges code    │
     │                  │    for user info     │
     │                  │────────────────────→│
     │                  │                     │
     │                  │ 6. Google sends      │
     │                  │    user profile      │
     │                  │    (name, email)     │
     │                  │←────────────────────│
     │                  │                     │
     │ 7. Your server   │                     │
     │    creates a     │                     │
     │    session/JWT   │                     │
     │←─────────────────│                     │
     │                  │                     │
     │ 8. User is       │                     │
     │    logged in! ✅  │                     │
```

> **Key Points:**
> - Your website **never sees** the user's Google password — Google handles all verification
> - Google only shares the user's **profile info** (name, email) — not their password
> - The "authorization code" in Step 4 is a one-time code that your server exchanges for an access token
> - This same flow works for GitHub, Facebook, Microsoft, and other OAuth providers

---

## 6. Two-Factor Authentication (2FA / MFA)

> **Analogy:** 2FA is like needing **both your key AND a fingerprint** to open the university server room. Even if someone copies your key (steals your password), they still can't get in without your fingerprint (second factor).

### What is 2FA?

Two-Factor Authentication requires **two different types** of proof:

| Factor | Type | Example |
|--------|------|---------|
| **Something you know** | Knowledge | Password, PIN |
| **Something you have** | Possession | Phone (OTP), security key |
| **Something you are** | Biometric | Fingerprint, face scan |

2FA uses any **two** of these factors. The most common combination is: Password (knowledge) + OTP on phone (possession).

### Common 2FA Methods

| Method | How It Works | Pros | Cons |
|--------|-------------|------|------|
| **SMS OTP** | 6-digit code sent via SMS | Easy, no app needed | SIM swap attacks, network delays |
| **TOTP (App-based)** | Google Authenticator / Authy generates time-based codes | More secure, works offline | User must install an app |
| **Email OTP** | Code sent to registered email | Simple | Slow, email can be hacked |
| **Push Notification** | "Approve login?" notification on phone | Very easy for user | Requires specific app |
| **Hardware Key** | USB security key (e.g., YubiKey) | Most secure | Expensive, easy to lose |

### TOTP (Time-Based One-Time Password) — How It Works

```
1. During 2FA setup:
   → Server generates a SECRET KEY (e.g., "JBSWY3DPEHPK3PXP")
   → User scans a QR code with Google Authenticator
   → Both server and app now share the same secret

2. During login:
   → User enters password (Factor 1) ✅
   → App generates a 6-digit code using: TOTP(secret + current_time)
   → Server generates the same code using: TOTP(secret + current_time)
   → If codes match → Login successful ✅

3. The code changes every 30 seconds!
   → 10:00:00 → code: 847293
   → 10:00:30 → code: 159482
   → 10:01:00 → code: 637201
```

> **Key Point:** TOTP works because both the server and the app have the **same secret key** and use the **same time**. Even without internet, the app generates the correct code because it's based on the clock.

---

## 7. Session Security — Protecting User Sessions

### Secure Cookie Attributes

When the server sends a session cookie, it should include security attributes:

```
Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Strict; Max-Age=3600; Path=/
```

| Attribute | Purpose | What Happens Without It |
|-----------|---------|------------------------|
| `HttpOnly` | Cookie cannot be accessed by JavaScript (`document.cookie`) | XSS attacks can steal the session cookie |
| `Secure` | Cookie is only sent over HTTPS connections | Cookie can be intercepted on public Wi-Fi |
| `SameSite=Strict` | Cookie is not sent with cross-site requests | CSRF attacks can use the cookie |
| `Max-Age=3600` | Cookie expires after 1 hour (3600 seconds) | Cookie persists forever (security risk) |
| `Path=/` | Cookie is valid for the entire website | May be restricted to specific pages |

### Session Fixation Attack Prevention

```
Session Fixation Attack:
1. Attacker creates a session ID: "evil123"
2. Attacker tricks the user into using this session: evil_link?session_id=evil123
3. User logs in — server associates "evil123" with the user's account
4. Attacker already knows session "evil123" → they're now logged in as the user!

Prevention:
→ ALWAYS regenerate the session ID after login!
→ Before login: session_id = "evil123" (attacker's)
→ After login:  session_id = "newRandom456" (server generates new one)
→ Attacker's old session ID is now useless
```

---

## 8. Rate Limiting — Preventing Brute Force Attacks

> **Analogy:** Rate limiting is like a **bank's ATM** that blocks your card after 3 wrong PIN attempts. Without rate limiting, an attacker could try thousands of passwords per second until they guess the right one.

### What is Brute Force?

A brute force attack tries **every possible password** until it finds the correct one:

```
Attempt 1: password = "aaaaaa"    → ❌ Wrong
Attempt 2: password = "aaaaab"    → ❌ Wrong
Attempt 3: password = "aaaaac"    → ❌ Wrong
...
Attempt 1,000,000: password = "Rahul123" → ✅ Correct!
```

### Rate Limiting Strategies

| Strategy | How It Works | Example |
|----------|-------------|---------|
| **Request limit** | Max N attempts per time window | 5 login attempts per 15 minutes |
| **Progressive delay** | Wait time increases with each failure | 1st fail: 0s, 2nd: 2s, 3rd: 5s, 4th: 30s |
| **Account lockout** | Lock account after N failures | Account locked for 30 minutes after 5 wrong attempts |
| **CAPTCHA** | Show CAPTCHA after suspicious activity | "Select all traffic lights" after 3 failed logins |
| **IP blocking** | Block requests from an IP with too many failures | Block IP for 1 hour after 20 failed attempts |

### Conceptual Rate Limiting Logic

```javascript
// Conceptual rate limiting (simplified)
var loginAttempts = {};  // Track attempts per email

function checkRateLimit(email) {
    var now = Date.now();
    if (!loginAttempts[email]) {
        loginAttempts[email] = { count: 0, firstAttempt: now };
    }

    var record = loginAttempts[email];
    var fifteenMinutes = 15 * 60 * 1000;  // 15 minutes in milliseconds

    // Reset counter if 15 minutes have passed
    if (now - record.firstAttempt > fifteenMinutes) {
        record.count = 0;
        record.firstAttempt = now;
    }

    // Check if limit exceeded
    if (record.count >= 5) {
        return { allowed: false, message: 'Too many attempts. Try again in 15 minutes.' };
    }

    record.count++;
    return { allowed: true };
}
```

> **Code Explanation:**
> - `loginAttempts` — an object that tracks failed login attempts per email address
> - `checkRateLimit(email)` — called before every login attempt to check if the user is allowed
> - `record.count` — tracks how many attempts have been made by this email
> - `fifteenMinutes` — the time window (15 minutes = 900,000 milliseconds)
> - If 15 minutes have passed since the first attempt, the counter resets to 0
> - If the count reaches 5, the function returns `allowed: false` with a helpful message
> - Each call increments the counter, so the 6th attempt within 15 minutes will be blocked

---

## 9. User Roles and Permissions — Authorization

> **Analogy:** In a university, a **student** can view their marks, a **professor** can enter marks, and the **HOD** can modify course structure. Everyone is authenticated (has an ID card), but their **authorization** (what they're allowed to do) depends on their role.

### Authentication vs Authorization

| Concept | Question | Example |
|---------|----------|---------|
| **Authentication** | "Who are you?" | Login with email + password |
| **Authorization** | "What are you allowed to do?" | Student can view, admin can edit/delete |

### Common Role-Based Access Control (RBAC) Model

| Role | View Data | Add Data | Edit Data | Delete Data | Manage Users |
|------|----------|----------|----------|-------------|-------------|
| **Guest** | ✅ (public only) | ❌ | ❌ | ❌ | ❌ |
| **Student** | ✅ (own data) | ✅ (limited) | ✅ (own only) | ❌ | ❌ |
| **Faculty** | ✅ (all students) | ✅ | ✅ (assigned classes) | ❌ | ❌ |
| **Admin** | ✅ (everything) | ✅ | ✅ | ✅ | ✅ |

### Conceptual Implementation

```javascript
// User object with role (stored in session or JWT)
var currentUser = {
    name: 'Rahul Kumar',
    email: 'rahul@mu.ac.in',
    role: 'student'  // Can be: 'guest', 'student', 'faculty', 'admin'
};

// Authorization check function
function canPerformAction(user, action) {
    var permissions = {
        guest:   ['view_public'],
        student: ['view_public', 'view_own', 'edit_own'],
        faculty: ['view_public', 'view_own', 'view_students', 'edit_marks', 'add_marks'],
        admin:   ['view_public', 'view_own', 'view_students', 'edit_marks',
                  'add_marks', 'delete_records', 'manage_users']
    };

    // Check if the user's role has the required permission
    var allowed = permissions[user.role] || [];
    return allowed.indexOf(action) !== -1;
}

// Usage examples
if (canPerformAction(currentUser, 'delete_records')) {
    // Show delete button
} else {
    // Hide delete button or show "Access Denied"
}
```

> **Code Explanation:**
> - `currentUser` — an object representing the logged-in user, typically stored in a session or JWT token
> - `permissions` — a mapping of roles to arrays of allowed actions. Each role "inherits" more permissions.
> - `canPerformAction(user, action)` — checks if the user's role includes the requested action
> - `allowed.indexOf(action) !== -1` — returns `true` if the action is found in the role's permission list
> - In the UI, you'd show/hide buttons and features based on what the user's role allows
> - On the **server side**, you must **always** re-check permissions — never trust the client to enforce authorization!

---

## Practical Session

### 🧪 Lab Experiment 24: Complete Login & Dashboard System

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Portal — Login System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .page { display: none; }
        .page.active { display: block; }
        .login-container { max-width: 450px; margin: 0 auto; }
    </style>
</head>
<body class="bg-light">

    <!-- ==================== LOGIN PAGE ==================== -->
    <div class="page active" id="loginPage">
        <div class="container py-5">
            <div class="login-container">
                <div class="text-center mb-4">
                    <h2>🎓 Mandsaur University</h2>
                    <p class="text-muted">Student Portal — Login</p>
                </div>
                <div class="card shadow">
                    <div class="card-body p-4">
                        <ul class="nav nav-tabs mb-3" id="authTabs">
                            <li class="nav-item">
                                <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#loginTab">Login</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#registerTab">Register</button>
                            </li>
                        </ul>
                        <div class="tab-content">
                            
                            <!-- Login Tab -->
                            <div class="tab-pane fade show active" id="loginTab">
                                <form id="loginForm">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="loginEmail" placeholder="Email" required>
                                        <label for="loginEmail">Email</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="loginPwd" placeholder="Password" required>
                                        <label for="loginPwd">Password</label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" id="remember">
                                        <label class="form-check-label" for="remember">Remember me</label>
                                    </div>
                                    <div class="alert alert-danger d-none" id="loginError"></div>
                                    <button type="submit" class="btn btn-primary w-100 btn-lg">Login</button>
                                </form>
                            </div>

                            <!-- Register Tab -->
                            <div class="tab-pane fade" id="registerTab">
                                <form id="registerForm">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="regName" placeholder="Name" required>
                                        <label for="regName">Full Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="regRoll" placeholder="Roll" required>
                                        <label for="regRoll">Roll Number</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="regEmail" placeholder="Email" required>
                                        <label for="regEmail">Email</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="regPwd" placeholder="Password" 
                                               required minlength="6">
                                        <label for="regPwd">Password (min 6 chars)</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <select class="form-select" id="regCourse" required>
                                            <option value="" disabled selected></option>
                                            <option>BCA</option>
                                            <option>BBA</option>
                                            <option>B.Tech</option>
                                        </select>
                                        <label for="regCourse">Course</label>
                                    </div>
                                    <div class="alert alert-danger d-none" id="regError"></div>
                                    <div class="alert alert-success d-none" id="regSuccess"></div>
                                    <button type="submit" class="btn btn-success w-100 btn-lg">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-center text-muted mt-3">
                    <small>Demo: Register a new account, then login</small>
                </p>
            </div>
        </div>
    </div>

    <!-- ==================== DASHBOARD PAGE ==================== -->
    <div class="page" id="dashboardPage">
        
        <!-- Dashboard Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand" href="#">🎓 Student Portal</a>
                <div class="d-flex align-items-center">
                    <span class="text-white me-3">Welcome, <strong id="userName"></strong></span>
                    <button class="btn btn-outline-light btn-sm" id="logoutBtn">Logout</button>
                </div>
            </div>
        </nav>

        <div class="container my-4">
            
            <!-- Welcome Card -->
            <div class="card bg-primary text-white mb-4 shadow">
                <div class="card-body py-4">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <h3>Welcome to Student Portal</h3>
                            <p class="mb-0">Manage your profile, view course details, and track progress.</p>
                        </div>
                        <div class="col-md-4 text-md-end">
                            <p class="mb-0">🔑 Logged in: <span id="loginTime"></span></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats Row -->
            <div class="row g-4 mb-4">
                <div class="col-md-3">
                    <div class="card shadow-sm text-center">
                        <div class="card-body">
                            <div class="display-6 text-primary">📚</div>
                            <h4 id="dashCourse">BCA</h4>
                            <p class="text-muted mb-0">Course</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow-sm text-center">
                        <div class="card-body">
                            <div class="display-6 text-success">📋</div>
                            <h4>Semester II</h4>
                            <p class="text-muted mb-0">Current Semester</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow-sm text-center">
                        <div class="card-body">
                            <div class="display-6 text-warning">📝</div>
                            <h4>5</h4>
                            <p class="text-muted mb-0">Subjects</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow-sm text-center">
                        <div class="card-body">
                            <div class="display-6 text-info">🧪</div>
                            <h4>30</h4>
                            <p class="text-muted mb-0">Lab Experiments</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Profile Card -->
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card shadow">
                        <div class="card-header bg-dark text-white">
                            <h5 class="mb-0">Your Profile</h5>
                        </div>
                        <div class="card-body">
                            <table class="table table-borderless mb-0">
                                <tr><td class="fw-bold" style="width:40%">Name</td><td id="profileName"></td></tr>
                                <tr><td class="fw-bold">Roll No</td><td id="profileRoll"></td></tr>
                                <tr><td class="fw-bold">Email</td><td id="profileEmail"></td></tr>
                                <tr><td class="fw-bold">Course</td><td id="profileCourse"></td></tr>
                                <tr><td class="fw-bold">Registered</td><td id="profileDate"></td></tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow">
                        <div class="card-header bg-dark text-white">
                            <h5 class="mb-0">Course Progress</h5>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Internet Technology</span><span class="text-success">100%</span>
                                </div>
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar bg-success" style="width: 100%"></div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>HTML & HTML5</span><span class="text-success">100%</span>
                                </div>
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar bg-success" style="width: 100%"></div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>CSS</span><span class="text-success">100%</span>
                                </div>
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar bg-success" style="width: 100%"></div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>JavaScript</span><span class="text-success">100%</span>
                                </div>
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar bg-success" style="width: 100%"></div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Bootstrap</span><span class="text-primary">85%</span>
                                </div>
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar bg-primary" style="width: 85%"></div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between">
                                    <span>Web Forms & Database</span><span class="text-warning">50%</span>
                                </div>
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar bg-warning" style="width: 50%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    (function() {
        'use strict';

        // User storage (simulating database)
        function getUsers() {
            return JSON.parse(localStorage.getItem('portal_users') || '[]');
        }
        function saveUsers(users) {
            localStorage.setItem('portal_users', JSON.stringify(users));
        }
        function getSession() {
            return JSON.parse(localStorage.getItem('portal_session') || 'null');
        }
        function setSession(user) {
            localStorage.setItem('portal_session', JSON.stringify({
                email: user.email,
                name: user.name,
                roll: user.roll,
                course: user.course,
                loginTime: new Date().toISOString(),
                regDate: user.regDate
            }));
        }
        function clearSession() {
            localStorage.removeItem('portal_session');
        }

        // Page navigation
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
            document.getElementById(pageId).classList.add('active');
        }

        // Check if already logged in
        var session = getSession();
        if (session) {
            showDashboard(session);
        }

        // REGISTER
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            var users = getUsers();
            var email = document.getElementById('regEmail').value.trim();
            var password = document.getElementById('regPwd').value;
            var name = document.getElementById('regName').value.trim();
            var roll = document.getElementById('regRoll').value.trim();
            var course = document.getElementById('regCourse').value;

            // Check if email already exists
            var exists = users.some(function(u) { return u.email === email; });
            if (exists) {
                showAlert('regError', 'An account with this email already exists');
                return;
            }

            // Store user (Note: In real app, password would be hashed server-side)
            users.push({
                email: email,
                password: password, // Client-side demo only — never store plain passwords in production
                name: name,
                roll: roll,
                course: course,
                regDate: new Date().toLocaleDateString()
            });
            saveUsers(users);

            hideAlert('regError');
            showAlert('regSuccess', 'Registration successful! You can now login.');
            this.reset();
        });

        // LOGIN
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            var email = document.getElementById('loginEmail').value.trim();
            var password = document.getElementById('loginPwd').value;
            var users = getUsers();

            var user = users.find(function(u) { return u.email === email && u.password === password; });
            if (user) {
                setSession(user);
                hideAlert('loginError');
                showDashboard(getSession());
            } else {
                showAlert('loginError', 'Invalid email or password');
            }
        });

        // LOGOUT
        document.getElementById('logoutBtn').addEventListener('click', function() {
            clearSession();
            showPage('loginPage');
            document.getElementById('loginForm').reset();
            document.getElementById('registerForm').reset();
        });

        // Show dashboard
        function showDashboard(session) {
            document.getElementById('userName').textContent = session.name;
            document.getElementById('loginTime').textContent = new Date(session.loginTime).toLocaleString();
            document.getElementById('dashCourse').textContent = session.course;
            document.getElementById('profileName').textContent = session.name;
            document.getElementById('profileRoll').textContent = session.roll;
            document.getElementById('profileEmail').textContent = session.email;
            document.getElementById('profileCourse').textContent = session.course;
            document.getElementById('profileDate').textContent = session.regDate || 'N/A';
            showPage('dashboardPage');
        }

        // Alert helpers
        function showAlert(id, msg) {
            var el = document.getElementById(id);
            el.textContent = msg;
            el.classList.remove('d-none');
        }
        function hideAlert(id) {
            document.getElementById(id).classList.add('d-none');
        }
    })();
    </script>

</body>
</html>
```

> **Code Explanation:**
> - **Page management** — CSS class `.page` hides all sections; `.page.active` shows the current one. `showPage(id)` toggles visibility.
> - **`getUsers()` / `saveUsers()`** — reads/writes the user list from/to localStorage (simulating a database table)
> - **`getSession()` / `setSession()` / `clearSession()`** — manages the login session in localStorage (simulating server-side session management)
> - **Registration handler** — checks if the email already exists (`users.some()`), and if not, adds the new user to the array. **Note:** The password is stored in plain text here **only for demo purposes** — in production, it would be hashed with bcrypt on the server.
> - **Login handler** — uses `users.find()` to search for a user matching both email and password. Shows a generic "Invalid email or password" error (never reveals which field is wrong).
> - **Logout handler** — calls `clearSession()` to remove the session from localStorage and switches back to the login page
> - **`showDashboard(session)`** — populates the dashboard with the user's info from the session object (name, roll number, email, course, login time)
> - **Tab navigation** — Bootstrap's tab component (`data-bs-toggle="tab"`) switches between Login and Register forms without page reload
> - **Course progress bars** — hardcoded percentages showing the student's progress through the syllabus, using Bootstrap's `progress-bar` component with colour coding (green = complete, blue = in progress, yellow = partial)

---

## Summary

| Concept | Details |
|---------|---------|
| Authentication | Login = verify identity (email + password) |
| Registration | Create new user account |
| Sessions | Server remembers logged-in user |
| Security | Hash passwords, use HTTPS, validate server-side |
| localStorage | Client-side storage for demo (not production auth) |
| CRUD | Create (register), Read (dashboard), Update (profile), Delete (logout) |

---

## Unit 7 Complete!

You've covered all Web Forms & Database topics:
- **Day 38:** Form elements, attributes, GET vs POST, admission form
- **Day 39:** JavaScript validation, regex, real-time feedback, password strength
- **Day 40:** SQL basics (CRUD), database design, CRUD app with localStorage
- **Day 41:** Authentication, sessions, security, login/dashboard system

---

*Day 41 of 55 | Unit 7 — Web Forms & Database | Web Technology (25BCA060)*
