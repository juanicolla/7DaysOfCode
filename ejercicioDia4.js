const numeroSecreto = Math.floor(Math.random() * 11);
let intentos = 3;
let acierto = false

while (intentos > 0 && !acierto){
    let guess = prompt("ADivina el número entre el 0 y el 10:") 
    if (guess == numeroSecreto) {
        alert("¡Adivinaste el número secreto!.");
        acierto = true;
    }else {
        intentos --;
        if (intentos > 0){
            alert(`Error. Te quedan ${intentos} intentos.`)}
        }
    }

if (!acierto) {
    alert(`Se acabaron los intentos. El número era ${numeroSecreto}`)
}

