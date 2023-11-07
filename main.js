const url = 'https://fakestoreapi.com/products';

const prodImg = document.querySelectorAll('#prodImg');
const titleP = document.querySelectorAll('.text_p');
const toCart = document.querySelectorAll('.menu_btn');
const heart = document.querySelectorAll('#heart');

const redhrt = "fa-solid fa-heart";
const whitehrt = "fa-regular fa-heart";


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
            // console.log(data[i]);
            let heartType = h.target.getAttributeNode('class').value;
            if(heartType == "fa-regular fa-heart"){
                setFav(data[i])
            }else{
                
            }
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



function getProd(){
    return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
}

function setProd(key){
    let item = {key}
    let items = getProd('product');
    
    items.push(item);
    localStorage.setItem('product',JSON.stringify(items))
}