function manejarClick() {
    console.log('¡boton Clickeado!');
    alert('has hecho click en el boton!');

}

const boton = document.getElementById("miboton");

boton.addEventListener('click', manejarClick);