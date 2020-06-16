/* Ejercicio: ordenar 3 números de mayor a menor (Permutaciones con tres elementos)
Posibilidades -> 3!(factorial de 3) = 3*2*1 = 6
abc = 321
acb = 312
bac = 231
bca = 132
cab = 123
cba = 213
*/

// Definición e inicialización de constantes
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');
// Estas constantes son las que se recogen en el documento html "index.html"

// Definición e inicialización de variables
let a = prompt('Introduzca el primer número');
let b = prompt('Introduzca el segundo número');
let c = prompt('Introduzca el tercer número');
// Las variables obtendrán el valor del número que se introduzca por teclado
// El método prompt('mensaje') muestra, en una ventana emergente el mensaje indicado por parámetro
// con un input donde el usuario escribirá lo que se le pida

// La propiedad textContent indica cómo se escribe, lo que se le indica, en el html
numbers.textContent = `Los números introducidos son ${a}, ${b}, ${c}`

/* Resolución del ejercicio */

// La primera condición evalúa si a es el mayor de los tres números que tenemos
if(a>b && a>c){
    //Si ha entrado por aquí es porque a es el mayor. Ahora hay que averiguar cuál, entre b y c, es el mayor
    if(b>c){
        // Si entra por aquí es porque b es mayor que c, con lo que ya sabemos que el mayor es a, luego va b y por último c
        result.textContent = `El orden es: ${a}, ${b}, ${c}`
    }else{
        // Si entra por aquí es porque c es mayor que b, con lo que el resultado sería a, c y b
        result.textContent = `El orden es: ${a}, ${c}, ${b}`
    }
// Si no entró por el primer if es porque a no es el mayor, por lo tanto tenemos que comprobar si es b el mayor
}else if(b>a && b>c){
    // Si ha entrado por aquí es porque b es el mayor. Ahora comprobamos cuál, entre a y c, es mayor
    if(a>c){
        // Si entra por aquí es porque el orden sería b, a, c
        result.textContent = `El orden es: ${b}, ${a}, ${c}`
    }else{
        //Si entra por aquí es que c es mayor que a, por lo que el orden es b, c, a
        result.textContent = `El orden es: ${b}, ${c}, ${a}`
    }
// Si no entró por ninguna de las dos condiciones anteriores es porque c es el mayor, por lo que debemos comprobar cuál, entre a y b es el mayor
}else{
    if(a>b){
        // Si entra por aquí el orden sería c, a, b
        result.textContent = `El orden es: ${c}, ${a}, ${b}`
    }else{
        // Si no entró por la anterior condición es porque b es mayor que a, luego el orden es c, b, a
        result.textContent = `El orden es: ${c}, ${b}, ${a}`
    }
}