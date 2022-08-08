fetch('./data.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        let productosAdidas = document.querySelectorAll('.Adidas');
        let productosAsics = document.querySelectorAll('.Asics');
        let productosLacoste = document.querySelectorAll('.Lacoste');
        let productosNike = document.querySelectorAll('.Nike');
        let productosTodos = document.querySelectorAll('.productContainer');

        let btnTodos = document.querySelector('#btn-todos');
        let btnAdidas = document.querySelector('#btn-adidas');
        let btnAsics = document.querySelector('#btn-asics');
        let btnLacoste = document.querySelector('#btn-lacoste');
        let btnNike = document.querySelector('#btn-nike');

        btnTodos.addEventListener('click', todosProductos);
        btnAdidas.addEventListener('click', soloAdidas);
        btnAsics.addEventListener('click', soloAsics);
        btnLacoste.addEventListener('click', soloLacoste);
        btnNike.addEventListener('click', soloNike);

        function todosProductos() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.remove('showProducto');
                zapatilla.classList.remove('hideProducto');
            }
            btnTodos.classList.add('backgroundColorButton');
            btnAdidas.classList.remove('backgroundColorButton');
            btnAsics.classList.remove('backgroundColorButton');
            btnLacoste.classList.remove('backgroundColorButton');
            btnNike.classList.remove('backgroundColorButton');
        }

        function soloAdidas() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.add('hideProducto');
                zapatilla.classList.remove('showProducto');
            }
            for (const zapatilla of productosAdidas) {
                zapatilla.classList.add('showProducto');
            }
            btnTodos.classList.remove('backgroundColorButton');
            btnAdidas.classList.add('backgroundColorButton');
            btnAsics.classList.remove('backgroundColorButton');
            btnLacoste.classList.remove('backgroundColorButton');
            btnNike.classList.remove('backgroundColorButton');
        }

        function soloAsics() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.add('hideProducto');
                zapatilla.classList.remove('showProducto');
            }
            for (const zapatilla of productosAsics) {
                zapatilla.classList.add('showProducto');
            }
            btnTodos.classList.remove('backgroundColorButton');
            btnAdidas.classList.remove('backgroundColorButton');
            btnAsics.classList.add('backgroundColorButton');
            btnLacoste.classList.remove('backgroundColorButton');
            btnNike.classList.remove('backgroundColorButton');
        }

        function soloLacoste() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.add('hideProducto');
                zapatilla.classList.remove('showProducto');
            }
            for (const zapatilla of productosLacoste) {
                zapatilla.classList.add('showProducto');
            }
            btnTodos.classList.remove('backgroundColorButton');
            btnAdidas.classList.remove('backgroundColorButton');
            btnAsics.classList.remove('backgroundColorButton');
            btnLacoste.classList.add('backgroundColorButton');
            btnNike.classList.remove('backgroundColorButton');
        }

        function soloNike() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.add('hideProducto');
                zapatilla.classList.remove('showProducto');
            }
            for (const zapatilla of productosNike) {
                zapatilla.classList.add('showProducto');
            }
            btnTodos.classList.remove('backgroundColorButton');
            btnAdidas.classList.remove('backgroundColorButton');
            btnAsics.classList.remove('backgroundColorButton');
            btnLacoste.classList.remove('backgroundColorButton');
            btnNike.classList.add('backgroundColorButton');
        }
    });
