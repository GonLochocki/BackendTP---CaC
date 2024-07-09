document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formulario-edicion");
  const parametrosURL = new URLSearchParams(window.location.search);
  const idPaciente = parametrosURL.get("id");
  const mensaje = document.querySelector("#mensaje");

  const fetchPaciente = async (id) => {
    try {
      const respuesta = await axios.get(
        `http://localhost:8080/pacientes/${id}`
      );
      const paciente = respuesta.data;

      document.querySelector("#nombre").value = paciente.nombre;
      document.querySelector("#apellido").value = paciente.apellido;
      document.querySelector("#dni").value = paciente.dni;
    } catch (error) {
      console.log(error);
    }
  };

  if (idPaciente) {
    fetchPaciente(idPaciente);
  }

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pacienteActualizado = {
      nombre: document.querySelector("#nombre").value,
      apellido: document.querySelector("#apellido").value,
      dni: document.querySelector("#dni").value,
    };

    try {
      await axios.put(
        `http://localhost:8080/pacientes/${idPaciente}`,
        pacienteActualizado
      );

      setTimeout(() => {
        window.location.href = "index.html"
      }, 3000);

      mensaje.innerHTML = "Actualizado correctamente. Redirigiendo a pagina principal"
      
    } catch (error) {
      console.log(error);
    }
  });
});
