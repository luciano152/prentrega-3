document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('prestamo-form');
    const montoPrestamoElem = document.getElementById('monto-prestamo');
    const cantidadCuotasElem = document.getElementById('cantidad-cuotas');
    const interesesElem = document.getElementById('intereses');
    const totalElem = document.getElementById('total');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores ingresados por el usuario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const monto = parseFloat(document.getElementById('monto').value);
        const cuotas = parseInt(document.getElementById('cuotas').value);

        // Validar los valores ingresados
        if (isNaN(monto) || isNaN(cuotas) || monto <= 0 || cuotas <= 0) {
            alert("Por favor, ingresa valores válidos para el monto y las cuotas.");
            return;
        }

        // Simular los cálculos del préstamo
        const tasaInteres = 0.05; // 5% de interés por cuota
        const interesesTotales = monto * tasaInteres * cuotas;
        const totalPagar = monto + interesesTotales;

        // Actualizar los resultados en el HTML
        montoPrestamoElem.textContent = `$${monto.toFixed(2)}`;
        cantidadCuotasElem.textContent = `${cuotas}`;
        interesesElem.textContent = `$${interesesTotales.toFixed(2)}`;
        totalElem.textContent = `$${totalPagar.toFixed(2)}`;
    });
});
