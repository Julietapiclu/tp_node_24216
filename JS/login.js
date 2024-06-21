const mensajeAlerta = "Por favor, completar todos los campos obligatorios"
const confirmaMsg = "Se borraran todos los campos"
const apiUrl = "http://localhost:3000"


document.addEventListener("DOMContentLoaded", () => {
  formLogin.addEventListener("submit", validarFormLogin);
});



/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO LOGIN ------------- */

const validarUsuarioLogin = () => {
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
    
    if (password.length ==0) {
      alert("el campo no puede estar vacío");
      return false;
     } else {
      return true;
     }
    }
      

  /*-----------------------ENVIO FORMULARIO LOGIN -------------------------------*/
  
  const formLogin = document.querySelector("#login-form")
  const datos = new FormData(formLogin);
  
  const options = {
    method: "POST",
    body: datos
  }

  const login = () => {
    fetch(`${apiUrl}/login-form`, options)
    .then(response =>  response.json()) 
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
 
  };

  
  const validarFormLogin = (evento) => {
    if (validarUsuarioLogin() && validarPasswordLogin()) {
          login()
      } 
  }

  
