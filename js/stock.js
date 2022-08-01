const productos = [
    { id: 101, marca: "Adidas", nombre: 'Adidas Running Solarglide 5 Blanca', precio: 28000, link1: "assets/Adidas/zapatilla-running-adidas-ultraboost-20-gris-front.jpg", link2: "assets/Adidas/zapatilla-running-adidas-ultraboost-20-gris-back.jpg" },
    { id: 102, marca: "Adidas", nombre: 'Adidas Running Solarglide 5 Naranja', precio: 28000, link1: "assets/Adidas/zapatillas-running-adidas-solarglide-5-naranja-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-solarglide-5-naranja-back.jpg" },
    { id: 103, marca: "Adidas", nombre: 'Adidas Running Supernova Blanca', precio: 32000, link1: "assets/Adidas/zapatillas-running-adidas-supernova-blanca-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-supernova-blanca-back.jpg" },
    { id: 104, marca: "Adidas", nombre: 'Adidas Running Supernova Gris', precio: 32000, link1: "assets/Adidas/zapatillas-running-adidas-supernova-gris-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-supernova-gris-back.jpg" },
    { id: 105, marca: "Adidas", nombre: 'Adidas Running Tokio Blanca', precio: 39000, link1: "assets/Adidas/zapatillas-running-adidas-supernova-tokio-blanca-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-supernova-tokio-blanca-back.jpg" },
    { id: 106, marca: "Adidas", nombre: 'Adidas Running Nasa 5 Gris', precio: 34000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-5-0-dna-nasa-gris-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-5-0-dna-nasa-gris-back.jpg" },
    { id: 107, marca: "Adidas", nombre: 'Adidas Running Ultraboost 20 Azul', precio: 31000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-20-azul-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-20-azul-backend.jpg" },
    { id: 108, marca: "Adidas", nombre: 'Adidas Running Ultraboost 21 Cold ', precio: 31000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-cold-rdy-unisex-azul-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-cold-rdy-unisex-azul-back.jpg" },
    { id: 109, marca: "Adidas", nombre: 'Adidas Running Primeblue 21 Azul', precio: 39000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-primeblue-azul-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-primeblue-azul-back.jpg" },
    { id: 110, marca: "Adidas", nombre: 'Adidas Running Ultraboost 21 Negra ', precio: 29000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-unisex-negra-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-21-unisex-negra-back.jpg" },
    { id: 111, marca: "Adidas", nombre: 'Adidas Running Ultraboost 22 Azul', precio: 29000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-azul-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-azul-back.jpg" },
    { id: 112, marca: "Adidas", nombre: 'Adidas Running Ultraboost 22 Naranja', precio: 29000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-naranja-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-naranja-back.jpg" },
    { id: 113, marca: "Adidas", nombre: 'Adidas Running Ultraboost 22 Violeta', precio: 29000, link1: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-violeta-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-ultraboost-22-violeta-back.jpg" },
    { id: 114, marca: "Adidas", nombre: 'Adidas Running Galaxy 2 Gris', precio: 31000, link1: "assets/Adidas/zapatillas-running-adidas-x9000l2-gris-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-x9000l2-gris-back.jpg" },
    { id: 115, marca: "Adidas", nombre: 'Adidas Running Galaxy 2 Negra', precio: 31000, link1: "assets/Adidas/zapatillas-running-adidas-x9000l2-negra-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-x9000l2-negra-83264864-back.jpg" },
    { id: 116, marca: "Adidas", nombre: 'Adidas Running HeatReady Blanca', precio: 37000, link1: "assets/Adidas/zapatillas-running-adidas-x9000l4-heat-rdy-blanca-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-x9000l4-heat-rdy-blanca-back.jpg" },
    { id: 117, marca: "Adidas", nombre: 'Adidas Running HeadReady Negra', precio: 37000, link1: "assets/Adidas/zapatillas-running-adidas-x9000l4-negro-front.jpg", link2: "assets/Adidas/zapatillas-running-adidas-x9000l4-negro-back.jpg" },
    { id: 118, marca: "Adidas", nombre: 'Adidas Trekking Terrex Verde', precio: 22000, link1: "assets/Adidas/zapatillas-trekking-adidas-terrex-soulstride-verde-front.jpg", link2: "assets/Adidas/zapatillas-trekking-adidas-terrex-soulstride-verde-back.jpg" },
    { id: 119, marca: "Asics", nombre: 'Asics Voley Netburner Blanca', precio: 27000, link1: "assets/Asics/zapatillas-de-voley-asics-netburner-ballistic-ff-2-blanca-front.jpg", link2: "assets/Asics/zapatillas-de-voley-asics-netburner-ballistic-ff-2-blanca-back.jpg" },
    { id: 120, marca: "Asics", nombre: 'Asics Running Kayano Azul', precio: 29000, link1: "assets/Asics/zapatillas-running-asics-gel-kayano-27-azul-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-kayano-27-azul-back.jpg" },
    { id: 121, marca: "Asics", nombre: 'Asics Running Kayano Negra', precio: 29000, link1: "assets/Asics/zapatillas-running-asics-gel-kayano-28-negra-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-kayano-28-negra-back.jpg" },
    { id: 122, marca: "Asics", nombre: 'Asics Running Ninbus Azul', precio: 32000, link1: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-azul-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-azul-back.jpg" },
    { id: 123, marca: "Asics", nombre: 'Asics Running Ninbus Blanca', precio: 32000, link1: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-blanca-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-blanca-back.jpg" },
    { id: 124, marca: "Asics", nombre: 'Asics Running Ninbus Gris', precio: 32000, link1: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-gris-front.jpg", link2: "assets/Asics/zapatillas-running-asics-gel-nimbus-24-gris-back.jpg" },
    { id: 125, marca: "Lacoste", nombre: 'Lacoste Run Breaker Beige', precio: 39000, link1: "assets/Lacoste/botas-lacoste-run-breaker-beige-front.jpg", link2: "assets/Lacoste/botas-lacoste-run-breaker-beige-back.jpg" },
    { id: 126, marca: "Lacoste", nombre: 'Lacoste Game Advance Blanca', precio: 28000, link1: "assets/Lacoste/zapatillas-lacoste-game-advance-luxe-blanca-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-game-advance-luxe-blanca-back.jpg" },
    { id: 127, marca: "Lacoste", nombre: 'Lacoste Vericrom Prime Beige', precio: 37000, link1: "assets/Lacoste/zapatillas-lacoste-l001-crudo-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-l001-crudo-back.jpg" },
    { id: 128, marca: "Lacoste", nombre: 'Lacoste Match Break Azul', precio: 37000, link1: "assets/Lacoste/zapatillas-lacoste-match-break-sma-azul-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-match-break-sma-azul-back.jpg" },
    { id: 129, marca: "Lacoste", nombre: 'Lacoste Run Breaker Blanca', precio: 39000, link1: "assets/Lacoste/zapatillas-lacoste-run-breaker-320-blanca-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-run-breaker-320-blanca-back.jpg" },
    { id: 130, marca: "Lacoste", nombre: 'Lacoste Storm Mesh Azul', precio: 29000, link1: "assets/Lacoste/zapatillas-lacoste-storm-96-lo-0121-azul-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-storm-96-lo-0121-azul-back.jpg" },
    { id: 131, marca: "Lacoste", nombre: 'Lacoste Strom Mesh Blanca', precio: 29000, link1: "assets/Lacoste/zapatillas-lacoste-storm-96-lo-mesh-0721-blanca-front.jpg", link2: "assets/Lacoste/zapatillas-lacoste-storm-96-lo-mesh-0721-blanca-back.jpg" },
    { id: 132, marca: "Nike", nombre: 'Nike Air Zoom Pegasus Gris', precio: 22000, link1: "assets/Nike/zapatilla-running-nike-air-zoom-pegasus-34-gris-front.jpg", link2: "assets/Nike/zapatilla-running-nike-air-zoom-pegasus-34-gris-back.jpg" },
    { id: 133, marca: "Nike", nombre: 'Nike Air Zoom Pegasus Azul', precio: 22000, link1: "assets/Nike/zapatilla-running-nike-air-zoom-pegasus-36-azul-front.jpg", link2: "assets/Nike/zapatilla-running-nike-air-zoom-pegasus-36-azul-back.jpg" },
    { id: 134, marca: "Nike", nombre: 'Nike Air Zoom Pegasus Negra', precio: 22000, link1: "assets/Nike/zapatilla-running-nike-air-zoom-pegasus-36-negra-front.jpg", link2: "assets/Nike/zapatilla-running-nike-air-zoom-pegasus-36-negra-back.jpg" },
    { id: 135, marca: "Nike", nombre: 'Nike Air Zoom Vomero Gris', precio: 28000, link1: "assets/Nike/zapatilla-running-nike-air-zoom-vomero-14-gris-front.jpg", link2: "assets/Nike/zapatilla-running-nike-air-zoom-vomero-14-gris-back.jpg" },
    { id: 136, marca: "Nike", nombre: 'Nike Air Zoom Vomero Negra', precio: 28000, link1: "assets/Nike/zapatilla-running-nike-air-zoom-vomero-14-negra-front.jpg", link2: "assets/Nike/zapatilla-running-nike-air-zoom-vomero-14-negra-back.jpg" },
    { id: 137, marca: "Nike", nombre: 'Nike Air Zoom Vomero Azul', precio: 28000, link1: "assets/Nike/zapatilla-running-nike-air-zoom-vomero-14-turquesa-back.jpg", link2: "assets/Nike/zapatilla-running-nike-air-zoom-vomero-14-turquesa-front.jpg" },
    { id: 138, marca: "Nike", nombre: 'Nike React Miler Negra', precio: 31000, link1: "assets/Nike/zapatilla-running-nike-react-miler-negra-front.jpg", link2: "assets/Nike/zapatilla-running-nike-react-miler-negra-back.jpg" },
    { id: 139, marca: "Nike", nombre: 'Nike Air Max Excee Gris', precio: 38000, link1: "assets/Nike/zapatillas-nike-air-max-excee-gris-front.jpg", link2: "assets/Nike/zapatillas-nike-air-max-excee-gris-back.jpg" },
    { id: 140, marca: "Nike", nombre: 'Nike Reactive Miler Blanca', precio: 31000, link1: "assets/Nike/zapatillas-running-nike-react-miler-2-crudo-front.jpg", link2: "assets/Nike/zapatillas-running-nike-react-miler-2-crudo-back.jpg" },
    { id: 141, marca: "Nike", nombre: 'Nike Reactive Miler Gris', precio: 31000, link1: "assets/Nike/zapatillas-running-nike-react-miler-gris-front.jpg", link2: "assets/Nike/zapatillas-running-nike-react-miler-gris-back.jpg" },
    { id: 142, marca: "Nike", nombre: 'Nike Zoom Winflow Azul', precio: 35000, link1: "assets/Nike/zapatillas-running-nike-zoom-winflo-7-azul-front.jpg", link2: "assets/Nike/zapatillas-running-nike-zoom-winflo-7-azul-back.jpg" },
  ];

const productCatalog = document.querySelector('#productCatalog');

function IniciarProductos() {
    productos.forEach((producto) => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('productContainer');
        productContainer.classList.add(`${producto.marca}`)
        /* productContainer.classList.add('hideProducto'); */
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
