/* 8 -> Dado un array de letras, solicita un número de DNI y calcula qué letra le corresponde. 
El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el 
resultado del módulo del número introducido entre 23 
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

let dni

// Controlamos que el número introducido tenga una longitud de 8 dígitos y no sea negativo
do{
    dni = prompt('Introduce tu número de DNI para averiguar la letra que le corresponde\nEl número debe tener 8 dígitos')
}while(isNaN(dni || dni.length == 8 && parseInt(dni) > 0))

// Obtenemos la posición en el array de la letra que le corresponde a dicho número
let posicion = dni % 23

// Mostramos por consola el número del dni con su letra
console.log(`Tu DNI completo es: ${dni}${letras[posicion]}`)