// Handle wishlist logic
const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []; // Get existing wishlist or initialize empty array

// Add event listeners to all wishlist buttons
document.querySelectorAll('.add-to-wishlist').forEach(button => {
  button.addEventListener('click', (event) => {
    const productCard = event.target.closest('.product-card');
    const productId = productCard.dataset.id;
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('p').textContent;

    // Check if the product is already in the wishlist
    const existingItem = wishlist.find(item => item.id === productId);

    if (existingItem) {
      // Remove product from wishlist
      const index = wishlist.findIndex(item => item.id === productId);
      wishlist.splice(index, 1);
      event.target.textContent = "♡ Wishlist"; // Update button text
    } else {
      // Add product to wishlist
      wishlist.push({
        id: productId,
        name: productName,
        price: productPrice,
      });
      event.target.textContent = "✔ In Wishlist"; // Update button text
    }

    // Save updated wishlist to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Wishlist updated!');
  });
});
