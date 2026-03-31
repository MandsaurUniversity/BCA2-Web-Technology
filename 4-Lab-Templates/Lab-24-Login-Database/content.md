# Dummy Content — Login System with localStorage

## Registration Form Fields
- Full Name (text, required)
- Email (email, required — used as username)
- Phone (tel, 10 digits)
- Password (password, min 8 characters)
- Confirm Password (must match)
- Course (select: BCA, BBA, B.Com, B.Sc, MCA)
- Register button

## Login Form Fields
- Email (used as username)
- Password
- Login button
- "Don't have an account? Register here" link

## Dashboard Content (shown after login)
- Welcome message: "Welcome, [User Name]!"
- User details card: Name, Email, Phone, Course
- Last login time (use JavaScript Date)
- Logout button

## Sample Users for Testing

### User 1
- Name: Rahul Sharma
- Email: rahul.sharma@example.com
- Phone: 9876543210
- Password: Rahul@123
- Course: BCA

### User 2
- Name: Priya Patel
- Email: priya.patel@example.com
- Phone: 9876543211
- Password: Priya@456
- Course: MCA

### User 3
- Name: Amit Verma
- Email: amit.verma@example.com
- Phone: 9876543212
- Password: Amit@789
- Course: BBA

## localStorage Schema
Store users as a JSON array under the key "users":
```json
[
  {
    "name": "Rahul Sharma",
    "email": "rahul.sharma@example.com",
    "phone": "9876543210",
    "password": "Rahul@123",
    "course": "BCA"
  }
]
```

Store current session under key "currentUser":
```json
{
  "name": "Rahul Sharma",
  "email": "rahul.sharma@example.com",
  "loginTime": "2026-04-01T10:30:00"
}
```

## Important Note for Students
In real applications:
- Passwords are NEVER stored as plain text — they are hashed using algorithms like bcrypt
- Authentication is done on the server, not in the browser
- Sessions use cookies or JWT tokens
- localStorage is NOT secure for sensitive data
This lab demonstrates the CONCEPT of login/registration flow using client-side storage.
