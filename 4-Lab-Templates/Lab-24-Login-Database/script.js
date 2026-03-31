// ============================================================
// Lab 24: Login System with localStorage
// ============================================================

// ==================== REGISTRATION ====================
function registerUser() {
    // TODO: Get form values
    // var name = document.getElementById("regName").value;
    // var email = document.getElementById("regEmail").value;
    // var phone = document.getElementById("regPhone").value;
    // var password = document.getElementById("regPassword").value;
    // var confirmPassword = document.getElementById("regConfirmPassword").value;
    // var course = document.getElementById("regCourse").value;

    // TODO: Validate inputs (all required fields filled)

    // TODO: Check if passwords match

    // TODO: Check if email already exists in localStorage
    // var users = JSON.parse(localStorage.getItem("users")) || [];

    // TODO: Add new user to users array

    // TODO: Save updated users array to localStorage
    // localStorage.setItem("users", JSON.stringify(users));

    // TODO: Show success message and redirect to login page
}

// ==================== LOGIN ====================
function loginUser() {
    // TODO: Get email and password from form
    // var email = document.getElementById("loginEmail").value;
    // var password = document.getElementById("loginPassword").value;

    // TODO: Retrieve users from localStorage
    // var users = JSON.parse(localStorage.getItem("users")) || [];

    // TODO: Check if email and password match any user
    // var foundUser = null;
    // for (var i = 0; i < users.length; i++) {
    //     if (users[i].email === email && users[i].password === password) {
    //         foundUser = users[i];
    //         break;
    //     }
    // }

    // TODO: If match found — store currentUser in localStorage, redirect to dashboard
    // var session = {
    //     name: foundUser.name,
    //     email: foundUser.email,
    //     phone: foundUser.phone,
    //     course: foundUser.course,
    //     loginTime: new Date().toLocaleString()
    // };
    // localStorage.setItem("currentUser", JSON.stringify(session));
    // window.location.href = "dashboard.html";

    // TODO: If no match — show error message
}

// ==================== DASHBOARD ====================
function loadDashboard() {
    // TODO: Check if currentUser exists in localStorage
    // var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // TODO: If no currentUser — redirect to login page
    // if (!currentUser) {
    //     window.location.href = "index.html";
    //     return;
    // }

    // TODO: Display user info on dashboard
    // document.getElementById("welcomeMessage").textContent = "Welcome, " + currentUser.name + "!";
    // document.getElementById("dashName").textContent = currentUser.name;
    // document.getElementById("dashEmail").textContent = currentUser.email;
    // document.getElementById("dashPhone").textContent = currentUser.phone;
    // document.getElementById("dashCourse").textContent = currentUser.course;
    // document.getElementById("dashLoginTime").textContent = currentUser.loginTime;
}

// ==================== LOGOUT ====================
function logoutUser() {
    // TODO: Remove currentUser from localStorage
    // localStorage.removeItem("currentUser");

    // TODO: Redirect to login page
    // window.location.href = "index.html";
}
