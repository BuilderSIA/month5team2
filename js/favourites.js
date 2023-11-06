// let inp = document.getElementById("inp");
// let elParent = document.querySelector(".card--body-child-1");

// function renderData(allData) {
//   allData.map((item) => {
//     let elCard = document.createElement("div");
//     elCard.setAttribute("class", "card-child");
//     elCard.innerHTML = `
//             <i class="bx bx-heart"></i>
//             <img class="tavar" src="${item.productImg}" alt="" />
//             <h2>${item.productName}</h2>
//             <h4>${item.productPrice} ₽</h4>
//             <p>${item.productDesc}</p>

//             <button class="child-btn">В корзину</button>
//         `;
//     elParent.appendChild(elCard);
//   });
// }
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










// let menuIcon = document.querySelector('#favourites-navbar-buttom');
// let navbar = document.querySelector('#menu-scroll-bar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// let sections = document.querySelectorAll('menu-scroll-bar');
// let navLinks = document.querySelectorAll('favourites-navbar-buttom');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id')

//         if(top >= offset && top < offset + height) {
//         }
//     })
//     // sticky header
//     let header = document.querySelector("header");

//     header.classList.toggle('sticky', window.scrollY > 500);

//     menuIcon.classList.remove('bx-x')
//     navbar.classList.remove('active')
// }

// let navBtn = document.getElementById('favourites-navbar-buttom')
// let menuScroll = document.getElementById('menu-scroll-bar')

//     navBtn.onclick = () => {
//      navBtn.classList.toggle('bx-x');
//      menuScroll.classList.toggle('active');
//  }

//  window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 100;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id')

//         if(top >= offset && top < offset + height) {
//         }
//     })
//     // sticky header
//     let header = document.querySelector("menu-scroll");

//     header.classList.toggle('sticky', window.scrollY > 500);

//     menuIcon.classList.remove('bx-x')
//     navbar.classList.remove('active')
// }

let url = "https://fakestoreapi.com/products";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let inp = document.getElementById("inp");
    let elParent = document.querySelector(".card--body-child-1");

    function renderData(data) {
      data.map((item) => {
        let elCard = document.createElement("div");
        elCard.setAttribute("class", "card-child");
        elCard.innerHTML = `
        <i class="fa-regular fa-heart fa-beat-fade" style="color: #000;"></i>
            <img class="tavar" src="${item.image}" alt="" />
            <h2>${item.title}</h2>
            <h4>${item.price} ₽</h4>
           
            <button class="child-btn">В корзину</button>
        `;
        elParent.appendChild(elCard);
      });
    }


    renderData(data);
    let arr = [];



    inp.addEventListener('input', () => {
      data.map((element) => {
        if (element.title.toLowerCase() === inp.value || element.title === inp.value || element.title.toUpperCase() === inp.value) {
          arr.push(element);
        }
      });
      console.log(arr);
      if (arr.length > 0) {
        elParent.innerHTML = "";
    
        renderData(arr);
      } else {
        elParent.innerHTML = "";
        renderData(data);
      }
    });
  })



  const heart = document.querySelector(".card--body-child-1")
  let a = JSON.parse(localStorage.getItem("liked")) || []
  heart.addEventListener("click", (e) =>{
      let likedProduct = e.target.closest(".fa-heart")
      if(likedProduct){
          if(likedProduct.toggleAttribute("true")){
              let s = likedProduct.style = `color:red` ;
              a.push(s)
              localStorage.setItem("liked", JSON.stringify(a))
          } else{
              likedProduct.style = `color:#000`
          }
      }})
