console.log("Hola mundo!");

var intentos = 3;

function ingresarNombre() {
   let nombre = prompt("Por favor, ingresa tu nombre:");

    if (nombre != null && nombre !== "") {
        alert("Hola, " + nombre + "! Bienvenido a nuestra página.");
        elegirPlan();
    } else {
        intentos--;
        if (intentos > 0) {
            alert("No ingresaste tu nombre. Te quedan " + intentos + " intentos.");
            ingresarNombre();
        } else {
            alert("No ingresaste tu nombre después de tres intentos. Recargá la página!.");
        }
    }
}

ingresarNombre();

function elegirPlan() {
    let opcion = prompt("Elige una opción:\n\n1) Starter\n2) Basic\n3) Advanced\n4) Personalized");
    let cuotas = parseInt(prompt("Ingrese el total de cuotas a pagar:"));

    if (opcion != null && opcion !== "" && cuotas != null && cuotas > 0) {
        let seleccion = parseInt(opcion);
        let precio;

        switch (seleccion) {
            case 1:
                precio = 5000;
                break;
            case 2:
                precio = 10000;
                break;
            case 3:
                precio = 15000;
                break;
            case 4:
                precio = 20000;
                break;
            default:
                alert("La opción ingresada no es válida. Por favor, recarga la página e intenta nuevamente.");
                return;
        }

        let precioPorCuota = precio / cuotas;
        alert("El precio a pagar por mes será de: " + precioPorCuota);

        let total = precioPorCuota * cuotas;
        alert("El precio total para " + cuotas + " cuotas de la opción seleccionada es: $" + total);

    } else {
        alert("No ingresaste los valores correctamente. Por favor, recarga la página e intenta nuevamente.");
    }
}
