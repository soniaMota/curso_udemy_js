/* 1 -> Solicita un nombre, la edad y muestra por consola el mensaje "Hola ________,
tienes ______ años y el año que viene tendrás _____ años". Realiza el ejercicio con
prompt(mensaje) y haz uso de los template strings */

let name = prompt('Introduce tu nombre');
let age = parseInt(prompt('Introduce tu edad')); // Lo que se recoge a través de la función prompt(),
// JavaScript lo convierte a string. Para que este dato sea un entero tenemos que hacer la 
// conversión con parseInt()

console.log(`Hola ${name}, tienes ${age} años y el año que viene tendrás ${age+1} años`);

