fetch('./data.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        const productos = res;
        const productCatalog = document.querySelector('#productCatalog');
        productos.forEach((producto) => {
            const productContainer = document.createElement('div');
            productContainer.classList.add('productContainer');
            productContainer.classList.add(`${producto.marca}`);
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
    });

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
