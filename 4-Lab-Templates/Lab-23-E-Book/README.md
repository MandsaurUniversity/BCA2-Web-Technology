# Lab 23: E-Book with Chapter Navigation

## Experiment
Create an e-book having the left side of the page name of the chapters and right side of the page the contents of the chapters clicked on the left side.

## Objective
Build a two-column layout e-book where clicking a chapter name in the left sidebar displays its content on the right side of the page.

## Instructions
1. Use the content from `content.md` for your e-book chapters
2. Create a two-column layout: **left sidebar (25%)** for chapter list, **right area (75%)** for chapter content
3. Clicking a chapter name in the left sidebar should display that chapter's content on the right
4. Only one chapter should be visible at a time
5. Highlight the currently active chapter in the sidebar
6. Style the e-book for readability (fonts, spacing, colors)

## Grading Criteria
- [ ] Left-right two-column layout (3 marks)
- [ ] At least 5 chapters with meaningful content (3 marks)
- [ ] Clicking a chapter shows correct content on the right (3 marks)
- [ ] Styling and readability (font, spacing, colors) (3 marks)
- [ ] Clean, well-organized code (3 marks)

**Total: 15 marks**

## Hints
- Use `display: none` and `display: block` to show/hide chapters
- Use `getElementsByClassName()` to hide all chapters, then show the selected one
- Use CSS `float` or `flexbox` for the two-column layout
- The `onclick` event on sidebar links triggers the chapter switch

## Reference
See `2-Content/5-JavaScript/` for DOM manipulation and event handling examples.
