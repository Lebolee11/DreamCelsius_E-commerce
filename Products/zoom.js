// Add Click Event to Each Product Card
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    // Add the 'zoom' class to the clicked card
    card.classList.add('zoom');

    // Remove the 'zoom' effect after a short delay
    setTimeout(() => {
      card.classList.remove('zoom');
    }, 1000); // 1000ms (1 second) delay for zoom effect
  });
});

// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button depending on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { // Show button after scrolling down 300px
    scrollToTopBtn.style.opacity = '1';
    scrollToTopBtn.style.visibility = 'visible';
  } else {
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.visibility = 'hidden';
  }
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
});
