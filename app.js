// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreamigos = [];

function agregarAmigo(){
    const input = document.getElementById('amigp');
    const nombre = input.value;
// Validar si el campo está vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  // Agregar al array
  nombreamigos.push(nombre);
  // Limpiar el campo
  input.value = "";
}

function mostrarAmigos() {
  //Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");
  // Limpiar la lista existente
  lista.innerHTML = "";
  //Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (nombreamigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Generar índice aleatorio
  const indice = Math.floor(Math.random() * nombreamigos.length);

  // Obtener nombre sorteado
  const nombreSorteado = nombreamigos[indice];

  // Mostrar resultado en el <ul id="resultado">
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  const item = document.createElement("li");
  item.textContent = "Amigo sorteado: " + nombreSorteado;
  resultado.appendChild(item);
}
