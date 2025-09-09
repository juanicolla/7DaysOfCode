const numeroSecreto = Math.floor(Math.random() * 11);
let intentos = 3;
let acierto = false

while (intentos > 0 && !acierto){
    let guess = prompt("Adivina el número entre el 0 y el 10:") 
    if (guess == numeroSecreto) {
        alert(`¡Adivinaste el número secreto!. El número secreto era ${numeroSecreto}`);
        acierto = true;
    }else {
        intentos --;
        if (intentos > 0){
            alert(`Error. Te quedan ${intentos} intentos.`)}
        }
        if (guess > numeroSecreto){
            alert("El número secreto es menor al ingresado.")
        } else if (guess < numeroSecreto) {
            alert("El número secreto es mayor al ingresado.")
        }
    }

if (!acierto) {
    alert(`Se acabaron los intentos. El número era ${numeroSecreto}`)
}

