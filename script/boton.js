document.addEventListener("DOMContentLoaded", function() {
    const decreaseBtn = document.querySelector(".decrease");
    const increaseBtn = document.querySelector(".increase");
    const cantidadInput = document.querySelector(".cantidad");
    const precio = 106.99; // Precio por unidad

    decreaseBtn.addEventListener("click", function() {
        let cantidad = parseInt(cantidadInput.value);
        if (cantidad > 1) {
            cantidad--;
            cantidadInput.value = cantidad;
        }
    });

    increaseBtn.addEventListener("click", function() {
        let cantidad = parseInt(cantidadInput.value);
        if (cantidad < 10) {
            cantidad++;
            cantidadInput.value = cantidad;
        }
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        let cantidad = parseInt(cantidadInput.value);
        let total = cantidad * precio;

        // Redireccionar al usuario al formulario con el total calculado
        window.location.href = "../html/formulario.html";
    });
});
