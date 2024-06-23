const mensajeAlerta = "Por favor, completar todos los campos obligatorios";
const confirmaMsg = "Se borrarán todos los campos";

let formLogin;

document.addEventListener("DOMContentLoaded", () => {
  formLogin = document.querySelector("#login-form");
  formLogin.addEventListener("submit", validarFormLogin);
  
});




/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO LOGIN ------------- */

const validarUsuarioLogin = () => {
  let elemento = document.querySelector("#loginUsuario").value.trim();
  let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (validarEmail.test(elemento)) {
    return true;
  } else {
    alert("Usuario inválido, corregir");
    return false;
  }
};

const validarPasswordLogin = () => {
  let password = document.querySelector("#loginPassword").value.trim();

  if (password.length === 0) {
    alert("El campo no puede estar vacío");
    return false;
  } else {
    return true;
  }
};

/*-----------------------ENVÍO FORMULARIO LOGIN -------------------------------*/


const validarFormLogin = (evento) => {

  if (validarUsuarioLogin() && validarPasswordLogin()) {
    //login();
  } else {
    evento.preventDefault()
  } 
};

//da error de bad reques - se envía con el formulario html
/*   const login = () => {
  const datos = new FormData(formLogin);
  const actionURL = formLogin.getAttribute('action'); // Obtiene la URL del formulario HTML   
  
  const options = {
    method: "POST",
    body: datos
  }

  console.log("Datos :", datos);
  const formDataObject = Object.fromEntries(datos);
  console.log(formDataObject);

  fetch(actionURL, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error)
    );
}; 
  */