const mensajeAlerta = "Por favor, completar todos los campos obligatorios"
const confirmaMsg = "Se borraran todos los campos"
const apiUrl = "http://localhost:3000"

let formRegistro;

document.addEventListener("DOMContentLoaded", () => {
    formRegistro = document.querySelector("#registro-form")
    formRegistro.addEventListener("submit", validarFormRegistro);
    //formRegistro.addEventListener("submit", enviarFormularioRegistro);
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
          enviarFormularioRegistro();
      } else {
        evento.preventDefault()
      }
  }
  
  
  /*-----------------------ENVIO FORMULARIO REGISTRO -------------------------------*/
  
    
  const enviarFormularioRegistro = () => {
    const datos = new FormData(formRegistro);

    fetch(`${apiUrl}/registro-form`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
    .then(respuesta => {respuesta.json() })

    .then(data => {console.log(data) })
    .catch(error => console.log("error", error));

  };
  
  

  