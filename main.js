const url = 'https://fakestoreapi.com/products';

const prodImg = document.querySelectorAll('#prodImg');
const titleP = document.querySelectorAll('.text_p');
const toCart = document.querySelectorAll('.menu_btn');
const heart = document.querySelectorAll('#heart');

let p = 0;
fetch(url)
.then((res) => res.json())
.then((data) => {
    let x = 0;
    let heartType = heart[x].getAttribute('class');
    data.map((item)=>{
        let favs = getFav();
        favs.map((local)=>{
            if(local.liked.id == item.id){
                heart[x].setAttribute('class','fa-solid fa-heart')
            }  
        })
        prodImg[x].setAttribute('src',String(item.image));
        titleP[x].textContent = item.title;
        heart[x].addEventListener('click',(icon)=>{
            if( icon.target.className == 'fa-regular fa-heart'){
                setFav(item);
            }else if(icon.target.className == 'fa-solid fa-heart'){
                favs.map((elem)=>{
                    p = elem.liked.id;
                    if(p == item.id){
                    let z = favs.indexOf(elem);
                    unsetFav(item,z)    
                    }
                })
            }
            location.reload(true)
        })
        x += 1;
    })
})


function getFav(){
    return localStorage.getItem('liked') ? JSON.parse(localStorage.getItem('liked')) : [];
}
function setFav(liked){
    let arrFav = 0;
    let item = {liked}
    let items = getFav('liked');
    items.map((e)=>{
        if(e.liked.id == item.liked.id){
            arrFav += 1;
        }
    })
    if(arrFav == 0){
        items.push(item);
    }
    localStorage.setItem('liked',JSON.stringify(items))
}
function unsetFav(liked,z){
    let arrFav = 0;
    let item = {liked}
    let items = getFav();
    localStorage.removeItem('liked');
    items.map((e)=>{
        if(e.liked.id == item.liked.id){
            arrFav += 1;
        }
    })
    if(arrFav != 0){   
        items.splice(z,1);
    }
    localStorage.setItem('liked',JSON.stringify(items))
}










function getProd(){
    return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
}

function setProd(key){
    let item = {key}
    let items = getProd('product');
    
    items.push(item);
    localStorage.setItem('product',JSON.stringify(items))
}