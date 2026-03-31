# Dummy Content — Image Links

Use the following information to build your HTML pages. Insert images and make them clickable links.

---

## Page Title
Mandsaur University — Campus Gallery

## Images to Use

You can use the placeholder images below, or replace them with your own images saved in the `images/` folder.

### Image 1: University Campus Main Gate
- **Placeholder URL:** `https://placehold.co/600x400/1a5276/ffffff?text=Mandsaur+University+Main+Gate`
- **Alt Text:** "Main entrance gate of Mandsaur University campus"
- **Width:** 600
- **Height:** 400
- **Links to:** `page2.html`
- **Caption:** The grand entrance of Mandsaur University welcomes thousands of students every year.

### Image 2: Computer Laboratory
- **Placeholder URL:** `https://placehold.co/600x400/2e86c1/ffffff?text=Computer+Lab`
- **Alt Text:** "Computer laboratory at Department of Computer Applications"
- **Width:** 600
- **Height:** 400
- **Links to:** `page2.html`
- **Caption:** Our state-of-the-art computer lab equipped with 120 computers and high-speed internet.

### Image 3: Central Library
- **Placeholder URL:** `https://placehold.co/600x400/148f77/ffffff?text=Central+Library`
- **Alt Text:** "Central Library of Mandsaur University"
- **Width:** 600
- **Height:** 400
- **Links to:** `page2.html`
- **Caption:** The Central Library houses over 50,000 books and provides a quiet reading environment.

---

## Content for `page2.html` — About Mandsaur University

### Page Title
About Mandsaur University

### Paragraph 1
Mandsaur University, situated on the Rewas-Dewda Road in Mandsaur, Madhya Pradesh, was established under the Madhya Pradesh Niji Vishwavidyalaya Adhiniyam. The university is spread across a sprawling green campus and offers a wide range of undergraduate, postgraduate, and doctoral programmes in various disciplines including Science, Commerce, Arts, Engineering, Pharmacy, and Management.

### Paragraph 2
The university is known for its modern infrastructure, dedicated faculty, and strong industry connections. With a focus on holistic development, the university provides ample opportunities for sports, cultural activities, and skill development. The placement cell actively works to connect students with leading companies like TCS, Infosys, Wipro, and other IT firms.

### Paragraph 3
The Department of Computer Applications is one of the flagship departments, offering BCA, MCA, and various certificate programmes. The department emphasises practical learning through well-equipped laboratories and regular industry workshops.

### Back Link
Add a link at the bottom: "← Back to Campus Gallery" linking to `index.html`

---

## How to Make an Image a Link

Wrap the `<img>` tag inside an `<a>` tag:
```html
<a href="page2.html">
    <img src="https://placehold.co/600x400/1a5276/ffffff?text=Mandsaur+University+Main+Gate"
         alt="Main entrance gate of Mandsaur University campus"
         width="600" height="400">
</a>
```
