
const elem = (el) => document.querySelector(el);

pizzaJson.map((item, index)=>{
    let pizzaitem = elem('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaitem
    pizzaitem.querySelector('.pizza-item--img img').src = item.img
    pizzaitem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaitem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaitem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaitem.querySelector('a').addEventListener('click', (e) =>{
        e.preventDefault()
        elem('.pizzaWindowArea').style.display = "flex"
        elem('.pizzaBig img').src = item.img
        elem('.pizzaInfo h1').innerHTML = item.name
        elem('.pizzaInfo--desc').innerHTML = item.description
        elem('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
        elem('.pizzaInfo--cancelButton').addEventListener('click', (e) =>{
            elem('.pizzaWindowArea').style.display = "none"
        })
    })
    console.log(pizzaitem);
    console.log(item, index);

    elem('.pizza-area').append(pizzaitem);
})