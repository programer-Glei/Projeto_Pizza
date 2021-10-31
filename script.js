
let modalQt = 1
let cart = []
let modalKey = 0

const elem = (el) => document.querySelector(el);

pizzaJson.map((item, index)=>{
    let pizzaitem = elem('.models .pizza-item').cloneNode(true);
    // preencher as informações em pizzaitem
    pizzaitem.setAttribute('data-key', index)
    pizzaitem.querySelector('.pizza-item--img img').src = item.img
    pizzaitem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaitem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaitem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaitem.querySelector('a').addEventListener('click', (e) =>{
        e.preventDefault()
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQt = 1
        modalKey = key
        elem('.pizzaWindowArea').style.opacity = 0
        elem('.pizzaWindowArea').style.display = "flex"
        setTimeout(() =>{
            elem('.pizzaWindowArea').style.opacity = 1
        }, 200)
        elem('.pizzaBig img').src = item.img
        elem('.pizzaInfo h1').innerHTML = item.name
        elem('.pizzaInfo--desc').innerHTML = item.description
        elem('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
        document.querySelectorAll('.pizzaInfo--size span').forEach((span, id)=>{
            span.innerHTML = item.sizes[id]
        })

        elem('.pizzaInfo--qt').innerHTML = modalQt


        elem('.pizzaInfo--cancelButton').addEventListener('click', (e) =>{
            elem('.pizzaWindowArea').style.display = "none"
        })
    })
    
    elem('.pizza-area').append(pizzaitem);
})

// EVENTOS DE MODAL

elem('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQt++
    elem('.pizzaInfo--qt').innerHTML = modalQt
})

elem('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1){
        modalQt--
        elem('.pizzaInfo--qt').innerHTML = modalQt
    }
})

document.querySelectorAll('.pizzaInfo--size').forEach((span, id)=>{
    span.addEventListener('click', ()=>{
        elem('.pizzaInfo--size.selected').classList.remove('selected')
        span.classList.add('selected')
    })
})

elem('.pizzaInfo--addButton').addEventListener('click', ()=>{
    //Qual é a pizza
    console.log("pizza", modalKey)

    //Qual o tamanho
    let size = parseInt(elem('.pizzaInfo--size.selected').getAttribute('data-key'))

    let identifier = pizzaJson[modalKey].id+'@'+size

    let key = cart.findIndex((item)=>{
        return item.identifier == identifier
    })

    if(key > -1){
        cart[key].qt += modalQt
    }else{
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt
        })
    }
    updateCart()
    elem('.pizzaWindowArea').style.display = "none"
})

function updateCart(){
    if(cart.length > 0){
        elem('aside').classList.add('show')
        for(let i in cart){
            let pizzaItem = pizzaJson.find((item)=>{
                return item.id = cart[i].id
            })
        }
    }else{
        elem('aside').classList.remove('show')
    }
}