let nombre = prompt("¿Cuál es tu nombre?");
let anios = prompt("¿Cuántos años tenes?");
let leng = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}, tenes ${anios} años y estás aprendiendo ${leng}`); //template Strings. es MUCHO mas legible y mas comodo.

let respuesta = prompt("¿Te gusta estudiar " + leng + " ? Responde con 1 para SI y 2 para NO.")
if (respuesta == 1) {
    alert("Muy bien! Segui estudiando y tendrás mucho exito")
}
else {
    alert("Oh, que pena... ¿Ya intentaste aprender otros lenguajes? ")
}