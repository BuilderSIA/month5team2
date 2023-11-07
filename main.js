const url = 'https://fakestoreapi.com/products';

const prodImg = document.querySelectorAll('#prodImg');
const titleP = document.querySelectorAll('.text_p');


fetch(url)
.then((res) => res.json())
.then((data) => {
    
    for(let i= 0;i<data.length;i++){
        
        prodImg[i].setAttribute('src',data[i].image);

        titleP[i].innerHTML = data[i].title;

    }
})


function getProd(){
    return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
}

function setProd(key){
    let item = {key}
    let items = getProd('product');
    items.push(item);
    localStorage.setItem('product',JSON.stringify(items))
}