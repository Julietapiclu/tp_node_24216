const mensajeAlerta = "Por favor, completar todos los campos obligatorios"
const confirmaMsg = "Se borraran todos los campos"

document.addEventListener("DOMContentLoaded", () => {
    const formRegistro = document.querySelector("#login-form")
    formRegistro.addEventListener("submit", validarFormLogin);
    formRegistro.addEventListener("submit", enviarFormularioLogin);
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

/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO LOGIN ------------- */

const validarusuarioLogin = () => {
    let elemento = document.querySelector("#loginUsuario").value.trim();
    let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validarEmail.test(elemento) ){
      return true;
    } else{
      alert("usuario invalido, corregir");
      return false;
    } 
  }
  
    
  const validarPasswordLogin = () => {
    let password = document.querySelector("#loginPassword").value.trim();
    
    if (password.length ==0 || confirmPassword ==0) {
      alert("el campo no puede estar vacío");
      return false;
     } else {
      return true;
     }
    }
  
  
  const validarFormLogin = (evento) => {
    if (validarusuarioLogin() && validarPasswordLogin()) {
          return true;
      } else {
        evento.preventDefault();
        return false;
      }
  }
  
  
  /*-----------------------ENVIO FORMULARIO REGISTRO -------------------------------*/
  
  
  
  const enviarFormularioLogin = () => {
    const datos = new FormData(formRegistro);
    console.log(datos);
    fetch("http://localhost:3000/login-form", {
      method: "POST",
      body: datos
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
    }).catch(error => console.log("error", error));
  };
  
  

  