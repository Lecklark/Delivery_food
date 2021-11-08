<<<<<<< Updated upstream
const cardsRestaurants = document.querySelector('.cards-restaurants');


const renderItems = (data) => {
    data.forEach((item) => {
        //console.log(item)
        const a = document.createElement('a');
        a.setAttribute('href', '/restaurant.html');
        a.classList.add('card');
        a.classList.add('card-restaurant');
        a.dataset.products = item.products;
        a.innerHTML = `<img src="${item.image}" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title">${item.name}</h3>
                <span class="card-tag tag">${item.time_of_delivery} мин</span>
            </div>
            <div class="card-info">
                <div class="rating">
                    ${item.stars}
                </div>
                <div class="price">От ${item.price} ₽</div>
                <div class="category">${item.kitchen}</div>
            </div>
        </div>`

        a.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem('restaurant', JSON.stringify(item))
            window.location.href = '/restaurant.html'
        })
        //console.log(a)
        cardsRestaurants.append(a);
    });
}



fetch('https://test-cd381-default-rtdb.firebaseio.com//db/partners.json')
    .then((response) => response.json())
    .then((data) => {

        renderItems(data)
    })
    .catch((error) =>
        console.log(error))
=======
const renderItems = (data) => {
    console.log(data);
}

fetch("../db/partners.json")
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
>>>>>>> Stashed changes
