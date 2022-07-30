function alertComprar() {
    Swal.fire({
        title: 'Tu compra ha sido realizada.',
        text: 'Gracias por confiar en nosotros.',
        icon: 'success',
        confirmButtonText: 'OK',
    });
}

function alertRepetido() {
    Swal.fire({
        title: 'Ya tienes este producto en el carrito',
        text: 'Puedes cambiar la cantidad desde allí',
        icon: 'warning',
        confirmButtonText: 'OK',
    });
}

function alertVacio() {
    Swal.fire({
        title: 'No hay nada en el carrito',
        icon: 'warning',
        confirmButtonText: 'OK',
    });
}

function alertProductoCarrito() {
    Toastify({
        text: 'Producto agregado al carrito',
        duration: 1500,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: '#229ACD',
        },
    }).showToast();
}

function alertProductoFueraCarrito() {
    Toastify({
        text: 'Producto eliminado del carrito',
        duration: 1500,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: '#DF310C',
        },
    }).showToast();
}
