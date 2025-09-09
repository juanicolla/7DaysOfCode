function sumar (a,b ) {
    return a + b;
};

function restar (a, b) {
    return a - b;
};

function multiplicar (a, b) {
    return a * b;
};

function dividir (a, b) {
    if (b === 0) {
        return "no se puede dividir por 0"
    }
    return a / b;
};

while (true) {
    let opcion = prompt(
        `
        Elige una operación:
        1. Suma
        2. Resta
        3. Multiplicación
        4. División
        5. Salir 
        `
    );

    if (opcion == 5){
        alert("¡Hasta la próxima!")
        break;
    }

    let num1 = Number(prompt("Ingresa el primer número: "));
    let num2 = Number(prompt("Ingresa el segundo número: "));
    let resultado;

    switch (opcion) {
        case "1":
            resultado = sumar(num1, num2);
            break;
        case "2":
            resultado = restar(num1, num2);
            break;
        case "3":
            resultado = multiplicar(num1, num2);
            break;
        case "4":
            resultado = dividir(num1, num2);
            break;
        default:
            alert("Opción inválida. Intenta de nuevo.");
            continue;
    }

    alert(`Resultado: ${resultado}`);

};
