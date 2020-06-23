/* 10 -> Dado una array que contiene ['azul', 'amarillo', 'rojo', 'verde', 'rosa'] 
determinar si un color introducido por el usuario a través de un prompt se encuentra 
dentro del array o no */

const colores = ['azul', 'amarillo', 'rojo', 'verde', 'rosa']
let color

do {
    color = prompt('Introduce un color').trim().toLowerCase()
    // Eliminamos espacios delante y detrás y convertimos a minúsculas para poder comprobar en el array
} while (color.length == 0) // Comprobamos que se ha introducido contenido

if(colores.indexOf(color) !== -1){
    console.log(`El color ${color} está en nuestro catálogo`)
}else{
    console.log(`El color ${color} no está en nuestro catálogo`)
}
