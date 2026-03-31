// Lab 30: Bootstrap Form Validation
// Uses ES5 JavaScript for compatibility

(function() {
    'use strict';

    // Fetch the form
    var form = document.getElementById('registrationForm');

    // TODO: Add event listener for form submission
    // form.addEventListener('submit', function(event) {
    //     // Prevent default form submission
    //     event.preventDefault();
    //     event.stopPropagation();
    //
    //     // Custom validations
    //     // TODO: Validate phone number (exactly 10 digits)
    //     // var phone = document.getElementById('phone').value;
    //     // var phoneRegex = /^[0-9]{10}$/;
    //     // if (!phoneRegex.test(phone)) {
    //     //     document.getElementById('phone').setCustomValidity('Invalid phone');
    //     // } else {
    //     //     document.getElementById('phone').setCustomValidity('');
    //     // }
    //
    //     // TODO: Validate password match
    //     // var password = document.getElementById('password').value;
    //     // var confirmPassword = document.getElementById('confirmPassword').value;
    //     // if (password !== confirmPassword) {
    //     //     document.getElementById('confirmPassword').setCustomValidity('Mismatch');
    //     // } else {
    //     //     document.getElementById('confirmPassword').setCustomValidity('');
    //     // }
    //
    //     // TODO: Validate password strength (min 8 chars, 1 uppercase, 1 number)
    //     // var passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    //     // if (!passwordRegex.test(password)) {
    //     //     document.getElementById('password').setCustomValidity('Weak password');
    //     // } else {
    //     //     document.getElementById('password').setCustomValidity('');
    //     // }
    //
    //     // Add Bootstrap's was-validated class
    //     form.classList.add('was-validated');
    //
    //     // If form is valid, show success
    //     // if (form.checkValidity()) {
    //     //     alert('Registration successful! Welcome to Mandsaur University.');
    //     // }
    // });
})();
