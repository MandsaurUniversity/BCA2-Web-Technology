# Lab 11: External CSS Styling

## Experiment
Write all the above styling in CSS in different files (.css) and link it to your webpage such that changes made in the CSS file are immediately reflected on the page. Group paragraphs into a single class and add styling information to the class in CSS.

## Objective
Learn to separate content (HTML) from presentation (CSS) by creating an external stylesheet, linking it to your HTML page, and using classes and IDs for targeted styling.

## Instructions
1. Open `index.html` and `style.css` in VS Code
2. Use the same Indian Festivals content from Lab 10 (see `content.md` for details)
3. Link the external stylesheet using `<link rel="stylesheet" href="style.css">` in the `<head>`
4. Create the following CSS structure:
   - **Class `.festival-para`** — common styles for all festival paragraphs (padding, margin, border-radius, line-height)
   - **IDs `#diwali`, `#holi`, `#navratri`, `#eid`, `#christmas`** — unique background color for each festival paragraph
   - **Classes `.highlight-bold`, `.highlight-italic`, `.highlight-underline`** — text formatting classes
   - **Color classes** — for specific text colors (e.g., `.text-red`, `.text-blue`, `.text-green`)
5. Apply multiple classes to elements as needed (e.g., `class="highlight-bold text-red"`)
6. Save both files and preview in Chrome — changes to `style.css` should reflect immediately on refresh

## Expected Output
A webpage that looks identical to Lab 10, but all styling comes from the external `style.css` file. No inline `style` attributes should be present in the HTML.

## Grading Criteria
- [ ] External CSS file created and linked correctly (3 marks)
- [ ] Class-based styling for paragraph groups (`.festival-para`) (3 marks)
- [ ] ID-based styling for individual festival sections (3 marks)
- [ ] Output matches Lab 10 styling (colors, bold, italic, underline) (3 marks)
- [ ] Clean, well-organized CSS and HTML code (3 marks)

**Total: 15 marks**

## Reference
See `2-Content/4-CSS/19-Introduction-to-CSS.md` in the course repository.
