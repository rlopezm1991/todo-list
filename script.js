// Captura el botón para mostrar el div y el botón para cerrar el div
const mostrarDivButton = document.getElementById("mostrarDiv");
const cerrarDivButton = document.getElementById("cerrarDiv");
const nuevaTareaDiv = document.getElementById("nuevaTarea");
const mainContent = document.querySelector("main");

// Agrega un manejador de eventos al botón para mostrar el div
mostrarDivButton.addEventListener("click", () => {
    // Aplica el efecto de desenfoque al contenido del main
    mainContent.classList.add("blur");
    // Muestra el div
    nuevaTareaDiv.style.height = "100%";
});

// Agrega un manejador de eventos al botón para cerrar el div
cerrarDivButton.addEventListener("click", () => {
    // Quita el efecto de desenfoque al contenido del main
    mainContent.classList.remove("blur");
    // Oculta el div
    nuevaTareaDiv.style.height = "0";
});
