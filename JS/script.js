/* Función para validar los campos obligatorios antes de enviar los 2 formularios */


const mensajeAlerta = "Por favor, completar todos los campos obligatorios"
const confirmaMsg = "Se borraran todos los campos"

document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.querySelector(".contact-form")
  
  form1.addEventListener("submit", validar);
  form1.addEventListener("reset", confirmar)
});


/* --------boton borrar----*/
const confirmar = (evento) => {
  const confirma = confirm(confirmaMsg);
  if (!confirma) {
    evento.preventDefault();
    return;
  } 
}


/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO CONTACTO----------------------- */

const validarNombre = () => {
  let elemento = document.getElementById("nombre").value.trim();
  
  if (elemento.length ==0) {
    /*alert(`el campo ${form1.name} no puede estar vacío`);*/
    alert("el campo Nombre no puede estar vacío")
    return false;
  }return true;
}

const validarApellido = () => {
  let elemento = document.getElementById("apellido").value.trim();
  if (elemento.length ==0) {
    alert("el campo Apellido no puede estar vacío");
    return false;
  }return true;
}

const validarEmail = () => {
  let elemento = document.getElementById("email").value.trim();
  let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if( validarEmail.test(elemento) ){
    return true;
  } else{
    alert("Email invalido, corregir");
    return false;
  } 
}

const validarTelefono = () => {
  let elemento = document.getElementById("telefono").value.trim();
  if (isNaN(elemento)) {
    alert("ingrese solo numeros")
    return false;
  }return true;
}

const validarMensaje = () => {
  const elemento = document.getElementById("message").value.trim();
  if (elemento.length ==0) {
    alert("el campo no puede estar vacío");
    return false;
  }return true;
}

const validar = (evento) =>{
  if (validarNombre() && validarApellido() && validarEmail()
      && validarTelefono() && validarMensaje() && confirm("Pusa aceptar para enviar el formulario")) {
        return true;
    } else {
      evento.preventDefault();
      return false;
    }
}



/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO PASEADORES----------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const form2 = document.querySelector("#solicitar-paseo-form")
  form2.addEventListener("submit", validarFormPaseadores);
  form2.addEventListener("reset", confirmar)
});


var clave = document.getElementById("clave").value.trim();
var cliente = document.getElementById("nombre_cliente").value.trim();
var mascota = document.getElementById("nombre_mascota").value.trim();


const validarClave = () => {
  let elemento = document.getElementById("clave").value.trim();
  
  if (elemento.length ==0) {
    alert("el campo Clave no puede estar vacío")
    return false;
  }return true;
}

const validarNombreCliente = () => {
  let elemento = document.getElementById("nombre_cliente").value.trim();
  if (elemento.length ==0) {
    alert("el campo Nombre del Cliente no puede estar vacío");
    return false;
  }return true;
}

const validarNombreMascota = () => {
  let elemento = document.getElementById("nombre_mascota").value.trim();
  if (elemento.length ==0) {
    alert("el campo Nombre de la Mascota no puede estar vacío");
    return false;
  }return true;
   
}

const validarFormPaseadores = (evento) =>{
  if (validarClave() && validarNombreCliente() && validarNombreMascota()
      && confirm("Pusa aceptar para enviar el formulario")) {
        return true;
    } else {
      evento.preventDefault();
      return false;
    }
}

