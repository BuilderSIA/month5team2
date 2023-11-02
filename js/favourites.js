let inp = document.getElementById("inp");
let elParent = document.querySelector(".card--body-child-1");

function renderData(allData) {
  allData.map((item) => {
    let elCard = document.createElement("div");
    elCard.setAttribute("class", "card-child");
    elCard.innerHTML = `
            <i class="bx bx-heart"></i>
            <img class="tavar" src="${item.productImg}" alt="" />
            <h2>${item.productName}</h2>
            <h4>${item.productPrice} ₽</h4>
            <p>${item.productDesc}</p>
            <img class="rating" src="./img/rating.png" alt="" />
            <button class="child-btn">В корзину</button>
        `;
    elParent.appendChild(elCard);
    // console.log(item.productPrice);
  });
}
renderData(allProducts);

let arr = [];

inp.addEventListener("input", () => {
  allProducts.map((element) => {
    if (element.productName === inp.value) {
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
