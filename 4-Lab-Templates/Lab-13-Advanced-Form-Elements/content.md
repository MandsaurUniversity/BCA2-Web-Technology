# Lab 13: Advanced Form Field Specifications

Use the following specifications to build your advanced HTML form. This form extends Lab 12 by adding radio buttons, checkboxes, password fields, and more input types.

---

## Form Fields

### 1. Full Name
- **Type:** `text`
- **Name:** `fullname`
- **Placeholder:** `Enter your full name`
- **Example:** Rahul Sharma, Sneha Joshi

### 2. Email
- **Type:** `email`
- **Name:** `email`
- **Placeholder:** `Enter your email address`
- **Example:** rahul.sharma@example.com, sneha.joshi@mu.ac.in

### 3. Password
- **Type:** `password`
- **Name:** `password`
- **Placeholder:** `Create a password`

### 4. Confirm Password
- **Type:** `password`
- **Name:** `confirm_password`
- **Placeholder:** `Confirm your password`

### 5. Gender (Radio Buttons)
- **Type:** `radio`
- **Name:** `gender` *(all radio buttons in this group share this name)*
- **Options:**
  - Male (`value="male"`)
  - Female (`value="female"`)
  - Other (`value="other"`)

### 6. Course (Radio Buttons)
- **Type:** `radio`
- **Name:** `course` *(all radio buttons in this group share this name)*
- **Options:**
  - BCA (`value="bca"`)
  - BBA (`value="bba"`)
  - B.Com (`value="bcom"`)
  - B.Sc (`value="bsc"`)

### 7. Hobbies (Checkboxes)
- **Type:** `checkbox`
- **Name:** `hobbies`
- **Options:**
  1. Reading (`value="reading"`)
  2. Coding (`value="coding"`)
  3. Cricket (`value="cricket"`)
  4. Music (`value="music"`)
  5. Cooking (`value="cooking"`)
  6. Travelling (`value="travelling"`)
  7. Photography (`value="photography"`)
  8. Gaming (`value="gaming"`)

### 8. Skills (Checkboxes)
- **Type:** `checkbox`
- **Name:** `skills`
- **Options:**
  1. HTML (`value="html"`)
  2. CSS (`value="css"`)
  3. JavaScript (`value="javascript"`)
  4. Python (`value="python"`)
  5. Java (`value="java"`)
  6. SQL (`value="sql"`)

### 9. Date of Birth
- **Type:** `date`
- **Name:** `dob`

### 10. Phone Number
- **Type:** `tel`
- **Name:** `phone`
- **Placeholder:** `+91-XXXXX-XXXXX`
- **Pattern:** `\+91-[0-9]{5}-[0-9]{5}` *(optional — for validation)*
- **Example:** +91-98765-43210, +91-87654-32109

### 11. Terms and Conditions (Single Checkbox)
- **Type:** `checkbox`
- **Name:** `terms`
- **Label:** `I agree to the terms and conditions`
- **Required:** Yes

### 12. Buttons
- **Submit Button:** `<button type="submit">Submit</button>`
- **Reset Button:** `<button type="reset">Reset</button>`

---

## Sample Test Data

Use this data to test your form after building it:

| Field              | Sample Value 1                | Sample Value 2                |
|--------------------|-------------------------------|-------------------------------|
| Full Name          | Rahul Sharma                  | Sneha Joshi                   |
| Email              | rahul.sharma@example.com      | sneha.joshi@mu.ac.in          |
| Password           | Rahul@2025                    | Sneha#2025                    |
| Confirm Password   | Rahul@2025                    | Sneha#2025                    |
| Gender             | Male                          | Female                        |
| Course             | BCA                           | BCA                           |
| Hobbies            | Coding, Cricket, Gaming       | Reading, Music, Photography   |
| Skills             | HTML, CSS, JavaScript         | HTML, Python, SQL             |
| Date of Birth      | 2005-03-15                    | 2004-11-22                    |
| Phone Number       | +91-98765-43210               | +91-87654-32109               |
| Terms              | ✅ Checked                     | ✅ Checked                     |

---

## HTML Quick Reference

```html
<!-- Radio Buttons (same name = single selection) -->
<fieldset>
    <legend>Gender:</legend>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>

    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>

    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label>
</fieldset>

<!-- Checkboxes (same name = multiple selection) -->
<fieldset>
    <legend>Hobbies:</legend>
    <input type="checkbox" id="reading" name="hobbies" value="reading">
    <label for="reading">Reading</label>

    <input type="checkbox" id="coding" name="hobbies" value="coding">
    <label for="coding">Coding</label>
    <!-- Add more checkboxes... -->
</fieldset>

<!-- Password Field -->
<label for="password">Password:</label>
<input type="password" id="password" name="password" placeholder="Create a password">

<!-- Date Input -->
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">

<!-- Phone Number -->
<label for="phone">Phone Number:</label>
<input type="tel" id="phone" name="phone" placeholder="+91-XXXXX-XXXXX">

<!-- Terms Checkbox -->
<input type="checkbox" id="terms" name="terms" required>
<label for="terms">I agree to the terms and conditions</label>

<!-- Submit and Reset Buttons -->
<button type="submit">Submit</button>
<button type="reset">Reset</button>
```

---

## Tips

1. **Radio Button Grouping:** All radio buttons with the same `name` attribute act as a single group — only one can be selected at a time.
2. **Checkbox vs Radio:** Use radio buttons when only one option can be selected (Gender, Course). Use checkboxes when multiple options can be selected (Hobbies, Skills).
3. **Fieldset & Legend:** Group related fields using `<fieldset>` and `<legend>` for better organization and accessibility.
4. **Password Fields:** Both password fields should have `type="password"` so the text is hidden while typing.
