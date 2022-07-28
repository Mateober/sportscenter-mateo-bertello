let consultas = [];

let formulario;

let inputNombreApellido;
let inputTelefono;
let inputEmail;
let inputDireccion;
let inputMensaje;
let tabla;
//----------------------OBJETOS----------------------
class Consulta {
    constructor(telefono, nombreApellido, email, direccion, mensaje) {
        this.telefono = telefono;
        this.nombreApellido = nombreApellido;
        this.email = email;
        this.direccion = direccion;
        this.mensaje = mensaje;
    }
}
//----------------------LLAMANDO ELEMENTOS----------------------
function inicializarElementos() {
    formulario = document.getElementById('formulario');
    inputTelefono = document.getElementById('telefono');
    inputNombreApellido = document.getElementById('nombreApellido');
    inputEmail = document.getElementById('email');
    inputDireccion = document.getElementById('direccion');
    inputMensaje = document.getElementById('mensaje');
    tabla = document.getElementById('tablaConsultas');
}
inicializarElementos();

//----------------------CARGANDO FORMULARIO EN ARRAY----------------------
formulario.onsubmit = (event) => {
    event.preventDefault();

    let nuevaConsulta = new Consulta(inputTelefono.value, inputNombreApellido.value, inputEmail.value, inputDireccion.value, inputMensaje.value);

    consultas.push(nuevaConsulta);

    consultas.reverse();
    limpiarTabla();
    agregarConsultasTabla();
    formulario.reset();
};