const url = 'https://fakestoreapi.com/products';

const prodImg = document.querySelectorAll('#prodImg');



fetch(url)
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    for(let i = 0; i< data.length;i++){
        prodImg[i].setAttribute('src', data[i].image);
    }
})