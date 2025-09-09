const listaDeCompras = document.getElementById("listaDeCompras")

let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let lista = "";
let elemento = "";
let elementoAEliminar = "";
let index = 0;
let opcion = "";

while (true) {
    let opcion = prompt("¿Qué quieres hacer? 1-Agregar un alimento. 2.Eliminar un alimento. 3-Salir ");
    
    if (opcion == 1){
        
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

    }else if (opcion == 2){
        if (frutas.length === 0 && lacteos.length === 0 && congelados.length === 0 && dulces.length === 0){
            alert("La lista está vacía, no hay nada para eliminar.")
            continue;
        }
        
        alert(
            `
            Lista de compras:
            -Frutas: ${frutas.length ? frutas.join(", "): "Sin productos"}
            -Lácteos: ${lacteos.length ? lacteos.join(", "): "Sin productos"}
            -Congelados: ${congelados.length ? congelados.join(", "): "Sin productos"}
            -Dulces: ${dulces.length ? dulces.join(", "): "Sin productos"}
        `)
            
        let elementoAEliminar = prompt("¿Que elemento quieres eliminar?")
        
            
        if (frutas.includes(elementoAEliminar) == true){
        let index = frutas.indexOf(elementoAEliminar)
        frutas.splice(index,1)
        }else if (lacteos.includes(elementoAEliminar) == true){
        let index = lacteos.indexOf(elementoAEliminar)
        lacteos.splice(index, 1)
        }else if (congelados.includes(elementoAEliminar) == true){
        let index = congelados.indexOf(elementoAEliminar)
        congelados.splice(index, 1)
        }else if (dulces.includes(elementoAEliminar) == true){
        let index = dulces.indexOf(elementoAEliminar)
        dulces.splice(index, 1)
        }else{
        alert("¡No fue posible encontrar el elemento en la lista!.")
        }


        alert(
            `
            Lista de compras actualizada:
            -Frutas: ${frutas.length ? frutas.join(", ") : "Sin Productos"}
            -Lácteos: ${lacteos.length ? lacteos.join(", ") : "Sin Productos"}
            -Congelados:${congelados.length ? congelados.join(", ") : "Sin Productos"}
            -Dulces:${dulces.length ? dulces.join(", ") : "Sin Productos"}
            `)

    }else if (opcion == 3){
        alert(
            `
            Lista de compras:
            -Frutas: ${frutas.length ? frutas.join(", "): "Sin productos"}
            -Lácteos: ${lacteos.length ? lacteos.join(", "): "Sin productos"}
            -Congelados: ${congelados.length ? congelados.join(", "): "Sin productos"}
            -Dulces: ${dulces.length ? dulces.join(", "): "Sin productos"}
        `) 
        break;
    }else {
        alert("Opción no válida.");
    }
   
} 



    




