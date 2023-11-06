let inp = document.getElementById("inp");
let elParent = document.querySelector(".card--body-child-1");
const heart = document.getElementsByClassName('bx-heart')

const url = 'https://fakestoreapi.com/products';


fetch(url)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);

  let display = data.map((item) => {
        let elCard = document.createElement("div");
        elCard.setAttribute("class", "card-child");
        elCard.innerHTML = `
                <i class="bx bx-heart" id="heart"></i>
                <img class="tavar" src="${item.image}" alt="" />
                <p>${item.title}</p>
                <h4>${item.price} $</h4>
               
                <button class="child-btn">В корзину</button>
            `;
        elParent.appendChild(elCard);

      });
    })
// function renderData(data) {
//   
// renderData(allProducts);
// let arr = [];

// inp.addEventListener('keyup', () => {
//   allProducts.map((element) => {
//     if (element.productName.toLowerCase() === inp.value || element.productName === inp.value || element.productName.toUpperCase() === inp.value) {
//       arr.push(element);
//     }
//   });
//   console.log(arr);
//   if (arr.length > 0) {
//     elParent.innerHTML = "";

//     renderData(arr);
//   } else {
//     elParent.innerHTML = "";
//     renderData(allProducts);
//   }
// });

// for(let i = 0; i<heart.length;i++){
//   heart[i].addEventListener('click',(i)=>{
//     console.log(i);
//   })
//   // console.log(heart[i]);
// }

