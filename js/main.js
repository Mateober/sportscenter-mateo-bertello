let compraFinal = [];
let carrito = [];
let subTotalCompra;
let total = 0;

const productos = [
    { id: 101, producto: 'Adidas Running Solarglide 5 Naranja', precio: 40000 },
    { id: 102, producto: 'Adidas Running Ultraboost 20 Gris', precio: 39000 },
    { id: 103, producto: 'Adidas Running Supernova Blanca', precio: 49000 },
    { id: 104, producto: 'Adidas Running Supernova Gris', precio: 39000 },
    { id: 105, producto: 'Adidas Running Ultraboost 5 Gris', precio: 39000 },
    { id: 106, producto: 'Adidas Running Ultraboost 20 Azul', precio: 27000 },
    { id: 107, producto: 'Adidas Running Ultraboost 21 Cold', precio: 39000 },
];

class ProductoSeleccionado {
    constructor(cantidad, producto, precio, subTotalCompra) {
        this.cantidad = cantidad;
        this.producto = producto;
        this.precio = precio;
        this.subtotal = subTotalCompra;
    }
}

let compra = new ProductoSeleccionado();

function buscar(productos, seleccion) {
    return (carrito = productos.filter((objeto) => objeto.id == parseInt(seleccion)));
}

function listaProductos(productos) {
    let lista = '';
    for (const producto of productos) {
        lista += 'ID: ' + producto.id + ' - ' + producto.producto + ' $' + producto.precio + '\n';
    }
    return lista;
}

function subtotal(carrito, cantidad) {
    carrito.forEach((item) => {
        return (subTotalCompra = item.precio * cantidad);
    });
}

function PagoContadoTransferencia(total) {
    console.log('CBU : 54033458453 \n' + 'ALIAS : PIZZA.BUCEO.PELOTA \n' + 'Transferencia : $' + total);
}

function pagoTarjeta(total) {
    return (total = (total * 1.1).toFixed());
}

function CarritoF(cantidad, carrito, subTotalCompra) {
    for (let i = 0; i < carrito.length; i++) {
        compra = new ProductoSeleccionado(cantidad, carrito[i].producto, carrito[i].precio, subTotalCompra);
        compraFinal.push(compra);
    }
    return compraFinal;
}

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    let seleccion = prompt('Ingrese el ID del producto deseado\n\n' + listaProductos(productos) + '\n 0 - EXIT');
    let error = productos.some((item) => item.id == seleccion);
    buscar(productos, seleccion);
    if (seleccion == 0) {
        if (total == 0) {
            break;
        } else {
            console.log(compraFinal);
            console.log('El total de su compra es: $' + total);
            let formaPago = prompt('seleccione forma de pago : \n 1 - Transferencia \n 2 - Tarjeta (+ impuesto)');
            if (formaPago == 1) {
                PagoContadoTransferencia(total);
                break;
            } else if (formaPago == 2) {
                console.log(`El total  es $ ${pagoTarjeta(total)} pagando con tarjeta`);
                break;
            }
        }
    }

    if (error == false) {
        alert('Error ID NO CORRESPONDE A UN PRODUCTO');
    } else {
        let cantidad = parseInt(prompt('Ingresa la cantidad'));
        subtotal(carrito, cantidad);

        CarritoF(cantidad, carrito, subTotalCompra);

        total += subTotalCompra;
    }
}
