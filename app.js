// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreamigos = [];

function agregarAmigo(){
    const input = document.getElementById('nombre');
    const nombre = input.value;

// Validar si el campo está vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al array
  nombreamigos.push(nombre);

  // Mostrar en la lista 
  const lista = document.getElementById("listaAmigos");
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombre;
  lista.appendChild(nuevoElemento);

  // Limpiar el campo
  input.value = "";
}
