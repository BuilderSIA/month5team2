const list = document.getElementById('pro__list')
const user = document.querySelector('.pro__header-nav-user')



const url = 'https://fakestoreapi.com/products'


fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    let products = data.map((item) => {
        console.log(item);
        return `
        <li class="pro__main-list-item">
            <img src="/images/like.svg" class="pro__main-list-item-like">
            <img src="${item.image}" width="70%" height="180">
            <h3 class="pro__main-list-item-price">${item.price}</h3>
            <h3 class="pro__main-list-item-title">${item.title}</h3>
            <button>В корзину</button>
        </li>
        `
    })


    products = products.join(' ')
    list.innerHTML = products

})