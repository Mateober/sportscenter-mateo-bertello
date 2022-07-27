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

function limpiarTabla() {
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
}
//----------------------AGREGANDO CONSULTAS A TABLA----------------------
function agregarConsultasTabla() {
    consultas.forEach((consulta) => {
        let tabla = document.getElementById('tablaConsultasEscritas');
        let filaTabla = document.createElement('tr');

        filaTabla.innerHTML = `
        <td>${consulta.nombreApellido} </td>
        <td>${consulta.telefono} </td>
        <td>${consulta.email} </td>
        <td>${consulta.direccion} </td>
        <td>${consulta.mensaje} </td>
        `;

        tabla.append(filaTabla);
    });
}
//----------------------------------------------
let burgerIcono = document.querySelector("#burger-icon");
let burgerMenu = document.querySelector("#burger-menu");
let crossIcono = document.querySelector("#cross-icon");

/* Open Menu*/
burgerIcono.onclick = () => {
  burgerMenu.classList.add("active");
  burgerIcono.classList.add("hide");
  crossIcono.classList.add("active");
};
/* Close Menu */
crossIcono.onclick = () => {
  burgerMenu.classList.remove("active");
  crossIcono.classList.remove("active");
  burgerIcono.classList.remove("hide");
};