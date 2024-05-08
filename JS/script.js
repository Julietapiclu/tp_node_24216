/* Función para validar los campos obligatorios antes de enviar el formulario */

function validarCamposObligatorios() {
    
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var mensaje = document.getElementById('message').value.trim();
    
    // Verificar si los campos obligatorios están llenos
    if (nombre === '' || apellido === '' || email === '' || telefono === '' || mensaje === '') {
        alert('Por favor, completar todos los campos obligatorios.');
        return false;
    }
    
    return true;
}

/* Obtener el formulario */
var formulario = document.querySelector('.contact-form');

/*  Escucha el evento 'submit', si se produce, ejecuta la funcion que llama a validar campos */

formulario.addEventListener('submit', function(evento) {

    if (!validarCamposObligatorios()) {
        // Prevenir el envío del formulario si la validación falla
        evento.preventDefault();
    }
});



/*  Escucha evento boton borrar */

var confirmacion = () => confirm("¿deseas borrar todo el formulario?");

formulario.addEventListener('reset', function(evento) {

    if (!confirmacion()) {
        // Si el usuario canceló, prevenimos el comportamiento por defecto del evento
        evento.preventDefault();
    } 
    });


