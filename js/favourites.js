let inp = document.getElementById("inp");
let elParent = document.querySelector(".card--body-child-1");

function getFav(){
  return localStorage.getItem('liked') ? JSON.parse(localStorage.getItem('liked')) : [];
}








function renderData(data) {
  data = getFav()
  // console.log(data);
  data.map((item) => {
    let elCard = document.createElement("div");
    elCard.setAttribute("class", "card-child");
    elCard.innerHTML = `
            <i class="bx bx-heart"></i>
            <img class="tavar" src="${item.liked.image}" alt="" />
            <p>${item.liked.title}</p>
            <h4>${item.liked.price} ₽</h4>
           
            <button class="child-btn">В корзину</button>
        `;
    elParent.appendChild(elCard);
  });
}
renderData(allProducts);
let arr = [];

inp.addEventListener('keyup', () => {
  allProducts.map((element) => {
    if (element.productName.toLowerCase() === inp.value || element.productName === inp.value || element.productName.toUpperCase() === inp.value) {
      arr.push(element);
    }
  });
  console.log(arr);
  if (arr.length > 0) {
    elParent.innerHTML = "";

    renderData(arr);
  } else {
    elParent.innerHTML = "";
    renderData(allProducts);
  }
});









function getProd(){
  return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];
}

function setProd(key){
  let item = {key}
  let items = getProd('product');
  
  items.push(item);
  localStorage.setItem('product',JSON.stringify(items))
}