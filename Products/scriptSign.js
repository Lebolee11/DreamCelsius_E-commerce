// Show Signup Form
document.getElementById('signupLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('signup-section').classList.remove('hidden');
});

// Show Login Form
document.getElementById('loginLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('signup-section').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
});
