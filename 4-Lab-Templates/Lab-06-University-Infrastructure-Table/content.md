# Dummy Content — Mandsaur University Infrastructure

Use the following infrastructure details to build your table-based layout page. Each item should be a row in your table with an image on one side and a description on the other.

---

## Page Title
Mandsaur University — Campus Infrastructure

## Page Introduction
Mandsaur University, located on the Rewas-Dewda Road in Mandsaur, Madhya Pradesh, boasts a modern campus with world-class infrastructure. Below is an overview of our key facilities that provide students with an excellent learning environment.

---

## Infrastructure Items

### 1. Main Academic Building
- **Placeholder Image:** `https://placehold.co/300x200/2c3e50/ffffff?text=Academic+Building`
- **Alt Text:** "Main Academic Building of Mandsaur University"
- **Capacity:** 40 classrooms across 3 floors
- **Description:** The Main Academic Building is the heart of Mandsaur University's academic activities. Spread across three floors, it houses 40 spacious classrooms equipped with projectors and smart boards. The building also accommodates the central library wing on the ground floor, faculty chambers, and a conference room. The architecture combines modern design with energy-efficient features including solar panels and rainwater harvesting.
- **Key Facilities:** Smart classrooms, Wi-Fi connectivity, elevator access, power backup

### 2. Computer Science Laboratory
- **Placeholder Image:** `https://placehold.co/300x200/2980b9/ffffff?text=Computer+Lab`
- **Alt Text:** "Computer Science Laboratory with modern computers"
- **Capacity:** 120 computers across 3 labs
- **Description:** The Computer Science Laboratory is a state-of-the-art facility housing over 120 high-performance computers. The lab is divided into three sections — Lab 1 for web development, Lab 2 for database and programming, and Lab 3 for advanced computing. Each workstation is equipped with the latest software tools including VS Code, MySQL, Python, and various web development frameworks. The lab provides 24/7 internet access with 100 Mbps leased-line connectivity.
- **Key Facilities:** Air-conditioned, UPS backup, licensed software, individual workstations

### 3. Central Library
- **Placeholder Image:** `https://placehold.co/300x200/27ae60/ffffff?text=Central+Library`
- **Alt Text:** "Central Library reading hall"
- **Capacity:** Reading hall for 200 students
- **Description:** The Central Library is a treasure trove of knowledge with a collection of over 50,000 books, 500 journals, and access to digital databases like IEEE, Springer, and NPTEL. The library features a spacious reading hall that can accommodate 200 students simultaneously. A dedicated digital section provides access to e-books and online resources. The library operates from 8:00 AM to 8:00 PM on all working days, with extended hours during examination periods.
- **Key Facilities:** Digital catalogue, book bank scheme, reading hall, photocopying services

### 4. Auditorium
- **Placeholder Image:** `https://placehold.co/300x200/8e44ad/ffffff?text=Auditorium`
- **Alt Text:** "University Auditorium with stage and seating"
- **Capacity:** 500 seats
- **Description:** The university auditorium is a magnificent venue for academic events, cultural programmes, guest lectures, and convocation ceremonies. With a seating capacity of 500, the auditorium is equipped with professional audio-visual systems, a spacious stage, green rooms for performers, and comfortable cushioned seating. The air-conditioned hall hosts the annual TechVista technical symposium, inter-college competitions, and various workshops throughout the year.
- **Key Facilities:** Audio-visual system, stage lighting, green rooms, air conditioning

### 5. Boys Hostel
- **Placeholder Image:** `https://placehold.co/300x200/e67e22/ffffff?text=Boys+Hostel`
- **Alt Text:** "Boys Hostel building at Mandsaur University"
- **Capacity:** 300 rooms
- **Description:** The Boys Hostel provides comfortable accommodation for outstation students in 300 well-furnished rooms. Each room is equipped with a bed, study table, chair, and wardrobe. The hostel features a spacious dining hall (mess) serving nutritious vegetarian meals, a common room with television, indoor games facilities including table tennis and carrom, and a gymnasium. Wi-Fi connectivity is available in all rooms, and the hostel is monitored by 24/7 security and CCTV surveillance.
- **Key Facilities:** Mess facility, gymnasium, Wi-Fi, 24/7 security, laundry service

### 6. Girls Hostel
- **Placeholder Image:** `https://placehold.co/300x200/e74c3c/ffffff?text=Girls+Hostel`
- **Alt Text:** "Girls Hostel building at Mandsaur University"
- **Capacity:** 250 rooms
- **Description:** The Girls Hostel provides a safe, secure, and comfortable living environment for female students in 250 well-furnished rooms. The hostel has a dedicated warden and round-the-clock security with CCTV surveillance at all entry and exit points. Facilities include a modern mess serving hygienic meals, a common room with television and indoor games, a reading room for quiet study, and a medical room with first-aid facilities. The hostel also has a beautiful garden area for relaxation.
- **Key Facilities:** 24/7 security with CCTV, mess, common room, medical facility, garden

### 7. Sports Complex
- **Placeholder Image:** `https://placehold.co/300x200/16a085/ffffff?text=Sports+Complex`
- **Alt Text:** "Sports Complex with cricket ground and basketball court"
- **Capacity:** Multiple outdoor and indoor facilities
- **Description:** The Sports Complex at Mandsaur University caters to the physical fitness and sports aspirations of students. The outdoor facilities include a cricket ground, football field, basketball court, volleyball court, and a 200-metre running track. The indoor section features badminton courts, table tennis tables, a chess room, and a fully-equipped gymnasium with modern fitness equipment. The university teams regularly participate in inter-university tournaments organised by Rani Durgavati Vishwavidyalaya and the Association of Indian Universities.
- **Key Facilities:** Cricket ground, basketball court, gymnasium, indoor games, running track

### 8. Cafeteria
- **Placeholder Image:** `https://placehold.co/300x200/f39c12/ffffff?text=Cafeteria`
- **Alt Text:** "University Cafeteria with seating area"
- **Capacity:** 150 seating
- **Description:** The university cafeteria is a popular hangout spot for students, offering a wide variety of affordable and hygienic food options. The menu includes Indian staples like dal-rice, roti-sabzi, and rajma-chawal, along with snacks such as samosa, kachori, sandwiches, and maggi. Chinese options like noodles and manchurian are also available. The cafeteria operates from 8:00 AM to 6:00 PM and provides a comfortable air-cooled seating area where students can eat, socialise, and take a break between classes.
- **Key Facilities:** Affordable prices, vegetarian menu, air-cooled seating, hygienic kitchen

---

## Table Layout Structure

Use this structure for your HTML:
```
+------------------+----------------------------------------+
| Image            | Name, Description, Capacity, Facilities|
+------------------+----------------------------------------+
| Image            | Name, Description, Capacity, Facilities|
+------------------+----------------------------------------+
| ...              | ...                                    |
+------------------+----------------------------------------+
```

### Example HTML Row:
```html
<tr>
    <td>
        <img src="https://placehold.co/300x200/2c3e50/ffffff?text=Academic+Building"
             alt="Main Academic Building of Mandsaur University"
             width="300" height="200">
    </td>
    <td>
        <h3>Main Academic Building</h3>
        <p><strong>Capacity:</strong> 40 classrooms across 3 floors</p>
        <p>The Main Academic Building is the heart of Mandsaur University's academic activities...</p>
        <p><strong>Key Facilities:</strong> Smart classrooms, Wi-Fi connectivity, elevator access, power backup</p>
    </td>
</tr>
```
