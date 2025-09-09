const Pregunta = prompt("¿Quierer seguir en el Front-End o en el Back-End? escribe 1 para Front-End o 2 para Back-End" );

let aprenderF;
let aprenderB;
if (Pregunta == 1) {
    const aprenderF = prompt("En la parte de Front-End ¿Quieres seguir con React o Vue? Escribe 1 para React o 2 para Vue") 
}else if (Pregunta == 2) {
    const aprenderB = prompt("En la parte de Back-end ¿Quieres seguir con C# o Java? Escribe 1 para C# o 2 para Java")
} else{
    alert("¡No ingresaste un área válida!")
}


if (Pregunta == 1){
    if (aprenderF == 1){
        alert("Elegiste aprender Fronten-End y seguir con React")
    }
    if (aprenderF == 2) {
        alert("Elegiste aprender Fronten-End y seguir con Vue")
    }
};
if (Pregunta == 2) {
    if (aprenderB == 1) {
        alert("Elgiste aprender Back-End y seguir con C#")
    }
    if (aprenderB == 2) {
        alert("Elgiste aprender Back-End y seguir con Java")
    }
};

const Especializacion = prompt("¿Quieres seguir especializandote en el área elegida o seguir aprendiendo para desarrollador FullStack? escirbe 1 para seguir especializandote o 2 para FullStack ");    
if (Especializacion == 1) {
    alert("Elegiste seguir especializandote en el área elegida. Muy bien!")
}else if (Especializacion == 2) {
    alert("Elegiste seguir aprendiendo para llegar a ser Desarrollador FullStack. Muy bien!")
}

let Tecnologia = prompt("¿Qué otra tecnologia te gustará aprender?")
alert(`Genial! ${Tecnologia} es una muy buena opción para aprender.`)

let Continuar = prompt("¿hay alguna otra tecnologia que te gustaria aprender? para continuar escribe 'ok', sino para salir escribe cualquier otra cosa.")
while (Continuar == "ok") {
    let otraTec = prompt("¿Que otra tecnologia te gustaría aprender?")
    alert(`Super! ${OtraTec} Otra excelente tecnología.` )
    Continuar = prompt("¿hay alguna otra tecnologia que te gustaria aprender? para continuar escribe 'ok', sino para salir escribe cualquier otra cosa.")
}