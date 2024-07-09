

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formulario-pacientes");
  const tablaPacientes = document.querySelector("#body-tabla-pacientes");

  const fetchPacientes = async () => {
    try {
      const respuesta = await axios.get("http://localhost:8080/pacientes");
      const pacientes = respuesta.data;
      tablaPacientes.innerHTML = "";
      pacientes.forEach((paciente) => {
        const fila = document.createElement("tr");
        const celdaNombre = document.createElement("td");
        const celdaApellido = document.createElement("td");
        const celdaDni = document.createElement("td");
        const celdaAcciones = document.createElement("td");

        celdaNombre.textContent = paciente.nombre;
        celdaApellido.textContent = paciente.apellido;
        celdaDni.textContent = paciente.dni;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
          eliminarPaciente(paciente.id);
        });

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", () => {
          window.location.href = `edit.html?id=${paciente.id}`;
        });

        celdaAcciones.appendChild(botonEditar);
        celdaAcciones.appendChild(botonEliminar);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellido);
        fila.appendChild(celdaDni);
        fila.appendChild(celdaAcciones);

        tablaPacientes.appendChild(fila);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarPaciente = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/pacientes/${id}`);
        fetchPacientes()
    } catch (error) {
        console.log(error);
    }
  }

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nuevoPaciente = {
        nombre: document.querySelector("#nombre").value,
        apellido: document.querySelector("#apellido").value,
        dni: document.querySelector("#dni").value
    }
    try {
        await axios.post(`http://localhost:8080/pacientes/`, nuevoPaciente);
        formulario.reset()
        fetchPacientes()
    } catch (error) {
        console.log(error);
    }
  })  

  fetchPacientes()

});
