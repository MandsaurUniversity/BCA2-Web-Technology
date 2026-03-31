# Dummy Content — Bootstrap Form Validation

## Form Title
**Student Registration — Mandsaur University**

## Form Fields and Validation

| Field | Type | Bootstrap Class | Required | Validation Rule | Valid Feedback | Invalid Feedback |
|-------|------|----------------|----------|----------------|---------------|-----------------|
| Full Name | text | form-control | Yes | Min 3 chars, letters only | "Looks good!" | "Please enter your full name (at least 3 characters)" |
| Email | email | form-control | Yes | Valid email format | "Valid email!" | "Please enter a valid email address" |
| Phone | tel | form-control | Yes | Exactly 10 digits | "Valid number!" | "Please enter a 10-digit phone number" |
| Date of Birth | date | form-control | Yes | Must be in the past | "Valid date!" | "Please select a valid date of birth" |
| Course | select | form-select | Yes | Must select one | "Course selected!" | "Please select a course" |
| Password | password | form-control | Yes | Min 8 chars, 1 uppercase, 1 number | "Strong password!" | "Password must be 8+ chars with uppercase and number" |
| Confirm Password | password | form-control | Yes | Must match password | "Passwords match!" | "Passwords do not match" |
| Address | textarea | form-control | No | Optional, max 200 chars | "" | "Address must be under 200 characters" |
| Terms | checkbox | form-check-input | Yes | Must be checked | "" | "You must agree to the terms and conditions" |

## Course Dropdown Options
- -- Select Course -- (default, invalid)
- BCA — Bachelor of Computer Applications
- BBA — Bachelor of Business Administration
- B.Com — Bachelor of Commerce
- B.Sc (CS) — Bachelor of Science (Computer Science)
- MCA — Master of Computer Applications
- MBA — Master of Business Administration

## Submit Button
- Text: "Register"
- Class: btn btn-success btn-lg

## Reset Button
- Text: "Clear Form"
- Class: btn btn-outline-secondary btn-lg

## Sample Valid Data
- Name: Kavita Dubey
- Email: kavita.dubey@example.com
- Phone: 9012345678
- DOB: 2005-06-15
- Course: BCA
- Password: Kavita@2026
- Confirm: Kavita@2026
- Address: 23, Subhash Nagar, Mandsaur, MP
- Terms: Checked

## Bootstrap Validation Classes Reference
- `needs-validation` — Add to `<form>` to enable validation styling
- `novalidate` — Add to `<form>` to prevent browser default validation
- `was-validated` — Added via JS after first submit attempt
- `is-valid` / `is-invalid` — For custom JS validation
- `valid-feedback` / `invalid-feedback` — Feedback text shown below field
