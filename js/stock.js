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

function IniciarProductos() {
    productos.forEach((producto) => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('productContainer');
        productContainer.setAttribute('id', producto.id);
        productContainer.innerHTML = `
            <div id="${producto.id}" class="productContainer__item">
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
    });
}

IniciarProductos();

/* for (const producto of productos) {
      const productContainer = document.createElement('div');
      productContainer.classList.add('productContainer');
      productContainer.setAttribute('id', producto.id);
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
  } */
