// Initialize an empty cart array to store multiple items
let cart = [];

// Function to add toys to the cart
function addToCart(name, price) {
    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // If the item exists, increase its quantity
        existingItem.quantity += 1;
    } else {
        // If it's a new item, add it to the cart with a quantity of 1
        cart.push({ name, price, quantity: 1 });
    }

    alert(`${name} has been added to your cart!`);
    localStorage.setItem('cart', JSON.stringify(cart));  // Save the updated cart in local storage
}

// Load cart items from local storage (for cart.html page)
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    displayCartItems();
}

// Function to display items in the cart and calculate total price
function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    let totalPrice = 0;
    cartItemsDiv.innerHTML = '';

    // Loop through cart items and display each with its price and quantity
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name} (x${item.quantity}): $${item.price * item.quantity}</p>`;
        totalPrice += item.price * item.quantity;  // Multiply the price by quantity for the total
    });

    document.getElementById('total-price').textContent = totalPrice;
}

// Clear cart function to reset the cart and total price
function clearCart() {
    cart = [];
    localStorage.removeItem('cart');  // Remove cart from local storage
    displayCartItems();
}

// Automatically load the cart when the cart page is opened
if (document.getElementById('cart-items')) {
    loadCart();
}
