// ======================
// MOCK PRODUCT DATA (Phase 2)
// ======================
// In a real app, this would come from an API. For learning, we use hardcoded data.
// NOTE: Prices are stored as NUMBERS (not strings) for easy filtering/comparison
const products = [
  {
    id: 1,
    name: "Premium Clumping Litter",
    category: "litter",
    price: 24.99,
    shop: "Chewy",
    image: "https://via.placeholder.com/300x200?text=Cat+Litter",
    link: "https://www.chewy.com" // Placeholder link (real affiliate links would require approval)
  },
  {
    id: 2,
    name: "Grain-Free Dry Cat Food",
    category: "dry-food",
    price: 32.50,
    shop: "Petsmart",
    image: "https://via.placeholder.com/300x200?text=Dry+Cat+Food",
    link: "https://www.petsmart.com"
  },
  {
    id: 3,
    name: "Wild-Caught Wet Cat Food",
    category: "wet-food",
    price: 2.99,
    shop: "Amazon",
    image: "https://via.placeholder.com/300x200?text=Wet+Cat+Food",
    link: "https://www.amazon.com"
  },
  {
    id: 4,
    name: "Odor-Locking Litter",
    category: "litter",
    price: 19.99,
    shop: "Amazon",
    image: "https://via.placeholder.com/300x200?text=Litter+2",
    link: "https://www.amazon.com"
  },
  {
    id: 5,
    name: "Salmon & Rice Dry Food",
    category: "dry-food",
    price: 28.75,
    shop: "Chewy",
    image: "https://via.placeholder.com/300x200?text=Dry+Food+2",
    link: "https://www.chewy.com"
  },
  {
    id: 6,
    name: "Chicken Pâté Wet Food",
    category: "wet-food",
    price: 3.49,
    shop: "Petsmart",
    image: "https://via.placeholder.com/300x200?text=Wet+Food+2",
    link: "https://www.petsmart.com"
  }
];

// ======================
// DOM ELEMENTS (Phase 2)
// ======================
const productsContainer = document.getElementById('products-container');
const categorySelect = document.getElementById('category');
const priceInput = document.getElementById('max-price');

// ======================
// RENDER FUNCTION (Phase 2)
// ======================
function renderProducts() {
  // 1. Get current filter values
  const selectedCategory = categorySelect.value;
  const maxPrice = parseFloat(priceInput.value) || Infinity; // Handle empty input

  // 2. Filter products based on selections
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  // 3. Clear container and handle "no results"
  productsContainer.innerHTML = '';
  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = `
      <p class="no-results">😺 No products match your filters. Try adjusting category or price.</p>
    `;
    return;
  }

  // 4. Generate and append product cards
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <a href="${product.link}" target="_blank" rel="noopener" class="product-link">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="shop">Available at: ${product.shop}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
      </a>
    `;
    productsContainer.appendChild(productCard);
  });
}

// ======================
// EVENT LISTENERS (Phase 2)
// ======================
categorySelect.addEventListener('change', renderProducts);
priceInput.addEventListener('input', renderProducts); // 'input' for live feedback as user types
// ======================
// INITIAL RENDER (Phase 2)
// ======================
renderProducts(); // Show all products on page load