const url = 'https://fakestoreapi.com/products';

const prodImg = document.querySelectorAll('#prodImg');
const titleP = document.querySelectorAll('.text_p');
const toCart = document.querySelectorAll('.menu_btn');
const heart = document.querySelectorAll('#heart');

const redhrt = "fa-solid fa-heart";
const whitehrt = "fa-regular fa-heart";
let p = 0;

fetch(url)
.then((res) => res.json())
.then((data) => {
    // console.log(data);
    let x = 0;
    let heartType = heart[x].getAttribute('class');
    data.map((item)=>{
        let favs = getFav();
        favs.map((local)=>{
            if(local.liked.id == item.id){
                heart[x].setAttribute('class','fa-solid fa-heart')
            }  
        })
        // console.log(item);
        prodImg[x].setAttribute('src',String(item.image));
        titleP[x].textContent = item.title;
        heart[x].addEventListener('click',(icon)=>{
            
            setFav(item);
            
            
            
            
            
            // favs[x].map((local)=>{
            //     console.log(local);
            // })
            // if(){
            //     icon.srcElement.className = 'fa-solid fa-heart'
            // }
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
    // console.log(items);
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
// function unsetFav(liked){
//     let arrFav = 0;
//     let item = {liked}
//     let items = getFav('liked');
//     localStorage.removeItem('liked');
//     items.map((e)=>{
//         if(e.liked.id == item.liked.id){
//             arrFav += 1;
//         }
//     })
//     if(arrFav == 0){
//         items.splice(p,1);
//         console.log(items);
//     }
//     localStorage.setItem('liked',JSON.stringify(items))
    
// }










function getProd(){
    return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
}

function setProd(key){
    let item = {key}
    let items = getProd('product');
    
    items.push(item);
    localStorage.setItem('product',JSON.stringify(items))
}