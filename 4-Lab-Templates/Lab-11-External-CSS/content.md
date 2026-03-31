# Lab 11: Content for External CSS Styling

Use the **same Indian Festivals content from Lab 10**, but this time apply all styling through an external CSS file (`style.css`) instead of inline styles.

---

## Festival Paragraphs

The text content for each paragraph is identical to Lab 10. Copy the paragraphs from Lab 10's `content.md` and apply styles using **classes and IDs** instead of inline `style` attributes.

---

## CSS Class & ID Reference

### Common Paragraph Class

| Class Name      | Purpose                                | CSS Properties to Set                             |
|-----------------|----------------------------------------|---------------------------------------------------|
| `.festival-para`| Common styles for all festival paragraphs | `padding`, `margin`, `border-radius`, `line-height`, `font-family` |

### Festival-Specific IDs

| ID            | Festival   | Background Color |
|---------------|------------|------------------|
| `#diwali`     | Diwali     | `#fff8e1`        |
| `#holi`       | Holi       | `#e8f5e9`        |
| `#navratri`   | Navratri   | `#fce4ec`        |
| `#eid`        | Eid        | `#e3f2fd`        |
| `#christmas`  | Christmas  | `#f3e5f5`        |

### Text Formatting Classes

| Class Name              | CSS Property                  | Example Usage                        |
|-------------------------|-------------------------------|--------------------------------------|
| `.highlight-bold`       | `font-weight: bold;`          | "Festival of Lights"                 |
| `.highlight-italic`     | `font-style: italic;`         | "Lakshmi Puja", "sheer khurma"       |
| `.highlight-underline`  | `text-decoration: underline;` | "diyas", "rangoli", "Ramadan"        |

### Text Color Classes

| Class Name     | Color   | Hex Code  | Used For                          |
|----------------|---------|-----------|-----------------------------------|
| `.text-red`    | Red     | `#e53935` | "Festival of Lights", "Christmas" |
| `.text-orange` | Orange  | `#ef6c00` | "diyas", "rangoli"                |
| `.text-purple` | Purple  | `#7b1fa2` | "Lakshmi Puja", "carol singing"   |
| `.text-blue`   | Blue    | `#1565c0` | "Festival of Colors"              |
| `.text-green`  | Green   | `#2e7d32` | "gulal", "Eid-ul-Fitr"            |
| `.text-maroon` | Maroon  | `#800000` | "Goddess Durga"                   |
| `.text-crimson`| Crimson | `#dc143c` | "Garba", "Dandiya"                |

---

## Suggested CSS Properties

Here are the CSS properties you should use in your `style.css` file:

```
background-color    — Set paragraph background colors
color               — Change text color
font-weight         — Make text bold (bold, normal)
font-style          — Make text italic (italic, normal)
text-decoration     — Underline text (underline, none)
padding             — Inner spacing (e.g., 15px 20px)
margin              — Outer spacing (e.g., 15px 0)
border-radius       — Rounded corners (e.g., 8px)
font-family         — Font choice (e.g., 'Segoe UI', Tahoma, sans-serif)
line-height         — Line spacing (e.g., 1.8)
```

---

## HTML Structure Example

```html
<p id="diwali" class="festival-para">
    Diwali, also known as the
    <span class="highlight-bold text-red">Festival of Lights</span>,
    is one of the most celebrated festivals in India. Families decorate
    their homes with
    <span class="highlight-underline text-orange">diyas</span>
    (oil lamps) and create beautiful
    <span class="highlight-underline text-orange">rangoli</span>
    patterns...
</p>
```

---

## Tips

1. **Combining Classes:** You can apply multiple classes to a single element:
   ```html
   <span class="highlight-bold text-red">Festival of Lights</span>
   <span class="highlight-italic highlight-underline">Holika Dahan</span>
   ```

2. **Testing Changes:** After editing `style.css`, simply refresh the browser (Ctrl+R) to see the changes reflected on the page.

3. **No Inline Styles:** Your final `index.html` should have **zero** `style="..."` attributes. All styling must come from `style.css`.
