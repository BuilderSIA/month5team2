const list = document.getElementById('pro__list');
const btn = document.getElementById('pro__btn');
const input = document.getElementById('pro__search');
const user = document.querySelector('.pro__header-nav-user');
const Cart = document.querySelectorAll('.pro__main-list-item-btn');
const heart = document.querySelectorAll('.pro__main-list-item-like');

console.log(Cart);
console.log(heart);


const url = 'https://fakestoreapi.com/products';


fetch(url)
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    let products = data.map((item) => {
        // console.log(item);
        return `
        <li class="pro__main-list-item">
            <img src="/images/like.svg" class="pro__main-list-item-like">
            <img src="${item.image}" width="70%" height="180">
            <h3 class="pro__main-list-item-price">${item.price}</h3>
            <h3 class="pro__main-list-item-title">${item.title}</h3>
            <button id="cartbtn" class="pro__main-list-item-btn">В корзину</button>
        </li>
        `
    })
    products = products.join(' ')
    list.innerHTML = products
    
    
    // for(let i= 0 ; i<toCart.length; i++){
    //     console.log(toCart[i]);
    //     toCart[i].addEventListener('click',(item)=>{
    //         console.log(item);
    //     })
    // }

    btn.addEventListener('click', () => {
        let products = data.map(function(item) {
            if(input.value === item.title) { 
                return `
                <li class="pro__main-list-item">
                    <img src="/images/like.svg" class="pro__main-list-item-like">
                    <img src="${item.image}" width="70%" height="180">
                    <h3 class="pro__main-list-item-price">${item.price}</h3>
                    <h3 class="pro__main-list-item-title">${item.title}</h3>
                    <button id="cartbtn" class="pro__main-list-item-btn">В корзину</button>
                </li>
                `
            }
        })
        products = products.join(' ')
        list.innerHTML = products
    })

})








// function getProd(){
//     return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
// }

// function setProd(key){
//     let item = {key}
//     let items = getProd('product');
    
//     items.push(item);
//     localStorage.setItem('product',JSON.stringify(items))
// }