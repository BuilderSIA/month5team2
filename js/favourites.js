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
        <i class="fa-solid fa-heart" style="color: #000000;"></i></i>
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
