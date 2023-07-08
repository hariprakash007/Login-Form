const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", validateLoginForm);

// function for validateform and it will be triggered when form is submitted
function validateLoginForm(event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errorMessage = document.getElementById("error");

  errorMessage.innerHTML = "";

  // Validate email:
  if (!validateEmail(email.value)) {
    errorMessage.innerHTML += "<p>Please enter a valid email address </p>";
    return;
  }

  // validate password :
  if (!validatePassword(password.value)) {
    errorMessage.innerHTML += "<p>Please enter a valid password.</p>";
    return;
  }

  alert("Login successfully");
}

// Email Validation Function :
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Validate Password :

function validatePassword(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  return (
    password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber
  );
}
