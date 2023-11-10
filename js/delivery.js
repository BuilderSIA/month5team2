const url = 'https://fakestoreapi.com/products';


async function sumPrice(uri) {
  const url = uri

  const options = {
    method: "GET",
    headers: {
      "Content-Language": "en",
      "Content-Type": "application/json"
    }
  }

  await fetch(uri, options)
    .then(response => response.json())
    .then(response => {
      const data = response

      const posts = []
      const html = []

      data.forEach(item => {

        const local = {
          title: '',
          price: '',
          description: '',
          category: '',
          image: '',
          id: ''
        }

        local.title = item.title
        local.category = item.category
        local.description = item.description
        local.price = item.price
        local.image = item.image
        local.id = item.id

        const li = document.createElement("li")
        const p = document.createElement("p")
        const p2 = document.createElement("p")

        li.classList.add("products-unique-item")
        p.classList.add("products-unique-title")
        p2.classList.add("products-unique-price")

        p.innerHTML = local.title
        p2.innerHTML = local.price

        li.appendChild(p)
        li.appendChild(p2)

        li.style.display = "flex"
        li.style.alignItems = "center"
        li.style.justifyContent = "space-between"
        p.style.maxWidth = "88%"
        p.style.width = "100%"

        html.push(li)

        posts.push(local)
      })

      const object = posts.splice(0, 5)
      const ul = document.querySelector(".products-unique-list")
      const price = document.querySelector(".main-section-box2-productPrice-list1")

      const array = html.splice(0, 5)
      let number = ""

    //   object.forEach(item => {
    //     number += toString(item.price)
    //   })

      price.innerHTML = number

      array.forEach(item => {
        ul.appendChild(item)
      })

      localStorage.setItem("Objects", JSON.stringify(object))
    })
}


async function getCallbacks() {
  await sumPrice(url)
}
getCallbacks()