/* Funciones */

/* Ejemplo de una fución que muestra un saludo por pantalla */
/* Antes de ES6 */
/* function saludar(){
    console.log("Hola")
} */

/* Con ES6 */
/* const saludar = () => console.log("Hola")
 */// Si solo tenemos una línea de código no es necesario usar las llaves ({})

/* Para invocar la función y que se ejecute */
/* saludar()
 */
/* Ejemplo de función que salude a un usuario */
/* const saludarUsuario = (user) => console.log(`Hola ${user}`)
 */
/* Invocamos la función sin pasar parámetro */
/* saludarUsuario()
 */// Muestra "Hola undefined" porque la función espera un parámetro

/* Invocamos la función pasándole parámetro */
/* saludarUsuario('Pepe') // Pasamos el parámetro directamente
saludarUsuario(prompt('Introduce tu nombre de usuario')) // Pasamos el parámetro por lo 
// introducido por pantalla con la función prompt() */


/* Ejemplo de función que sume los parámetros recibidos */
// IMPORTANTE: Si ponemos las llaves, la función espera un return y devolvería undefined
/* const suma = (num1, num2) =>{
    return num1 + num2
} */

/* const suma = (num1, num2) => num1 + num2

console.log(suma(2, 3)) // Devuelve 5 en ambos casos */


/* Función que devuelve un valor u otro, dependiendo del código */
/* const suma = (num1, num2) => {
    if(num1 == 2) return num1 + num2
    else return num1
}

console.log(suma(2, 3)) // Devuelve 5
console.log(suma(7, 3)) // Devuelve 7, que es el valor de num1 */


/* Guardar en una variable el resultado devuelto por una función */
const suma = (num1, num2) => num1 + num2 // Declaración de la función

let result = suma(3, 5) // Guardamos el resultado de la función que invocamos en una variable

console.log(result) // Muestra 8