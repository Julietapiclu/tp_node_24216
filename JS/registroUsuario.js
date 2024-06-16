const mensajeAlerta = "Por favor, completar todos los campos obligatorios"
const confirmaMsg = "Se borraran todos los campos"

document.addEventListener("DOMContentLoaded", () => {
    const formRegistro = document.querySelector("#registro-form")
    formRegistro.addEventListener("submit", validarFormRegistro);
    formRegistro.addEventListener("submit", enviarFormularioRegistro);
    formRegistro.addEventListener("reset", confirmar)
  });

/* --------boton borrar----*/
const confirmar = (evento) => {
    const confirma = confirm(confirmaMsg);
    if (!confirma) {
      evento.preventDefault();
      return;
    } 
  }



/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO REGISTRO ------------- */

const validarusuarioEmail = () => {
    let elemento = document.querySelector("#usuarioEmail").value.trim();
    let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validarEmail.test(elemento) ){
      return true;
    } else{
      alert("Email invalido, corregir");
      return false;
    } 
  }
  
  const validarNombreRegistro = () => {
    let elemento = document.querySelector("#nombreRegistro").value.trim();
    //console.log(elemento);
    if (elemento.length ==0) {
      alert("el campo Nombre no puede estar vacío");
      return false;
    }return true;
  }
  
  
  const validarApellidoRegistro = () => {
    let elemento = document.querySelector("#apellidoRegistro").value.trim();
    if (elemento.length ==0) {
      alert("el campo Apellido no puede estar vacío");
      return false;
    }return true;
  }
  
  
  const validarTelefonoRegistro = () => {
    let elemento = document.querySelector("#telefonoRegistro").value.trim();
    if (isNaN(elemento)) {
      alert("ingrese solo numeros")
      return false;
    }return true;
  }
  
  const validarPasswordRegistro = () => {
    let password = document.querySelector("#passwordRegistro").value.trim();
    let confirmPassword = document.querySelector("#confirmPpasswordRegistro").value.trim();
    if (password.length ==0 || confirmPassword ==0) {
      alert("el campo no puede estar vacío");
      return false;
     } else if (password !== confirmPassword) {
      alert("los password deben ser iguales");
      return false;
     } else {
      return true;
     }
    }
  
  
  const validarFormRegistro = (evento) => {
    if (validarusuarioEmail() && validarNombreRegistro() && validarApellidoRegistro()
        && validarTelefonoRegistro() && validarPasswordRegistro()) {
          return true;
      } else {
        evento.preventDefault();
        return false;
      }
  }
  
  
  /*-----------------------ENVIO FORMULARIO REGISTRO -------------------------------*/
  
  
  
  const enviarFormularioRegistro = () => {
    const datos = new FormData(formRegistro);
    console.log(datos);
    fetch("http://localhost:3000/registro-form", {
      method: "POST",
      body: datos
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
    }).catch(error => console.log("error", error));
  };
  
  

  