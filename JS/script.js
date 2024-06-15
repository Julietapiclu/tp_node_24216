const mensajeAlerta = "Por favor, completar todos los campos obligatorios"
const confirmaMsg = "Se borraran todos los campos"

document.addEventListener("DOMContentLoaded", () => {
  const formContacto = document.querySelector("#contact-form")
  formContacto.addEventListener("submit", validarFormContacto);
  formContacto.addEventListener("reset", confirmar)
});

document.addEventListener("DOMContentLoaded", () => {
  const formPaseadores = document.querySelector("#solicitar-paseo-form")
  formPaseadores.addEventListener("submit", validarFormPaseadores);
  formPaseadores.addEventListener("reset", confirmar)
});

document.addEventListener("DOMContentLoaded", () => {
  const formRegistro = document.querySelector("#registro-form")
  formRegistro.addEventListener("submit", validarFormRegistro);
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


/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO CONTACTO----------------------- */

const validarNombre = () => {
  let elemento = document.getElementById("nombre").value.trim();
  
  if (elemento.length ==0) {
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
  let elemento = document.getElementById("message").value.trim();
  if (elemento.length ==0) {
    alert("el campo no puede estar vacío");
    return false;
  }return true;
}

const validarFormContacto = (evento) =>{
  if (validarNombre() && validarApellido() && validarEmail()
      && validarTelefono() && validarMensaje() && confirm("Pusa aceptar para enviar el formulario")) {
        return true;
    } else {
      evento.preventDefault();
      return false;
    }
}



/*-----------------VALIDACIONES DE CAMPOS INPUT EN FORMULARIO PASEADORES----------------------- */

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
  if (validarClave() && validarNombreCliente() && validarNombreMascota()) {
        return true;
    } else {
      evento.preventDefault();
      return false;
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

  
formRegistro.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validarFormRegistro()) {
    confirm("Pulsa aceptar para enviar el formulario");
    enviarFormularioRegistro();
    }
  });

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

/*-----------------------ENVIO FORMULARIO PASEADORES -------------------------------*/

 
formPaseadores.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validarFormPaseadores()) {
    confirm("Pulsa aceptar para enviar el formulario");
    enviarFormularioPaseadores();
    }
  });

const enviarFormularioPaseadores = () => {
  const datos = new FormData(formPaseadores);
  fetch("http://localhost:3000/procesar_solicitud", {
    method: "POST",
    body: datos
  })
  .then(respuesta => respuesta.json())
  .then(respuesta => {
  }).catch(error => console.log("error", error));
};

/*-----------------------ENVIO FORMULARIO CONTACTO -------------------------------*/

 
formContacto.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validarFormContacto()) {
    confirm("Pulsa aceptar para enviar el formulario");
    enviarFormularioContacto();
    }
  });

const enviarFormularioContacto = () => {
  const datos = new FormData(formContacto);
  fetch("http://localhost:3000/contacto-form", {
    method: "POST",
    body: datos
  })
  .then(respuesta => respuesta.json())
  .then(respuesta => {
  }).catch(error => console.log("error", error));
};