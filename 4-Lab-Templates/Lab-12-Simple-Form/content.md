# Lab 12: Form Field Specifications

Use the following specifications to build your HTML form. Refer to the sample data for testing your form after completion.

---

## Form Fields

### 1. Full Name
- **Type:** `text`
- **Name:** `fullname`
- **Placeholder:** `Enter your full name`
- **Example:** Rahul Sharma, Priya Patel, Amit Verma

### 2. Age
- **Type:** `number`
- **Name:** `age`
- **Min:** `16`
- **Max:** `30`
- **Placeholder:** `Enter your age`
- **Example:** 19, 20, 21

### 3. Address
- **Type:** `textarea`
- **Name:** `address`
- **Rows:** `4`
- **Cols:** `50`
- **Placeholder:** `Enter your full address`
- **Example:** 45, Nehru Nagar, Mandsaur, Madhya Pradesh — 458001

### 4. Favorite Subject (Dropdown)
- **Type:** `select`
- **Name:** `fav_subject`
- **Options:**
  1. -- Select Subject -- *(disabled, selected by default)*
  2. Web Technology
  3. Database Management
  4. Operating Systems
  5. Discrete Mathematics
  6. Communication Skills

### 5. Favorite Movie (Dropdown)
- **Type:** `select`
- **Name:** `fav_movie`
- **Options:**
  1. -- Select Movie -- *(disabled, selected by default)*
  2. Dangal
  3. 3 Idiots
  4. PK
  5. Lagaan
  6. Taare Zameen Par
  7. Bajrangi Bhaijaan
  8. Chhichhore
  9. Stree

### 6. Favorite Singer (Dropdown)
- **Type:** `select`
- **Name:** `fav_singer`
- **Options:**
  1. -- Select Singer -- *(disabled, selected by default)*
  2. Arijit Singh
  3. Shreya Ghoshal
  4. Kishore Kumar
  5. Lata Mangeshkar
  6. Neha Kakkar
  7. Sonu Nigam
  8. Atif Aslam
  9. Mohit Chauhan

---

## Sample Test Data

Use this data to test your form after building it:

| Field            | Sample Value 1           | Sample Value 2           | Sample Value 3              |
|------------------|--------------------------|--------------------------|-----------------------------|
| Full Name        | Rahul Sharma             | Priya Patel              | Amit Kumar Verma            |
| Age              | 19                       | 20                       | 21                          |
| Address          | 45, Nehru Nagar, Mandsaur, MP — 458001 | 12, MG Road, Indore, MP — 452001 | 78, Station Road, Neemuch, MP — 458441 |
| Favorite Subject | Web Technology           | Database Management      | Operating Systems           |
| Favorite Movie   | 3 Idiots                 | Dangal                   | Chhichhore                  |
| Favorite Singer  | Arijit Singh             | Shreya Ghoshal           | Kishore Kumar               |

---

## HTML Quick Reference

```html
<!-- Text Input with Label -->
<label for="fullname">Full Name:</label>
<input type="text" id="fullname" name="fullname" placeholder="Enter your full name">

<!-- Number Input -->
<label for="age">Age:</label>
<input type="number" id="age" name="age" min="16" max="30" placeholder="Enter your age">

<!-- Textarea -->
<label for="address">Address:</label>
<textarea id="address" name="address" rows="4" cols="50" placeholder="Enter your full address"></textarea>

<!-- Dropdown Select -->
<label for="fav_subject">Favorite Subject:</label>
<select id="fav_subject" name="fav_subject">
    <option value="" disabled selected>-- Select Subject --</option>
    <option value="web_technology">Web Technology</option>
    <option value="database_management">Database Management</option>
    <!-- Add more options -->
</select>

<!-- Submit Button -->
<button type="submit">Submit</button>
```
