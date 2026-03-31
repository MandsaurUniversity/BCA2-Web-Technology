# Lab 08: Frames Layout

## Experiment
Use frames such that the page is divided into 3 frames — 20% on left to show contents of pages, 60% in center to show body of page, remaining on right to show remarks.

## ⚠️ Deprecation Warning
> **Important:** The `<frameset>` and `<frame>` tags are **DEPRECATED in HTML5** and are not supported in modern web standards. They are included in this lab because they appear in the official BCA syllabus (25BCA060P). In modern web development, use `<iframe>` or CSS-based layouts instead.

## Objective
Learn to divide a webpage into multiple frames using `<frameset>` and `<frame>` tags. You will create a 3-column frame layout: navigation (20%), main content (60%), and remarks (20%).

## Instructions
1. Open `index.html` — it already contains the frameset structure
2. Edit `nav.html` — add navigation links targeting the center frame
3. Edit `main.html` — add the default content for the center frame
4. Edit `remarks.html` — add remarks/notes for the right frame
5. Use the content from `content.md` to fill all pages
6. Make sure navigation links use `target="content"` to load in the center frame
7. Save and preview in Chrome

## File Structure
```
Lab-08-Frames/
├── index.html      ← Frameset file (already provided)
├── nav.html        ← Left frame — navigation links
├── main.html       ← Center frame — main content
├── remarks.html    ← Right frame — remarks/notes
├── content.md      ← Source content
└── README.md       ← This file
```

## Expected Output
A browser window divided into 3 vertical sections: navigation links on the left (20%), main content in the center (60%), and remarks on the right (20%). Clicking a link in the left frame should update only the center frame.

## Grading Criteria
- [ ] Correct frameset structure with 20%-60%-20% columns (3 marks)
- [ ] Left frame with navigation links targeting the center frame (3 marks)
- [ ] Center frame with meaningful content that updates on link click (3 marks)
- [ ] Right frame with relevant remarks/notes (3 marks)
- [ ] Clean, readable, well-indented HTML code (3 marks)

**Total: 15 marks**

## Reference
See `2-Content/2-HTML-Fundamentals/13-Frames-and-Multimedia.md` in the course repository.
