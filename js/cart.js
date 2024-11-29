// Almacenamos los productos en el carrito en el almacenamiento local
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Función para actualizar el carrito
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // Actualiza el contador del carrito
}

// Función para añadir un producto al carrito
function addToCart(productId, productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el carrito en localStorage
    updateCart();
}

// Asignamos los eventos de añadir al carrito
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productId = button.getAttribute('data-product-id');
        const productName = button.getAttribute('data-product-name');
        const productPrice = parseFloat(button.getAttribute('data-product-price'));

        addToCart(productId, productName, productPrice);
    });
});

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', updateCart);
