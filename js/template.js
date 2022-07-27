const productos = [
  { id: 101, nombre: 'Adidas Running Solarglide 5 Blanca', precio: 40000, link1: "assets/Adidas/zapatilla-running-adidas-ultraboost-20-gris-front.jpg", link2: "assets/Adidas/zapatilla-running-adidas-ultraboost-20-gris-back.jpg" },
  { id: 102, nombre: 'Adidas Running Solarglide 5 Naranja', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-solarglide-5-naranja-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-solarglide-5-naranja-back.jpg" },
  { id: 103, nombre: 'Adidas Running Supernova Blanca', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-supernova-blanca-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-supernova-blanca-back.jpg" },
  { id: 104, nombre: 'Adidas Running Supernova Gris', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-supernova-gris-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-supernova-gris-back.jpg" },
  { id: 105, nombre: 'Adidas Running Tokio Blanca', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-supernova-tokio-blanca-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-supernova-tokio-blanca-back.jpg" },
  { id: 106, nombre: 'Adidas Running Nasa 5 Gris', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-5-0-dna-nasa-gris-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-5-0-dna-nasa-gris-back.jpg" },
  { id: 107, nombre: 'Adidas Running Ultraboost 20 Azul', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-20-azul-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-20-azul-backend.jpg" },
  { id: 108, nombre: 'Adidas Running Ultraboost 21 Cold ', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-cold-rdy-unisex-azul-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-cold-rdy-unisex-azul-back.jpg" },
  { id: 109, nombre: 'Adidas Running Primeblue 21 Azul', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-primeblue-azul-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-primeblue-azul-back.jpg" },
  { id: 110, nombre: 'Adidas Running Ultraboost 21 Negra ', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-unisex-negra-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-unisex-negra-back.jpg" },
  { id: 111, nombre: 'Adidas Running Ultraboost 22 Azul', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-azul-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-azul-back.jpg" },
  { id: 112, nombre: 'Adidas Running Ultraboost 22 Naranja', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-naranja-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-naranja-back.jpg" },
  { id: 113, nombre: 'Adidas Running Ultraboost 22 Violeta', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-violeta-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-violeta-back.jpg" },
  { id: 114, nombre: 'Adidas Running Galaxy 2 Gris', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-x9000l2-gris-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-x9000l2-gris-back.jpg" },
  { id: 115, nombre: 'Adidas Running Galaxy 2 Negra', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-x9000l2-negra-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-x9000l2-negra-83264864-back.jpg" },
  { id: 116, nombre: 'Adidas Running HeatReady Blanca', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-x9000l4-heat-rdy-blanca-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-x9000l4-heat-rdy-blanca-back.jpg" },
  { id: 117, nombre: 'Adidas Running HeadReady Negra', precio: 40000, link1: "assets/Adidas/zapatillas-running-adidas-x9000l4-negro-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-x9000l4-negro-back.jpg" },
  { id: 118, nombre: 'Adidas Trekking Terrex Verde', precio: 40000, link1: "assets/Adidas/zapatillas-trekking-adidas-terrex-soulstride-verde-front.jpg", link2: "assets/Adidas/zapatillas-trekking-adidas-terrex-soulstride-verde-back.jpg" },
  { id: 119, nombre: 'Asics Voley Netburner Blanca', precio: 40000, link1: "assets/Asics/zapatillas-de-voley-asics-netburner-ballistic-ff-2-blanca-front.jpg", link2: "assets/Asics/zapatillas-de-voley-asics-netburner-ballistic-ff-2-blanca-back.jpg" },
  { id: 120, nombre: 'Asics Running Kayano Azul', precio: 40000, link1: "assets/Asics/zapatillas-running-asics-gel-kayano-27-azul-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-kayano-27-azul-back.jpg" },
  { id: 121, nombre: 'Asics Running Kayano Negra', precio: 40000, link1: "assets/Asics/zapatillas-running-asics-gel-kayano-28-negra-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-kayano-28-negra-back.jpg" },
  { id: 122, nombre: 'Asics Running Ninbus Azul', precio: 40000, link1: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-azul-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-azul-back.jpg" },
  { id: 123, nombre: 'Asics Running Ninbus Blanca', precio: 40000, link1: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-blanca-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-blanca-back.jpg" },
  { id: 124, nombre: 'Asics Running Ninbus Gris', precio: 40000, link1: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-gris-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-gris-back.jpg" },
  { id: 125, nombre: 'Lacoste Run Breaker Beige', precio: 40000, link1: "assets/Lacoste/botas-lacoste-run-breaker-beige-front.jpg", link2: "assets/Lacoste/botas-lacoste-run-breaker-beige-back.jpg" },
  { id: 126, nombre: 'Lacoste Game Advance Blanca', precio: 40000, link1: "assets/Lacoste/zapatillas-lacoste-game-advance-luxe-blanca-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-game-advance-luxe-blanca-back.jpg" },
  { id: 127, nombre: 'Lacoste Vericrom Prime Beige', precio: 40000, link1: "assets/Lacoste/zapatillas-lacoste-l001-crudo-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-l001-crudo-back.jpg" },
  { id: 128, nombre: 'Lacoste Match Break Azul', precio: 40000, link1: "assets/Lacoste/zapatillas-lacoste-match-break-sma-azul-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-match-break-sma-azul-back.jpg" },
  { id: 129, nombre: 'Lacoste Run Breaker Blanca', precio: 40000, link1: "assets/Lacoste/zapatillas-lacoste-run-breaker-320-blanca-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-run-breaker-320-blanca-back.jpg" },
  { id: 130, nombre: 'Lacoste Storm Mesh Azul', precio: 40000, link1: "assets/Lacoste/zapatillas-lacoste-storm-96-lo-0121-azul-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-storm-96-lo-0121-azul-back.jpg" },
  { id: 131, nombre: 'Lacoste Strom Mesh Blanca', precio: 40000, link1: "assets/Lacoste/zapatillas-lacoste-storm-96-lo-mesh-0721-blanca-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-storm-96-lo-mesh-0721-blanca-back.jpg" },
  { id: 132, nombre: 'Nike ', precio: 40000, link1: "assets/Nike/", link2: "assets/Nike/" },
];

const productCatalog = document.querySelector('#productCatalog');

for (const producto of productos) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('productContainer');
    productContainer.innerHTML = `
      <div class="productContainer__item">
          <div class="productContainer__item--photo">
              <img class="front" src=${producto.link1} alt="">
              <img class="back" src=${producto.link2} alt="">
          </div>
          <div class="productContainer__item--info">
              <h3 class="product__tittle">${producto.nombre}</h3>
              <p class="product__price">$${producto.precio}</p>
          </div>
          <button class="fa-solid fa-cart-plus add-cart" type="button"></button>
      </div>
      `;
    productCatalog.appendChild(productContainer);
}
//----------------------------------------------------------------------------------------------------
//CARRITO
let carritoIcono = document.querySelector('#cart-icon');
let carrito = document.querySelector('.cart');
let cerrarCarrito = document.querySelector('#close-cart');

//ABRIR CARRITO
carritoIcono.onclick = () => {
    carrito.classList.add('active');
};
//CERRAR CARRITO
cerrarCarrito.onclick = () => {
    carrito.classList.remove('active');
};

/* Cart Working */
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

/* Maiking Function */
function ready() {
    //ELIMINAR ITEM
    let removeCartButtons = document.getElementsByClassName('cart-remove');
    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    let cantidadInput = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < cantidadInput.length; i++) {
        let input = cantidadInput[i];
        input.addEventListener('change', cantidadCambiar);
    }
    //AÑADIR A CARRITO
    let aniadirCarrito = document.getElementsByClassName('add-cart');
    for (let i = 0; i < aniadirCarrito.length; i++) {
        let button = aniadirCarrito[i];
        button.addEventListener('click', clickAniadirCarrito);
    }
    //BOTTON COMPRAR
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', clickBotonComprar);
}
//BOTON COMPRAR
function clickBotonComprar() {
    alert('Gracias por comprar!');
    let cartContenedor = document.getElementsByClassName('cart-content')[0];
    while (cartContenedor.hasChildNodes()) {
        cartContenedor.removeChild(cartContenedor.firstChild);
    }

    updateTotal();
}

//SACAR ITEMS DEL CARRITO
function removeCartItem(event) {
    let clickBoton = event.target;
    clickBoton.parentElement.remove();

    updateTotal();
}

//CAMBIAR CANTIDAD
function cantidadCambiar(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}
//AÑADIR AL CARRITO
function clickAniadirCarrito(event) {
    let boton = event.target;
    let shopProducts = boton.parentElement;
    let title = shopProducts.getElementsByClassName('product__tittle')[0].innerText;
    let price = shopProducts.getElementsByClassName('product__price')[0].innerText;
    let productImg = shopProducts.getElementsByClassName('front')[0].src;
    aniadirProductoCarrito(title, price, productImg);
    updateTotal();
}
function aniadirProductoCarrito(title, price, productImg) {
    let cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    let cartItems = document.getElementsByClassName('cart-content')[0];
    let cartItemsNames = document.getElementsByClassName('cart-product-title');
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('Ya tenes este producto en el carrito.');
            return;
        }
    }
    let cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>   
                            <input type="number" value="1" class="cart-quantity">             
                        </div>
                        <i class='bx bxs-trash-alt cart-remove'></i>
`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', cantidadCambiar);
}
//Update total
function updateTotal() {
    let cartContent = document.getElementsByClassName('cart-content')[0];
    let cartBoxes = document.getElementsByClassName('cart-box');
    let total = 0;
    let counter = 0;

    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('cart-price')[0];
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;
        total += price * quantity;
        counter += parseInt(quantity);
        document.getElementById('contador').textContent = counter;
    }

    if (cartBoxes.length === 0) {
        document.getElementById('contador').textContent = counter;
    }

    /* if price contain some Cents value */
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}

//----------------------------------------------------------------------------------------------------
let burgerIcono = document.querySelector('#burger-icon');
let burgerMenu = document.querySelector('#burger-menu');
let crossIcono = document.querySelector('#cross-icon');

/* Open Menu*/
burgerIcono.onclick = () => {
    burgerMenu.classList.add('active');
    burgerIcono.classList.add('hide');
    crossIcono.classList.add('active');
};
/* Close Menu */
crossIcono.onclick = () => {
    burgerMenu.classList.remove('active');
    crossIcono.classList.remove('active');
    burgerIcono.classList.remove('hide');
};

//----------------------------------------------------------------------------------------------------
