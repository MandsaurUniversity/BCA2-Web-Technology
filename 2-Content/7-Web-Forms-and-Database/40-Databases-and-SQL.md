# Day 40 — Introduction to Databases & SQL

🔬 **Type:** Theory + Practical
🕐 **Duration:** 2 Hours
📚 **Unit:** 7 — Web Forms & Database
🧪 **Lab Experiment:** 23

---

## Learning Objectives

By the end of this session, students will be able to:
- Understand the role of databases in web applications
- Differentiate between database types (relational vs NoSQL)
- Write basic SQL queries (CREATE, INSERT, SELECT, UPDATE, DELETE)
- Design a simple database schema for a web application

---

## 1. Why Databases Matter in Web Development

> **Analogy:** A website without a database is like a **library without shelves** — you can display information, but you can't store or retrieve it. Databases are the organized shelves where all data lives.

### Web Application Architecture

```
Browser (Client)
    ↓ HTTP Request
Web Server (Apache/Nginx)
    ↓ Script (PHP/Node.js)
Database Server (MySQL/PostgreSQL)
    ↓ SQL Query
Data (Stored in tables)
```

### When Do You Need a Database?

| Scenario | Database Needed? |
|----------|-----------------|
| Static portfolio website | No |
| User login/registration | Yes |
| Blog with posts & comments | Yes |
| E-commerce product catalog | Yes |
| Contact form that saves data | Yes |
| Simple landing page | No |

---

## 2. Types of Databases

### Relational (SQL) Databases

| Database | Key Feature |
|----------|------------|
| MySQL | Most popular, free, used with PHP |
| PostgreSQL | Advanced features, open-source |
| SQLite | File-based, no server needed |
| Microsoft SQL Server | Enterprise, Windows ecosystem |
| Oracle | Enterprise, high performance |

### NoSQL Databases

| Database | Type | Example Use |
|----------|------|-------------|
| MongoDB | Document | Flexible schemas, JSON storage |
| Redis | Key-Value | Caching, sessions |
| Firebase | Document | Real-time apps, mobile |

---

## 3. SQL Basics

### CREATE — Make a Table

```sql
CREATE TABLE students (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    roll_no     VARCHAR(20) UNIQUE NOT NULL,
    email       VARCHAR(100) UNIQUE,
    phone       VARCHAR(15),
    course      VARCHAR(50) DEFAULT 'BCA',
    percentage  DECIMAL(5,2),
    dob         DATE,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

> **Code Explanation:**
> - `CREATE TABLE students (...)` — creates a new table called `students` with defined columns
> - `INT PRIMARY KEY AUTO_INCREMENT` — `id` is an integer that uniquely identifies each row; `AUTO_INCREMENT` means the database assigns 1, 2, 3... automatically
> - `VARCHAR(100) NOT NULL` — a text field up to 100 characters; `NOT NULL` means this field cannot be left empty
> - `UNIQUE` — ensures no two students can have the same `roll_no` or `email`
> - `DEFAULT 'BCA'` — if no course is specified during insertion, it defaults to `'BCA'`
> - `DECIMAL(5,2)` — a precise number with up to 5 total digits and 2 after the decimal (e.g., 85.50, 100.00)
> - `DATE` — stores a date in `YYYY-MM-DD` format
> - `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` — automatically records the exact date and time when the row is created

### Data Types

| SQL Type | Description | Example |
|----------|------------|---------|
| `INT` | Integer | 1, 42, 100 |
| `VARCHAR(n)` | Variable string up to n | 'Rahul Kumar' |
| `TEXT` | Long text | Bio, description |
| `DECIMAL(p,s)` | Precise number | 85.50 |
| `DATE` | Date | '2006-05-15' |
| `TIMESTAMP` | Date + Time | '2026-05-09 10:30:00' |
| `BOOLEAN` | True/False | TRUE, FALSE |

### INSERT — Add Records

```sql
INSERT INTO students (name, roll_no, email, phone, percentage, dob)
VALUES ('Rahul Kumar', '25BCA001', 'rahul@example.com', '9876543210', 85.50, '2006-03-15');

INSERT INTO students (name, roll_no, email, phone, percentage, dob)
VALUES ('Priya Sharma', '25BCA002', 'priya@example.com', '9876543211', 92.00, '2006-07-22');

INSERT INTO students (name, roll_no, email, phone, percentage, dob)
VALUES ('Amit Patel', '25BCA003', 'amit@example.com', '9876543212', 65.75, '2005-11-08');
```

> **Code Explanation:**
> - `INSERT INTO students (name, roll_no, email, phone, percentage, dob)` — specifies which table and which columns to fill
> - `VALUES (...)` — provides the actual data in the **same order** as the columns listed
> - String values are enclosed in **single quotes** (`'Rahul Kumar'`), while numbers are written without quotes (`85.50`)
> - Date values follow the `'YYYY-MM-DD'` format (e.g., `'2006-03-15'` means March 15, 2006)
> - The `id` column is not mentioned because `AUTO_INCREMENT` fills it automatically (1, 2, 3...)
> - The `created_at` column is also skipped — it uses the `DEFAULT CURRENT_TIMESTAMP` value

### SELECT — Read Data

```sql
-- All records
SELECT * FROM students;

-- Specific columns
SELECT name, roll_no, percentage FROM students;

-- With condition
SELECT * FROM students WHERE percentage > 80;

-- Sorting
SELECT * FROM students ORDER BY percentage DESC;

-- Limit results
SELECT * FROM students ORDER BY name LIMIT 5;

-- Count
SELECT COUNT(*) AS total_students FROM students;

-- Average
SELECT AVG(percentage) AS avg_marks FROM students;

-- Pattern matching
SELECT * FROM students WHERE name LIKE 'R%';   -- Starts with R
SELECT * FROM students WHERE email LIKE '%@example.com';
```

> **Code Explanation:**
> - `SELECT *` — selects **all columns** from the table; use specific column names for better performance
> - `SELECT name, roll_no, percentage` — selects only the specified columns
> - `WHERE percentage > 80` — filters rows where the condition is true (only students scoring above 80%)
> - `ORDER BY percentage DESC` — sorts results by percentage in **descending** order (highest first); use `ASC` for ascending
> - `LIMIT 5` — returns only the first 5 rows (useful for pagination or "top 5" queries)
> - `COUNT(*)` — counts the total number of rows; `AS total_students` gives the result column a friendly name (alias)
> - `AVG(percentage)` — calculates the average value of the `percentage` column
> - `LIKE 'R%'` — pattern matching: `%` means "any characters"; `R%` matches names **starting with R**
> - `LIKE '%@example.com'` — matches emails **ending with** `@example.com`

### UPDATE — Modify Records

```sql
UPDATE students SET phone = '9999999999' WHERE roll_no = '25BCA001';

UPDATE students SET percentage = 88.00 WHERE id = 1;
```

> **Code Explanation:**
> - `UPDATE students` — specifies which table to modify
> - `SET phone = '9999999999'` — sets the `phone` column to the new value
> - `WHERE roll_no = '25BCA001'` — **critical:** the `WHERE` clause specifies which row(s) to update. Without `WHERE`, **ALL rows** would be updated!
> - You can update multiple columns: `SET phone = '...', email = '...'`
>
> ⚠️ **Warning:** Always use `WHERE` with `UPDATE`. Running `UPDATE students SET percentage = 0;` without `WHERE` would set **every student's** percentage to 0!

### DELETE — Remove Records

```sql
DELETE FROM students WHERE id = 3;

-- Delete all (careful!)
-- DELETE FROM students;
```

> **Code Explanation:**
> - `DELETE FROM students WHERE id = 3` — removes the row where `id` equals 3 (Amit Patel in our example)
> - `DELETE FROM students` (without WHERE) — **deletes ALL rows** in the table! This is extremely dangerous.
> - The `--` at the start of a line makes it a **SQL comment** — the database ignores it. The dangerous command is commented out as a safety reminder.
>
> ⚠️ **Warning:** Just like `UPDATE`, always use `WHERE` with `DELETE`. There is **no undo button** in SQL — deleted data is gone forever (unless you have backups).

---

## 4. Database Design for a Web App

### Example: University Website Database

```sql
-- Departments table
CREATE TABLE departments (
    id      INT PRIMARY KEY AUTO_INCREMENT,
    name    VARCHAR(100) NOT NULL,
    code    VARCHAR(10) UNIQUE NOT NULL
);

-- Courses table
CREATE TABLE courses (
    id              INT PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100) NOT NULL,
    code            VARCHAR(20) UNIQUE NOT NULL,
    department_id   INT,
    credits         INT DEFAULT 4,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Students table with foreign key
CREATE TABLE students (
    id          INT PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    roll_no     VARCHAR(20) UNIQUE NOT NULL,
    email       VARCHAR(100) UNIQUE,
    course_id   INT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

> **Code Explanation:**
> - **Three related tables** are created: `departments` → `courses` → `students`, forming a hierarchy
> - `FOREIGN KEY (department_id) REFERENCES departments(id)` — creates a **relationship** between courses and departments. Each course belongs to one department.
> - `FOREIGN KEY (course_id) REFERENCES courses(id)` — links each student to a specific course
> - Foreign keys ensure **referential integrity** — you can't add a student with `course_id = 99` if no course with `id = 99` exists
> - This design avoids data duplication: instead of storing "Computer Science" in every student's row, we store it once in the `departments` table and reference it by `id`

### Entity-Relationship Concept

```
departments (1) ──── (M) courses (1) ──── (M) students
  One department has many courses.
  One course has many students.
```

---

## 5. Joins — Combining Tables

```sql
-- Get student name with their course name
SELECT students.name, students.roll_no, courses.name AS course
FROM students
INNER JOIN courses ON students.course_id = courses.id;

-- Get course details with department name
SELECT courses.name AS course, departments.name AS department
FROM courses
INNER JOIN departments ON courses.department_id = departments.id;
```

> **Code Explanation:**
> - `SELECT students.name, students.roll_no, courses.name AS course` — selects columns from **two different tables**; `AS course` gives the column a clearer name in the result
> - `FROM students INNER JOIN courses` — combines the `students` and `courses` tables
> - `ON students.course_id = courses.id` — the **join condition**: matches each student's `course_id` with the corresponding course's `id`
> - `INNER JOIN` returns only rows where a match exists in **both** tables — students without a valid course are excluded
> - This is how relational databases connect data across tables, avoiding redundancy

---

## 6. More SQL Queries — GROUP BY, HAVING, Subqueries & ALTER TABLE

### GROUP BY — Grouping Rows for Aggregate Calculations

`GROUP BY` groups rows that share a common value, allowing you to perform calculations on each group.

```sql
-- Count students in each course
SELECT course, COUNT(*) AS student_count
FROM students
GROUP BY course;

-- Average percentage per course
SELECT course, AVG(percentage) AS avg_marks
FROM students
GROUP BY course;

-- Find highest scorer in each course
SELECT course, MAX(percentage) AS top_marks, MIN(percentage) AS lowest_marks
FROM students
GROUP BY course;
```

> **Code Explanation:**
> - `GROUP BY course` — groups all rows with the same `course` value together
> - `COUNT(*)` — counts how many rows are in each group (e.g., how many BCA students)
> - `AVG(percentage)` — calculates the average percentage within each group
> - `MAX(percentage)` and `MIN(percentage)` — find the highest and lowest values in each group
> - `AS student_count` — gives the result column a readable name (alias)

### HAVING — Filtering Groups

`HAVING` is like `WHERE`, but it works **after** grouping. Use it to filter groups based on aggregate results.

```sql
-- Show only courses with more than 5 students
SELECT course, COUNT(*) AS student_count
FROM students
GROUP BY course
HAVING COUNT(*) > 5;

-- Show courses where average marks are above 75
SELECT course, AVG(percentage) AS avg_marks
FROM students
GROUP BY course
HAVING AVG(percentage) > 75;
```

> **Code Explanation:**
> - `WHERE` filters **individual rows** before grouping; `HAVING` filters **groups** after grouping
> - `HAVING COUNT(*) > 5` — only shows courses that have more than 5 students enrolled
> - `HAVING AVG(percentage) > 75` — only shows courses where the group average exceeds 75%
> - **Order of execution:** `WHERE` → `GROUP BY` → `HAVING` → `ORDER BY`

| Clause | Filters | When It Runs |
|--------|---------|-------------|
| `WHERE` | Individual rows | Before grouping |
| `HAVING` | Groups of rows | After grouping |

### Subqueries — A Query Inside a Query

> **Analogy:** A subquery is like asking a **question within a question**: "Who scored more than the **average** marks?" — first you calculate the average, then find students above it.

```sql
-- Find students who scored above average
SELECT name, percentage
FROM students
WHERE percentage > (SELECT AVG(percentage) FROM students);

-- Find students enrolled in the 'Computer Science' department
SELECT name, roll_no
FROM students
WHERE course_id IN (
    SELECT id FROM courses
    WHERE department_id = (SELECT id FROM departments WHERE name = 'Computer Science')
);
```

> **Code Explanation:**
> - `(SELECT AVG(percentage) FROM students)` — this **inner query** runs first and calculates the average; the result (e.g., 81.08) is then used by the outer query
> - `WHERE percentage > (result)` — the outer query finds students whose percentage exceeds that average
> - `IN (SELECT id FROM courses WHERE ...)` — the inner query returns a **list** of course IDs; `IN` checks if the student's `course_id` is in that list
> - Subqueries can be nested multiple levels deep, but keep them simple for readability

### ALTER TABLE — Modifying Table Structure

Use `ALTER TABLE` to change an existing table's structure **without losing data**.

```sql
-- Add a new column
ALTER TABLE students ADD COLUMN aadhar_no VARCHAR(12);

-- Change column data type
ALTER TABLE students MODIFY COLUMN phone VARCHAR(15);

-- Rename a column
ALTER TABLE students RENAME COLUMN percentage TO marks_percentage;

-- Drop (remove) a column
ALTER TABLE students DROP COLUMN aadhar_no;

-- Add a constraint
ALTER TABLE students ADD CONSTRAINT chk_marks CHECK (percentage >= 0 AND percentage <= 100);
```

> **Code Explanation:**
> - `ADD COLUMN aadhar_no VARCHAR(12)` — adds a new column called `aadhar_no` (for Aadhaar number, 12 digits) to the existing table
> - `MODIFY COLUMN phone VARCHAR(15)` — changes the phone column to allow up to 15 characters (e.g., for international format)
> - `RENAME COLUMN` — changes a column's name without affecting the stored data
> - `DROP COLUMN` — permanently removes a column and all its data
> - `ADD CONSTRAINT chk_marks CHECK (...)` — adds a validation rule: percentage must be between 0 and 100

---

## 7. ACID Properties — Ensuring Reliable Transactions

> **Analogy:** Imagine you're at an **ATM in Mandsaur** transferring ₹5,000 from your savings to your friend Rahul's account. What if the money leaves your account but never reaches Rahul? ACID properties prevent exactly this kind of disaster.

ACID is an acronym for four properties that guarantee database transactions are processed reliably:

### The Four Properties

| Property | Meaning | ATM Example |
|----------|---------|-------------|
| **A**tomicity | "All or Nothing" — either the entire transaction completes, or nothing happens | Either ₹5,000 leaves your account AND reaches Rahul, or neither happens |
| **C**onsistency | Database moves from one valid state to another | Total money in the bank remains the same (₹5,000 deducted + ₹5,000 added = ₹0 net change) |
| **I**solation | Concurrent transactions don't interfere with each other | If Priya also transfers money at the same time, the two transactions don't mix up |
| **D**urability | Once committed, the transaction is permanent — even if the server crashes | After the ATM shows "Transfer Successful", the record survives a power cut |

### Transaction Example in SQL

```sql
-- ATM Transfer: Rahul sends ₹5000 to Priya
START TRANSACTION;

-- Step 1: Deduct from Rahul's account
UPDATE accounts SET balance = balance - 5000 WHERE name = 'Rahul Kumar';

-- Step 2: Add to Priya's account
UPDATE accounts SET balance = balance + 5000 WHERE name = 'Priya Sharma';

-- If both steps succeed → make it permanent
COMMIT;

-- If any step fails → undo everything
-- ROLLBACK;
```

> **Code Explanation:**
> - `START TRANSACTION` — begins a transaction; all following statements are treated as **one unit**
> - The two `UPDATE` statements must **both succeed** for the transfer to be valid (Atomicity)
> - `COMMIT` — makes all changes permanent if everything went well (Durability)
> - `ROLLBACK` — undoes all changes if something went wrong (restores Atomicity)
> - Without transactions, if the server crashes between Step 1 and Step 2, Rahul loses ₹5,000 but Priya never receives it!

---

## 8. Database Normalization — Organizing Data Efficiently

> **Analogy:** Normalization is like organizing a **messy cupboard** — you separate clothes by type (shirts, pants, etc.) into different shelves. Similarly, normalization separates data into well-structured tables to avoid repetition and inconsistency.

### Why Normalize?

| Problem Without Normalization | Example |
|------------------------------|---------|
| **Data redundancy** | "Computer Science" department name repeated in every student row |
| **Update anomaly** | If department name changes, you must update hundreds of rows |
| **Insert anomaly** | Can't add a new department until at least one student enrolls |
| **Delete anomaly** | Deleting the last student in a department loses the department info |

### First Normal Form (1NF) — No Repeating Groups

**Rule:** Each column should contain only **atomic (single) values**. No lists, no multiple values in one cell.

```
❌ NOT in 1NF (bad design):
┌────────────┬───────────────────────┐
│ Student    │ Subjects              │
├────────────┼───────────────────────┤
│ Rahul      │ HTML, CSS, JavaScript │  ← Multiple values in one cell!
│ Priya      │ HTML, Bootstrap       │
└────────────┴───────────────────────┘

✅ In 1NF (good design):
┌────────────┬────────────┐
│ Student    │ Subject    │
├────────────┼────────────┤
│ Rahul      │ HTML       │  ← One value per cell
│ Rahul      │ CSS        │
│ Rahul      │ JavaScript │
│ Priya      │ HTML       │
│ Priya      │ Bootstrap  │
└────────────┴────────────┘
```

### Second Normal Form (2NF) — No Partial Dependencies

**Rule:** Must be in 1NF, AND every non-key column must depend on the **entire** primary key (not just part of it).

```
❌ NOT in 2NF (bad: course_name depends only on course_id, not on student_id):
┌────────────┬───────────┬─────────────┬───────────────┐
│ student_id │ course_id │ course_name │ student_marks │
├────────────┼───────────┼─────────────┼───────────────┤
│ 1          │ BCA       │ BCA Program │ 85            │
│ 2          │ BCA       │ BCA Program │ 92            │  ← "BCA Program" repeated!
└────────────┴───────────┴─────────────┴───────────────┘

✅ In 2NF (split into two tables):
Table: enrollments               Table: courses
┌────────────┬───────────┬───────┐   ┌───────────┬─────────────┐
│ student_id │ course_id │ marks │   │ course_id │ course_name │
├────────────┼───────────┼───────┤   ├───────────┼─────────────┤
│ 1          │ BCA       │ 85    │   │ BCA       │ BCA Program │
│ 2          │ BCA       │ 92    │   │ BBA       │ BBA Program │
└────────────┴───────────┴───────┘   └───────────┴─────────────┘
```

### Third Normal Form (3NF) — No Transitive Dependencies

**Rule:** Must be in 2NF, AND no non-key column should depend on another non-key column.

```
❌ NOT in 3NF (bad: city depends on pin_code, not directly on student_id):
┌────────────┬──────────┬──────────┐
│ student_id │ pin_code │ city     │
├────────────┼──────────┼──────────┤
│ 1          │ 458001   │ Mandsaur │  ← city is determined by pin_code
│ 2          │ 452001   │ Indore   │     not by student_id
│ 3          │ 458001   │ Mandsaur │  ← "Mandsaur" repeated!
└────────────┴──────────┴──────────┘

✅ In 3NF (separate pin_code → city into its own table):
Table: students                  Table: pin_codes
┌────────────┬──────────┐        ┌──────────┬──────────┐
│ student_id │ pin_code │        │ pin_code │ city     │
├────────────┼──────────┤        ├──────────┼──────────┤
│ 1          │ 458001   │        │ 458001   │ Mandsaur │
│ 2          │ 452001   │        │ 452001   │ Indore   │
│ 3          │ 458001   │        └──────────┴──────────┘
└────────────┴──────────┘
```

| Normal Form | Rule | Problem It Solves |
|-------------|------|------------------|
| **1NF** | Atomic values, no repeating groups | Multiple values in one cell |
| **2NF** | 1NF + no partial dependencies | Redundant data from partial key dependency |
| **3NF** | 2NF + no transitive dependencies | Redundant data from indirect dependencies |

---

## 9. Entity-Relationship (ER) Diagrams

> **Analogy:** An ER diagram is like the **blueprint of a building** — before constructing the database, you draw a plan showing what tables you need, what columns they'll have, and how they relate to each other.

### Key ER Diagram Components

| Component | Symbol | Example |
|-----------|--------|---------|
| **Entity** | Rectangle | `Student`, `Course`, `Department` |
| **Attribute** | Oval | `name`, `roll_no`, `email` |
| **Primary Key** | Underlined attribute | `student_id`, `course_id` |
| **Relationship** | Diamond | "enrolls in", "belongs to" |
| **Cardinality** | 1, M, N | One-to-Many, Many-to-Many |

### ER Diagram for University Database

```
┌─────────────────┐         ┌──────────────┐         ┌─────────────────┐
│   DEPARTMENT    │         │   COURSE     │         │    STUDENT      │
├─────────────────┤         ├──────────────┤         ├─────────────────┤
│ *dept_id (PK)   │───1:M──→│ *course_id   │───1:M──→│ *student_id(PK) │
│  dept_name      │  has    │  course_name │  has    │  name           │
│  dept_code      │ courses │  credits     │students │  roll_no        │
│                 │         │  dept_id(FK) │         │  email          │
│                 │         │              │         │  course_id (FK) │
└─────────────────┘         └──────────────┘         └─────────────────┘

Legend:
  * = Primary Key (PK)
  FK = Foreign Key
  1:M = One-to-Many relationship
  ──→ = Direction of relationship
```

### Cardinality Types

| Relationship | Meaning | Example |
|-------------|---------|---------|
| **One-to-One (1:1)** | Each entity links to exactly one | Student ↔ Aadhaar Card |
| **One-to-Many (1:M)** | One entity links to many | Department → Many Courses |
| **Many-to-Many (M:N)** | Many entities link to many | Students ↔ Subjects (requires a junction table) |

---

## 10. Database Indexing — Making Queries Faster

> **Analogy:** Think of a **textbook index** at the back of a book. Without an index, to find "CSS Flexbox" you'd have to flip through every single page. With an index, you look up "CSS Flexbox → Page 145" and go directly there. Database indexes work exactly the same way!

### How Indexes Work

Without an index, the database performs a **full table scan** — checking every single row to find matches. With an index, it uses a sorted data structure (like a tree) to jump directly to the matching rows.

```
Without Index (Full Table Scan):
→ Check row 1... no
→ Check row 2... no
→ Check row 3... YES!
→ Check row 4... no
→ ... (checks ALL 10,000 rows)

With Index on 'roll_no':
→ Look up '25BCA060' in index
→ Index says: "Row 60"
→ Jump directly to row 60!
```

### Creating and Using Indexes

```sql
-- Create an index on a frequently searched column
CREATE INDEX idx_roll ON students(roll_no);

-- Create an index on email for faster login lookups
CREATE INDEX idx_email ON students(email);

-- Create a composite index on two columns
CREATE INDEX idx_course_marks ON students(course, percentage);

-- View all indexes on a table
SHOW INDEX FROM students;

-- Remove an index
DROP INDEX idx_roll ON students;
```

> **Code Explanation:**
> - `CREATE INDEX idx_roll ON students(roll_no)` — creates an index named `idx_roll` on the `roll_no` column, making `WHERE roll_no = '25BCA060'` queries much faster
> - `idx_email` — an index on the `email` column, useful because login queries search by email
> - **Composite index** `idx_course_marks` — an index on two columns together, useful for queries that filter by both `course` and `percentage`
> - `SHOW INDEX` — displays all indexes on a table
> - `DROP INDEX` — removes an index (useful if it's no longer needed)

### When to Use Indexes

| Use Index When | Don't Use Index When |
|---------------|---------------------|
| Column is frequently searched (`WHERE`) | Table has very few rows (<100) |
| Column is used in `JOIN` conditions | Column values change very often |
| Column is used in `ORDER BY` | Column has very few unique values (like gender: M/F) |
| Column is a `PRIMARY KEY` or `UNIQUE` (auto-indexed) | You need maximum write speed |

> ⚠️ **Trade-off:** Indexes make **reads faster** but **writes slower** (because the index must be updated on every INSERT/UPDATE/DELETE). Use them wisely!

---

## 11. SQL Injection Prevention

> **Analogy:** Imagine a university admission form where you write your name. A prankster writes: "Rahul'; DROP TABLE students;--" as their name. If the system blindly puts this into a SQL query, it could **delete the entire students table**! This is SQL Injection.

### The "Bobby Tables" Problem

```
Normal input:   Rahul Kumar
SQL generated:  SELECT * FROM students WHERE name = 'Rahul Kumar';
                → Works fine ✅

Malicious input:   Rahul'; DROP TABLE students;--
SQL generated:     SELECT * FROM students WHERE name = 'Rahul'; DROP TABLE students;--';
                   → Deletes the entire table! ❌💀
```

### How SQL Injection Works

```sql
-- Vulnerable code (NEVER do this!):
-- query = "SELECT * FROM users WHERE email = '" + userInput + "' AND password = '" + pwdInput + "'";

-- If attacker enters email as: ' OR 1=1 --
-- The query becomes:
SELECT * FROM users WHERE email = '' OR 1=1 --' AND password = '';
-- OR 1=1 is always true → returns ALL users!
-- -- comments out the rest of the query
```

> **Code Explanation:**
> - The attacker injects `' OR 1=1 --` as the email input
> - The `'` closes the string early
> - `OR 1=1` is always true, so the `WHERE` clause matches **every row**
> - `--` is a SQL comment that ignores the rest of the query (including the password check)
> - The attacker is now "logged in" without knowing any password!

### Prevention: Parameterized Queries (Prepared Statements)

```sql
-- ✅ SAFE: Using parameterized queries (conceptual)
-- Instead of building SQL strings with user input:

-- PHP example:
-- $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
-- $stmt->execute([$email, $password]);

-- Node.js example:
-- db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]);

-- The ? placeholders are filled safely by the database driver
-- Special characters are automatically escaped — no injection possible!
```

> **Code Explanation:**
> - `?` **placeholders** — instead of concatenating user input directly into the SQL string, you use `?` markers
> - The database driver fills in the placeholders safely, **escaping** any special characters (like `'` and `;`)
> - Even if the attacker enters `' OR 1=1 --`, it's treated as a **literal string**, not as SQL code
> - This is the **#1 most important security practice** in web development

### SQL Injection Prevention Checklist

| Practice | Description |
|----------|-------------|
| ✅ Use parameterized queries | Never concatenate user input into SQL strings |
| ✅ Use ORM libraries | Frameworks like Sequelize, Prisma auto-protect against injection |
| ✅ Validate input | Check that email looks like an email, phone has 10 digits, etc. |
| ✅ Use least privilege | Database user should only have permissions it needs (no DROP TABLE!) |
| ✅ Keep software updated | Database and framework updates patch known vulnerabilities |
| ❌ Don't trust client-side | Validation in JavaScript can be bypassed |

---

## 12. Database Setup Guide — Installing MySQL with XAMPP on Windows

> **Note:** In our lab, we simulate database operations with JavaScript and localStorage. But for real projects, you need an actual database server. Here's how to set one up at home.

### Option 1: XAMPP (Recommended for Beginners)

XAMPP bundles Apache (web server) + MySQL (database) + PHP in one installer.

**Step-by-step installation:**

```
Step 1: Download XAMPP
   → Visit https://www.apachefriends.org/
   → Click "XAMPP for Windows" → Download the installer

Step 2: Install XAMPP
   → Run the downloaded .exe file
   → Choose components: Apache, MySQL, PHP, phpMyAdmin
   → Install to C:\xampp (default)

Step 3: Start Services
   → Open XAMPP Control Panel (search "XAMPP" in Start menu)
   → Click "Start" next to Apache
   → Click "Start" next to MySQL
   → Both should show green "Running" status

Step 4: Open phpMyAdmin
   → Open browser → Go to http://localhost/phpmyadmin
   → This is a web-based tool to manage your MySQL databases

Step 5: Create a Database
   → Click "New" in the left sidebar
   → Enter database name: "university_db"
   → Click "Create"

Step 6: Run SQL Queries
   → Click on your database name
   → Click the "SQL" tab at the top
   → Paste your CREATE TABLE and INSERT queries
   → Click "Go" to execute
```

### Option 2: MySQL Standalone Installation

```
Step 1: Download MySQL Community Server
   → Visit https://dev.mysql.com/downloads/mysql/
   → Choose "MySQL Installer for Windows"
   → Download and run

Step 2: Choose Setup Type
   → Select "Developer Default" or "Server Only"
   → Click Next and follow the wizard

Step 3: Configure Server
   → Set root password (remember this!)
   → Keep default port: 3306
   → Complete installation

Step 4: Access MySQL via Command Line
   → Open Command Prompt
   → Type: mysql -u root -p
   → Enter your root password
   → You're now in the MySQL shell!
```

### Quick MySQL Commands Reference

```sql
-- Show all databases
SHOW DATABASES;

-- Create a new database
CREATE DATABASE university_db;

-- Switch to a database
USE university_db;

-- Show all tables in current database
SHOW TABLES;

-- Describe a table's structure
DESCRIBE students;

-- Exit MySQL shell
EXIT;
```

> **Code Explanation:**
> - `SHOW DATABASES` — lists all databases on the server
> - `CREATE DATABASE university_db` — creates a new empty database
> - `USE university_db` — switches the active database (all subsequent queries run against this one)
> - `SHOW TABLES` — lists all tables in the currently selected database
> - `DESCRIBE students` — shows the column names, data types, and constraints of the `students` table
> - `EXIT` — closes the MySQL command-line session

---

## Practical Session

### 🧪 Lab Experiment 23: Student Database Webpage

Since we don't have a live database server in the browser, we'll simulate database operations using JavaScript arrays and localStorage — demonstrating the concept of CRUD operations.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Database — CRUD Operations</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand">🗄️ Student Database System</span>
        </div>
    </nav>

    <div class="container my-4">
        <div class="row g-4">

            <!-- Add Form -->
            <div class="col-lg-4">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h5 class="mb-0" id="formTitle">Add Student</h5>
                    </div>
                    <div class="card-body">
                        <form id="studentForm">
                            <input type="hidden" id="editId">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="name" placeholder="Name" required>
                                <label for="name">Full Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="roll" placeholder="Roll" required>
                                <label for="roll">Roll Number</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="email" placeholder="Email" required>
                                <label for="email">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <select class="form-select" id="course" required>
                                    <option value="" disabled selected></option>
                                    <option>BCA</option>
                                    <option>BBA</option>
                                    <option>B.Tech</option>
                                </select>
                                <label for="course">Course</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="marks" placeholder="%" 
                                       min="0" max="100" step="0.01" required>
                                <label for="marks">Percentage</label>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary" id="submitBtn">Add Student</button>
                                <button type="button" class="btn btn-outline-secondary d-none" id="cancelBtn">Cancel Edit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Stats -->
                <div class="card shadow mt-3">
                    <div class="card-body">
                        <h6 class="text-primary">Statistics</h6>
                        <p class="mb-1">Total: <strong id="statTotal">0</strong></p>
                        <p class="mb-1">Average: <strong id="statAvg">0</strong>%</p>
                        <p class="mb-0">Highest: <strong id="statMax">0</strong>%</p>
                    </div>
                </div>
            </div>

            <!-- Student Table -->
            <div class="col-lg-8">
                <div class="card shadow">
                    <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Student Records</h5>
                        <div>
                            <input type="text" class="form-control form-control-sm d-inline-block" 
                                   id="searchInput" placeholder="Search..." style="width: 200px;">
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover mb-0">
                                <thead class="table-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Roll No</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                        <th>%</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="studentTable">
                                    <tr><td colspan="7" class="text-center text-muted py-4">No records found</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- SQL Reference -->
                <div class="card shadow mt-3">
                    <div class="card-header bg-secondary text-white">
                        <h6 class="mb-0">📝 Equivalent SQL Commands</h6>
                    </div>
                    <div class="card-body">
                        <pre id="sqlOutput" class="mb-0 bg-dark text-success p-3 rounded" 
                             style="font-size: 0.85em;">-- Perform an operation to see the SQL equivalent here</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    (function() {
        'use strict';

        // Load from localStorage or use sample data
        let students = JSON.parse(localStorage.getItem('students') || '[]');
        if (students.length === 0) {
            students = [
                { id: 1, name: 'Rahul Kumar', roll: '25BCA001', email: 'rahul@example.com', course: 'BCA', marks: 85.5 },
                { id: 2, name: 'Priya Sharma', roll: '25BCA002', email: 'priya@example.com', course: 'BCA', marks: 92.0 },
                { id: 3, name: 'Amit Patel', roll: '25BCA003', email: 'amit@example.com', course: 'BCA', marks: 65.75 }
            ];
            save();
        }

        let nextId = Math.max(0, ...students.map(function(s) { return s.id; })) + 1;

        function save() {
            localStorage.setItem('students', JSON.stringify(students));
        }

        function showSQL(sql) {
            document.getElementById('sqlOutput').textContent = sql;
        }

        function updateStats() {
            const total = students.length;
            const avg = total > 0 ? (students.reduce(function(s, st) { return s + st.marks; }, 0) / total).toFixed(2) : 0;
            const max = total > 0 ? Math.max(...students.map(function(s) { return s.marks; })).toFixed(2) : 0;
            document.getElementById('statTotal').textContent = total;
            document.getElementById('statAvg').textContent = avg;
            document.getElementById('statMax').textContent = max;
        }

        function render(data) {
            const tbody = document.getElementById('studentTable');
            if (!data) data = students;
            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted py-4">No records found</td></tr>';
            } else {
                tbody.innerHTML = data.map(function(s, i) {
                    const grade = s.marks >= 90 ? 'bg-primary' : s.marks >= 75 ? 'bg-success' : 
                                  s.marks >= 60 ? 'bg-warning text-dark' : 'bg-danger';
                    return '<tr>' +
                        '<td>' + (i + 1) + '</td>' +
                        '<td>' + escapeHtml(s.name) + '</td>' +
                        '<td><code>' + escapeHtml(s.roll) + '</code></td>' +
                        '<td>' + escapeHtml(s.email) + '</td>' +
                        '<td><span class="badge bg-secondary">' + escapeHtml(s.course) + '</span></td>' +
                        '<td><span class="badge ' + grade + '">' + s.marks + '%</span></td>' +
                        '<td>' +
                            '<button class="btn btn-sm btn-outline-primary me-1" onclick="editStudent(' + s.id + ')">Edit</button>' +
                            '<button class="btn btn-sm btn-outline-danger" onclick="deleteStudent(' + s.id + ')">Delete</button>' +
                        '</td>' +
                    '</tr>';
                }).join('');
            }
            updateStats();
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // CREATE
        document.getElementById('studentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const editId = document.getElementById('editId').value;
            const name = document.getElementById('name').value.trim();
            const roll = document.getElementById('roll').value.trim();
            const email = document.getElementById('email').value.trim();
            const course = document.getElementById('course').value;
            const marks = parseFloat(document.getElementById('marks').value);

            if (editId) {
                // UPDATE
                const student = students.find(function(s) { return s.id === parseInt(editId); });
                if (student) {
                    student.name = name;
                    student.roll = roll;
                    student.email = email;
                    student.course = course;
                    student.marks = marks;
                    showSQL("UPDATE students SET name='" + name + "', roll_no='" + roll + 
                            "', email='" + email + "', course='" + course + 
                            "', percentage=" + marks + " WHERE id=" + editId + ";");
                }
                cancelEdit();
            } else {
                // INSERT
                students.push({ id: nextId++, name: name, roll: roll, email: email, course: course, marks: marks });
                showSQL("INSERT INTO students (name, roll_no, email, course, percentage)\n" +
                        "VALUES ('" + name + "', '" + roll + "', '" + email + "', '" + course + "', " + marks + ");");
            }
            save();
            render();
            this.reset();
        });

        // READ / SEARCH
        document.getElementById('searchInput').addEventListener('input', function() {
            const q = this.value.toLowerCase();
            if (q === '') {
                render();
                showSQL("SELECT * FROM students;");
            } else {
                var filtered = students.filter(function(s) {
                    return s.name.toLowerCase().includes(q) || 
                           s.roll.toLowerCase().includes(q) || 
                           s.email.toLowerCase().includes(q);
                });
                render(filtered);
                showSQL("SELECT * FROM students\nWHERE name LIKE '%" + q + "%'\n   OR roll_no LIKE '%" + q + "%'\n   OR email LIKE '%" + q + "%';");
            }
        });

        // EDIT (populate form)
        window.editStudent = function(id) {
            var student = students.find(function(s) { return s.id === id; });
            if (!student) return;
            document.getElementById('editId').value = student.id;
            document.getElementById('name').value = student.name;
            document.getElementById('roll').value = student.roll;
            document.getElementById('email').value = student.email;
            document.getElementById('course').value = student.course;
            document.getElementById('marks').value = student.marks;
            document.getElementById('formTitle').textContent = 'Edit Student';
            document.getElementById('submitBtn').textContent = 'Update Student';
            document.getElementById('submitBtn').classList.replace('btn-primary', 'btn-warning');
            document.getElementById('cancelBtn').classList.remove('d-none');
            showSQL("SELECT * FROM students WHERE id = " + id + ";");
        };

        // DELETE
        window.deleteStudent = function(id) {
            if (confirm('Are you sure you want to delete this record?')) {
                students = students.filter(function(s) { return s.id !== id; });
                save();
                render();
                showSQL("DELETE FROM students WHERE id = " + id + ";");
            }
        };

        function cancelEdit() {
            document.getElementById('editId').value = '';
            document.getElementById('formTitle').textContent = 'Add Student';
            document.getElementById('submitBtn').textContent = 'Add Student';
            document.getElementById('submitBtn').classList.replace('btn-warning', 'btn-primary');
            document.getElementById('cancelBtn').classList.add('d-none');
        }
        document.getElementById('cancelBtn').addEventListener('click', cancelEdit);

        // Initial render
        render();
        showSQL("SELECT * FROM students;");
    })();
    </script>

</body>
</html>
```

> **Code Explanation:**
> - **localStorage simulation** — since browsers can't run a real MySQL server, we use `localStorage` to simulate a database. Data persists across page reloads.
> - **`JSON.parse(localStorage.getItem('students') || '[]')`** — loads the students array from localStorage; if nothing is stored yet, starts with an empty array
> - **Sample data** — if no data exists, three sample students (Rahul, Priya, Amit) are pre-loaded so the page isn't empty on first visit
> - **`save()` function** — converts the students array to JSON string and stores it in localStorage (simulates writing to a database)
> - **`showSQL(sql)` function** — displays the equivalent SQL command for every CRUD operation, so students can see what the real SQL query would look like
> - **`render(data)` function** — generates the HTML table rows from the students array; uses `escapeHtml()` to prevent XSS attacks by escaping special characters
> - **CREATE (form submit)** — when the form is submitted, either adds a new student (INSERT) or updates an existing one (UPDATE) based on whether `editId` has a value
> - **READ/SEARCH** — the search input filters students by name, roll number, or email using `Array.filter()` with `includes()` for substring matching
> - **UPDATE (editStudent)** — populates the form with the selected student's data and changes the button to "Update Student" mode
> - **DELETE (deleteStudent)** — asks for confirmation with `confirm()`, then removes the student using `Array.filter()` to exclude the deleted ID
> - **`escapeHtml()` function** — creates a temporary `<div>`, sets its `textContent` (safe), then reads `innerHTML` to get the escaped version — this prevents script injection

---

## Summary

| SQL Operation | Syntax |
|--------------|--------|
| Create Table | `CREATE TABLE name (columns...)` |
| Insert | `INSERT INTO table (cols) VALUES (vals)` |
| Select | `SELECT cols FROM table WHERE condition` |
| Update | `UPDATE table SET col=val WHERE condition` |
| Delete | `DELETE FROM table WHERE condition` |
| Join | `SELECT ... FROM t1 INNER JOIN t2 ON ...` |

---

*Day 40 of 55 | Unit 7 — Web Forms & Database | Web Technology (25BCA060)*
