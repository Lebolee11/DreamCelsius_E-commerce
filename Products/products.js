let currentPage = 1;
const itemsPerPage = 4; // Number of products per load

// Function to load products
function loadProducts(page) {
  fetch('products.json') // Path to your JSON file
    .then(response => response.json())
    .then(data => {
      const productGrid = document.getElementById('product-grid');
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = page * itemsPerPage;

      const productsToShow = data.products.slice(startIndex, endIndex);

      productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
          <img src="${product.image}" alt="Product Image">
          <p>${product.name}</p>
          <h3>${product.price}</h3>
          <button class="add-to-cart">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
      });

      // Hide the "Load More" button if there are no more products
      if (endIndex >= data.products.length) {
        document.getElementById('load-more-btn').style.display = 'none';
      }
    })
    .catch(error => console.error('Error loading products:', error));
}

// Event listener for the "Load More" button
document.getElementById('load-more-btn').addEventListener('click', () => {
  currentPage += 1;
  loadProducts(currentPage);
});

// Load the first page of products when the page loads
loadProducts(currentPage);
