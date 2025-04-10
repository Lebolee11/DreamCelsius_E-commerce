// Open modal on "Login/Signup" button click
document.querySelector('.login-btn').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'block';
});

// Close modal on close button click
document.querySelector('.close-btn').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'none';
});

// Toggle between Login and Signup forms
document.getElementById('signupLink').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('signup-section').classList.remove('hidden');
});

document.getElementById('loginLink').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  document.getElementById('signup-section').classList.add('hidden');
  document.getElementById('login-section').classList.remove('hidden');
});

// Close modal when clicking outside modal content
window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    document.getElementById('loginModal').style.display = 'none';
  }
});

