// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle('dark-mode');
  
  // Update the button text
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }
});
