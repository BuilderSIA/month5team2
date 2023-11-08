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
    let favs = getFav('liked');
    
    

    for(let i= 0;i<data.length;i++){
        
       favs.map((e)=>{
        if(e.liked.id != undefined){
            if(data[i].id == e.liked.id){
                heart[i].setAttribute('class',"fa-solid fa-heart")
            }
        }
       })
      
        
        prodImg[i].setAttribute('src',data[i].image);

        titleP[i].innerHTML = data[i].title;
        // console.log(toCart[i]);

        heart[i].addEventListener('click',(h)=>{
            
            let heartType = h.target.getAttributeNode('class').value;

            if(heartType == "fa-regular fa-heart"){
                setFav(data[i])
            }
            // else{
            //     favs.map((el)=>{
            //         if(el.liked.id == data[i].id){
            //             p = favs.indexOf(el);
            //             unsetFav(data[i])
                        
            //             // console.log(p);
            //         }
            //     })
            // }
            location.reload(true)
        })
        

    }
    
    
    
})


function getFav(){
    return localStorage.getItem('liked') ? JSON.parse(localStorage.getItem('liked')) : [];
}

function setFav(liked){
    let arrFav = 0;
    let item = {liked}
    let items = getFav();
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