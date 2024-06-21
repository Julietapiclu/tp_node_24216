const apiUrlCrud = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  const formCrud = document.querySelector("#user-form");
  const buscarBtn = document.querySelector("#buscar");
  const actualizarBtn = document.querySelector("#actualizar");
  const eliminarBtn = document.querySelector("#eliminar");

  buscarBtn.addEventListener("click", () => handleFormSubmit('buscar'));
  actualizarBtn.addEventListener("click", () => handleFormSubmit('actualizar'));
  eliminarBtn.addEventListener("click", () => handleFormSubmit('eliminar'));
});

const handleFormSubmit = async (action) => {
  const userId = document.querySelector("#userId").value;

  switch (action) {
    case 'buscar':
      await buscarUsuario(userId);
      break;
    case 'actualizar':
      await actualizarUsuario(userId);
      break;
    case 'eliminar':
      await eliminarUsuario(userId);
      break;
  }
};

const buscarUsuario = async (id) => {
  try {
    const response = await fetch(`${apiUrlCrud}/registro-form/${id}`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const datosUsuario = await response.json();
    console.log("Datos del usuario:", datosUsuario);
    // Procesa los datos del usuario según sea necesario
  } catch (error) {
    console.error("Error al buscar el usuario:", error);
    // Maneja el error adecuadamente
  }
};

const actualizarUsuario = async (id) => {
  // Ejemplo de datos de actualización
  const datosActualizacion = {
    nombre: "Nuevo Nombre",
    email: "nuevoemail@example.com"
  };

  try {
    const response = await fetch(`${apiUrlCrud}/registro-form/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datosActualizacion)
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const datosActualizados = await response.json();
    console.log("Usuario actualizado:", datosActualizados);
    // Procesa los datos de actualización según sea necesario
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    // Maneja el error adecuadamente
  }
};

const eliminarUsuario = async (id) => {
  try {
    const response = await fetch(`${apiUrlCrud}/registro-form/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    console.log("Usuario eliminado exitosamente");
    // Procesa la eliminación según sea necesario
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    // Maneja el error adecuadamente
  }
};
