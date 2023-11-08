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





// =============================================================================================
const profile = document.querySelector('.profile')
const xmark = document.querySelector('.fa-xmark')
const modal_cont = document.querySelector('.container__modal')


profile.addEventListener('click', () => {
    // console.log(profile);
    modal_cont.style.display = 'block'
})
xmark.addEventListener('click', () => {
    modal_cont.style.display = 'none'
})