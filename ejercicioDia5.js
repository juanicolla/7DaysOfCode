const listaDeCompras = document.getElementById("listaDeCompras")

let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let lista = "";
let elemento = "";

let agregar = prompt("¿Deseas agregar un ítem a la lista de compras? (si/no) ");

while (agregar === 'si') {
    let lista = prompt("¿En qué lista quieres agregar el alimento? las listas son las siguientes: frutas, lacteos, congelados, dulces")
    if (lista == "frutas") {
        let elemento = prompt("Escribe el nombre de la fruta:")
        frutas.push(elemento)
    }else if (lista == "lacteos"){
        let elemento = prompt("Escribe el nombre del lácteo:")
        lacteos.push(elemento)
    }else if (lista == "congelados"){
        let elemento = prompt("Escribe el nombre del producto congelado:")
        congelados.push(elemento)
    }else if (lista == "dulces"){
        let elemento = prompt("Escribe el nombre del dulce:")
        dulces.push(elemento)
    }else {
        alert("No existe esa lista. Comprueba si está bien escrito.")
    }

    agregar = prompt("¿Quieres agregar otro alimento? (si/no)")
} 

if (agregar === "no") {
    alert(
        `
        Lista de compras:
        -Frutas: ${frutas.length ? frutas.join(", "): "Sin productos"}
        -Lácteos: ${lacteos.length ? lacteos.join(", "): "Sin productos"}
        -Congelados: ${congelados.length ? congelados.join(", "): "Sin productos"}
        -Dulces: ${dulces.length ? dulces.join(", "): "Sin productos"}
   `)
}






