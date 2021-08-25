
const e = (el) => document.querySelector(el);

pizzaJson.map((item, index)=>{
    let pizzaitem = e('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaitem
    e('.pizza-item--img img').src = item.img
    console.log(pizzaitem);
    console.log(item, index);

    e('.pizza-area').append(pizzaitem);
})