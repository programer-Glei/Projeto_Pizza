
pizzaJson.map((item, index)=>{
    let pizzaitem = document.querySelector('.models .pizza-item').cloneNode(true);

    // preencher as informações em pizzaitem

    document.querySelector('.pizza-area').append(pizzaitem);
})