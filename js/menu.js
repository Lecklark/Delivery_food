<<<<<<< Updated upstream
const cardsMenu = document.querySelector('.cards-menu');

const changeTitle = (restaurant) => {
    const restaurantTitle = document.querySelector('.restaurant-title');
    restaurantTitle.textContent = `${restaurant.name}`;
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    cardInfo.innerHTML = `<div class="rating">
${restaurant.stars}
</div>
<div class="price">От ${restaurant.price} ₽</div>
<div class="category">${restaurant.description}</div>`
}


const renderItems = (data) => {
    data.forEach((item) => {
        const card = document.createElement('div');
        console.log(item)
        card.classList.add('card')
        card.innerHTML = `<img src="${item.image}" alt="${item.name}" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">${item.name}</h3>
            </div>
            <!-- /.card-heading -->
            <div class="card-info">
                <div class="ingredients">${item.description}
                </div>
            </div>
            <div class="card-buttons">
                <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">${item.price} ₽</strong>
            </div>
        </div>`
        cardsMenu.append(card)
    });
}

if (localStorage.getItem('restaurant')) {
    const restaurant = JSON.parse(localStorage.getItem('restaurant'));

    changeTitle(restaurant);

    fetch(`../db/${restaurant.products}`)
        .then((response) => response.json())
        .then((data) => {
            renderItems(data)
        })
        .catch((error) =>
            console.log(error))
} else {
    window.location.href = '/'
}
=======
const restourant = "tanuki"

const renderItems = (data) => {
    console.log(data);
}

fetch(`../db/${restourant}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
>>>>>>> Stashed changes
