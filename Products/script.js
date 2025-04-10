// Open the modal when the Login/Signup button is clicked
document.querySelector('.login-btn').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'block';
});

// Close the modal when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    document.getElementById('loginModal').style.display = 'none';
  }
});

