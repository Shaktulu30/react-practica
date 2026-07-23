const lista = document.getElementById("lista");

const textos = ["Primero", "Segundo", "Tercero"];
textos.forEach(texto => {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = texto; 

  lista.appendChild(nuevoElemento); //linea 5 6 y 8 codigo imperativo puro
});
