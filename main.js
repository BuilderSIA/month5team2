const url = 'https://fakestoreapi.com/products';

const prodImg = document.querySelectorAll('#prodImg');



fetch(url)
.then((res) => res.json())
.then((data) => {
    let itemImg = ''
    // console.log(data);
    let products = data.map((item) => {
        // console.log(item);
        
        itemImg = item.image;
        // 
        
    })
    for(let i = 0; i<prodImg.length;i++){
             
        prodImg[i].setAttribute('src',itemImg);
    }
})