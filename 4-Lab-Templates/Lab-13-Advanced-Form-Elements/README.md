# Lab 13: Advanced Form Elements

## Experiment
Add form elements such as radio buttons, checkboxes and password fields. Add a submit button.

## Objective
Learn to use advanced HTML form elements — radio buttons for single-choice selection, checkboxes for multi-choice selection, password fields for secure input, and action buttons (submit and reset).

## Instructions
1. Open `index.html` in VS Code
2. Refer to `content.md` for the complete form field specifications and sample data
3. Create an HTML form with the following field groups:
   - **Full Name** — text input
   - **Email** — email input
   - **Password & Confirm Password** — password inputs
   - **Gender** — radio buttons (Male, Female, Other)
   - **Course** — radio buttons (BCA, BBA, B.Com, B.Sc)
   - **Hobbies** — checkboxes (at least 8 options)
   - **Skills** — checkboxes (at least 6 options)
   - **Date of Birth** — date input
   - **Phone Number** — tel input
   - **Terms & Conditions** — single checkbox
   - **Buttons** — Submit and Reset
4. Radio buttons in the same group must share the same `name` attribute
5. Every field must have a corresponding `<label>`
6. Use `<fieldset>` and `<legend>` to group related fields
7. Save and preview in Chrome

## Expected Output
A comprehensive registration form with radio buttons, checkboxes, password fields, and submit/reset buttons — all properly labelled and grouped.

## Grading Criteria
- [ ] Radio buttons with proper `name` grouping for single selection (3 marks)
- [ ] Checkboxes with at least 6 options each for hobbies and skills (3 marks)
- [ ] Password and confirm password fields (3 marks)
- [ ] Submit and Reset buttons working correctly (3 marks)
- [ ] Clean, well-structured code with `<fieldset>`, `<legend>`, and `<label>` (3 marks)

**Total: 15 marks**

## Reference
See `2-Content/3-HTML5/14-HTML5-Semantic-Elements.md` in the course repository.
