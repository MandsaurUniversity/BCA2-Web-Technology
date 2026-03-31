# Dummy Content — BCA Semester II Class Timetable

Use the following timetable data to build your HTML table.

---

## Timetable Details
- **Programme:** Bachelor of Computer Applications (BCA)
- **Semester:** II
- **Academic Year:** 2025-26
- **Section:** A
- **Room:** Room 301 (Theory), Lab 1 (Web Tech Lab), Lab 2 (DBMS Lab)

---

## Time Slots

| Slot | Time |
|------|------|
| 1st Period | 9:00 AM – 10:00 AM |
| 2nd Period | 10:00 AM – 11:00 AM |
| Break | 11:00 AM – 11:15 AM |
| 3rd Period | 11:15 AM – 12:15 PM |
| Lunch | 12:15 PM – 1:15 PM |
| 4th Period | 1:15 PM – 2:15 PM |
| 5th Period | 2:15 PM – 3:15 PM |

---

## Subjects and Faculty

| Code | Subject | Faculty | Type |
|------|---------|---------|------|
| 25BCA060T | Web Technology | Prof. Priya Agarwal | Theory |
| 25BCA060P | Web Technology Lab | Prof. Priya Agarwal | Practical |
| 25BCA055T | Database Management Systems | Dr. Manoj Gupta | Theory |
| 25BCA055P | DBMS Lab | Dr. Manoj Gupta | Practical |
| 25BCA050T | Discrete Mathematics | Prof. Deepak Jain | Theory |
| 25BCA045T | Operating Systems | Prof. Amit Patel | Theory |
| 25BCA040T | Communication Skills | Prof. Rashmi Tiwari | Theory |

---

## Weekly Timetable

### Monday
| Time | Subject | Faculty | Room |
|------|---------|---------|------|
| 9:00 – 10:00 | Web Technology | Prof. Priya Agarwal | Room 301 |
| 10:00 – 11:00 | Discrete Mathematics | Prof. Deepak Jain | Room 301 |
| 11:00 – 11:15 | **Break** | — | — |
| 11:15 – 12:15 | Operating Systems | Prof. Amit Patel | Room 301 |
| 12:15 – 1:15 | **Lunch** | — | — |
| 1:15 – 2:15 | DBMS | Dr. Manoj Gupta | Room 301 |
| 2:15 – 3:15 | Communication Skills | Prof. Rashmi Tiwari | Room 301 |

### Tuesday
| Time | Subject | Faculty | Room |
|------|---------|---------|------|
| 9:00 – 10:00 | Discrete Mathematics | Prof. Deepak Jain | Room 301 |
| 10:00 – 11:00 | Communication Skills | Prof. Rashmi Tiwari | Room 301 |
| 11:00 – 11:15 | **Break** | — | — |
| 11:15 – 12:15 | Web Technology | Prof. Priya Agarwal | Room 301 |
| 12:15 – 1:15 | **Lunch** | — | — |
| 1:15 – 3:15 | **Web Technology Lab** (2 hours — use `rowspan="2"`) | Prof. Priya Agarwal | Lab 1 |

### Wednesday
| Time | Subject | Faculty | Room |
|------|---------|---------|------|
| 9:00 – 10:00 | Operating Systems | Prof. Amit Patel | Room 301 |
| 10:00 – 11:00 | Web Technology | Prof. Priya Agarwal | Room 301 |
| 11:00 – 11:15 | **Break** | — | — |
| 11:15 – 12:15 | DBMS | Dr. Manoj Gupta | Room 301 |
| 12:15 – 1:15 | **Lunch** | — | — |
| 1:15 – 2:15 | Discrete Mathematics | Prof. Deepak Jain | Room 301 |
| 2:15 – 3:15 | Communication Skills | Prof. Rashmi Tiwari | Room 301 |

### Thursday
| Time | Subject | Faculty | Room |
|------|---------|---------|------|
| 9:00 – 10:00 | DBMS | Dr. Manoj Gupta | Room 301 |
| 10:00 – 11:00 | Operating Systems | Prof. Amit Patel | Room 301 |
| 11:00 – 11:15 | **Break** | — | — |
| 11:15 – 12:15 | Discrete Mathematics | Prof. Deepak Jain | Room 301 |
| 12:15 – 1:15 | **Lunch** | — | — |
| 1:15 – 3:15 | **DBMS Lab** (2 hours — use `rowspan="2"`) | Dr. Manoj Gupta | Lab 2 |

### Friday
| Time | Subject | Faculty | Room |
|------|---------|---------|------|
| 9:00 – 10:00 | Communication Skills | Prof. Rashmi Tiwari | Room 301 |
| 10:00 – 11:00 | DBMS | Dr. Manoj Gupta | Room 301 |
| 11:00 – 11:15 | **Break** | — | — |
| 11:15 – 12:15 | Operating Systems | Prof. Amit Patel | Room 301 |
| 12:15 – 1:15 | **Lunch** | — | — |
| 1:15 – 2:15 | Web Technology | Prof. Priya Agarwal | Room 301 |
| 2:15 – 3:15 | Discrete Mathematics | Prof. Deepak Jain | Room 301 |

### Saturday
| Time | Subject | Faculty | Room |
|------|---------|---------|------|
| 9:00 – 10:00 | Web Technology | Prof. Priya Agarwal | Room 301 |
| 10:00 – 11:00 | DBMS | Dr. Manoj Gupta | Room 301 |
| 11:00 – 11:15 | **Break** | — | — |
| 11:15 – 12:15 | Discrete Mathematics | Prof. Deepak Jain | Room 301 |
| 12:15 – 1:15 | **Lunch** | — | — |
| 1:15 – 3:15 | **Web Technology Lab** (2 hours — use `rowspan="2"`) | Prof. Priya Agarwal | Lab 1 |

---

## Important Notes for Building the Table

### Using `colspan`
- The **Break** row should use `colspan` to span across all subject columns:
  ```html
  <td colspan="5" style="text-align: center;">Break (11:00 – 11:15)</td>
  ```
- The **Lunch** row should also use `colspan` similarly.

### Using `rowspan`
- Lab sessions (Web Technology Lab, DBMS Lab) run for 2 hours (2 time slots).
- Use `rowspan="2"` on the lab cell:
  ```html
  <td rowspan="2">Web Technology Lab<br>Prof. Priya Agarwal<br>Lab 1</td>
  ```
- The next row for that day should NOT have a cell for that column (since it's covered by rowspan).

### Table Border
Add a border to make the table visible:
```html
<table border="1" cellpadding="8" cellspacing="0">
```
