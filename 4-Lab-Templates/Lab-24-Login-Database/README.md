# Lab 24: Login System with Database (localStorage)

## Experiment
Create a login form and connect it with a database.

## Objective
Build a complete authentication system using HTML forms, JavaScript, and localStorage (simulating a database since no server is available in the lab).

## Important Note
⚠️ In a real-world application, user authentication is done on the **server side** with proper databases (MySQL, MongoDB) and password hashing. This lab uses **localStorage** to demonstrate the concept without a server.

## Instructions
1. Create 3 pages: Registration, Login, and Dashboard
2. **Registration page** (`register.html`): Collects user details and stores in localStorage
3. **Login page** (`index.html`): Validates credentials against stored data
4. **Dashboard** (`dashboard.html`): Shows user info after successful login
5. Write JavaScript for:
   - Storing user data in localStorage (as JSON)
   - Validating login credentials
   - Redirecting to dashboard on success
   - Showing error on invalid credentials
   - Logout functionality (clear session)

## Grading Criteria
- [ ] Registration form that stores data in localStorage (3 marks)
- [ ] Login form that validates against stored data (3 marks)
- [ ] Dashboard showing user info after login (3 marks)
- [ ] Logout functionality (3 marks)
- [ ] Error handling and validation (3 marks)

**Total: 15 marks**

## Reference
See `2-Content/7-Web-Forms-and-Database/` in the course repository.
