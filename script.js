
const e = (el) => document.querySelector(el);

pizzaJson.map((item, index)=>{
    let pizzaitem = e('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaitem
    pizzaitem.querySelector('.pizza-item--img img').src = item.img
    pizzaitem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaitem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaitem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaitem.querySelector('a').addEventListener('click', (e) =>{
        e.preventDefault()
    })
    console.log(pizzaitem);
    console.log(item, index);

    e('.pizza-area').append(pizzaitem);
})