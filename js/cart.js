const cart = () => {
    const buttonCart = document.querySelector('.button-cart');
    const modalCart = document.querySelector('.modal-cart');
    const close = modalCart.querySelector('.close');
    const modalBody = modalCart.querySelector('.modal-body');
    const clearCart = modalCart.querySelector('.clear-cart');
    const modalPrice = modalCart.querySelector('.modal-pricetag');

    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        cartArray.map((item) => {
            console.log(item)
            if (item.id === id) {
                item.count++;
            }
        })
        localStorage.setItem('cart', JSON.stringify(cartArray));
        renderCart(cartArray);
    }

    const decrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))

        for (var i = 0; i < cartArray.length; i++) {
            if (cartArray[i].id === id) {
                cartArray[i].count > 0 ? cartArray[i].count-- : cartArray[i].count = 0;
            }
        }
        const newCartArray = cartArray.filter((item) => {
            return item.count != 0;
        })

        localStorage.setItem('cart', JSON.stringify(newCartArray));
        renderCart(newCartArray);
    }


    const renderCart = (data) => {
        modalBody.innerHTML = "";
        let sumCart = 0;
        data.forEach(cartItem => {
            const cartElem = document.createElement('div');
            cartElem.classList.add('food-row');
            cartElem.innerHTML = `<span class="food-name">${cartItem.name}</span>
            <strong class="food-price">${cartItem.price * cartItem.count} ₽</strong>
            <div class="food-counter">
                <button class="counter-button btn-dec" data-index = "${cartItem.id}">-</button>
                <span class="counter">${cartItem.count}</span>
                <button class="counter-button btn-inc" data-index = "${cartItem.id}">+</button>
            </div>`
            modalBody.append(cartElem);
            sumCart += cartItem.price * cartItem.count;
        });
        modalPrice.innerText = `${sumCart} ₽`
    }

    modalBody.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('btn-inc')) {
            incrementCount(e.target.dataset.index)
        } else if (e.target.classList.contains('btn-dec')) {
            decrementCount(e.target.dataset.index)
        }
    })

    clearCart.addEventListener('click', () => {
        localStorage.removeItem('cart');
        modalBody.innerHTML = "";
        modalCart.classList.remove('is-open');
    })

    buttonCart.addEventListener('click', () => {
        if (localStorage.getItem('cart')) {
            renderCart(JSON.parse(localStorage.getItem('cart')));
        }
        modalCart.classList.add('is-open')
    })


    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open')
    })
}
cart()