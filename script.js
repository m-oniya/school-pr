
    const cartButton = document.getElementById('cart');
    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.getElementById('close-cart-btn');
    const cartItemsList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const checkoutButton = document.getElementById('checkout-btn');

    let cart = []; 


    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        updateCart();
    });

    closeCartButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });


    const addToCart = (name, price) => {
        const item = { name, price };
        cart.push(item);
        updateCart();
    };


    const updateCart = () => {

        cartCount.textContent = cart.length;

        cartItemsList.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} грн`;
            cartItemsList.appendChild(li);
        });
    };
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('h3').textContent;
            const price = card.getAttribute('data-price');
            addToCart(name, price);
        });
    });

    checkoutButton.addEventListener('click', () => {
        alert('Дякуємо за покупку!');
        cart = [];
        updateCart(); 
        closeCartModal();
    });
