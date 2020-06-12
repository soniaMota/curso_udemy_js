/* Strings */
let cadena = 'Hola Mundo';

//Mostramos la cadena original
console.log('Cadena original: ' + cadena);

/* PROPIEDADES 
length -> Devuelve la longitud de la cadena
*/

/* console.log(cadena.length); */

/* MÉTODOS 
Todos los métodos devielven una cadena nueva, la cadena original no se modifica.*/

/* toUpperCase() -> Devuelve la cadena en mayúsculas */

/* console.log(cadena.toUpperCase()); //Devuelve una cadena nueva: 'HOLA MUNDO'
// Comprobamos que la variable cadena no ha sido modificada:
console.log(cadena); //Devuelve la cadena original: 'Hola Mundo'
// Si queremos que la cadena en mayúsculas quede guardada en una variable:
let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus); //Devolverá 'HOLA MUNDO' */


/* toLowerCase() -> Devuelve la cadena en minúsculas */

/* console.log(cadena.toLowerCase()); //Devuelve una cadena nueva: 'hola mundo'
//Para guardar la cadena nueva en una variable hacemos como en el ejemplo anterior:
let cadenaMinus = cadena.toLowerCase();
console.log(cadenaMinus); //Devolverá 'hola mundo' */

/* NOTA: Los métodos toUpperCase() y toLowerCase() son muy útiles para validar formularios */


/* indexOf(string) -> Devuelve la posición en la que se encuentra un caracter o un string dentro de una cadena. 
Si no lo encuentra devuelve -1 */

/* console.log(cadena.indexOf('Hola')); //Devuelve 0 porque la primera coincidencia, que es la H, se encuentra en la posición 0, que es la primera
console.log(cadena.indexOf('o')); //Devuelve 1 porque la primera o que encuentra está en la posición 1 */


/* replace(valor a buscar, valor nuevo) -> Reemplaza el fragmento de la cadena que le digamos por el valor nuevo */

/* console.log(cadena.replace('Mundo', 'Youtube')); //Devuelve 'Hola Youtube' */


/* substring(inicio [, fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye) 
Si no incluimo el fin en los parámetros, extraería hasta el final
NOTA: Los corchetes [] incluidos en el paréntesis de los parámetros indican que, lo que va dentro, es opcional*/

/* console.log(cadena.substring(3)); //Devuelve desde la posición 3 (incluída) hasta el final: 'a Mundo'
console.log(cadena.substring(5, 8)); //Devuelve desde la posición 5 (incluída) hasta la 8 (excluída): 'Mun' */


/* slice(inicio [, fin]) -> Igual que substring pero admite valores negativos. 
Si ponemos un valor negativo empezará a contar desde el final de la cadena hacia el principio
Si no se incluye el fin extrae hasta el final
Ejemplo: (2, -4) -> Empieza a contar en el tercer caracter (0, 1 y 2 -> el 2 es el tercer caracter) 
y los 4 últimos los ignora */

/* console.log(cadena.slice(3)); //La respuesta es exactamente la misma que para substring(3): 'a Mundo'
console.log(cadena.slice(-3)); //Devuelve 'ndo', o sea, los tres últimos caracteres
console.log(cadena.slice(0, -6)); //Devuelve desde el caracter que está en la posición 0 e ignora los 6 caracteres últimos: 'Hola'
//Es como si hubiéramos puesto: console.log(cadena.slice(0, 4)); */


/* trim() -> Elimina los espacios al inicio y al final de la cadena */

/* cadena = '   Hola Mundo   '; //Modifico el valor de la variable cadena introduciendo espacios por delante y por detrás

console.log('Cadena con espacios: ' + cadena);
console.log(cadena.trim()); //Devuelve la cadena sin los espacios delanteros y traseros
console.log(cadena); //Devuelve '   Hola Mundo   ' porque la variable no se modificó con el trim() */

/* NOTA: El método trim() también se utiliza mucho en formularios para validar datos evitando los 
espacios que el usuario haya podido introducir al principio o al final por error */


/* Los siguientes tres métodos y los Template Strings se han incluido en la nueva especificación --ES6-- */


/* startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. 
Devuelve true o false */

/* console.log(cadena.startsWith('H')); //Devuelve true porque 'Hola mundo' comienza por 'H'
console.log(cadena.startsWith('h')); //Devuelve false porque JavaScript distingue entre mayúsculas y minúsculas

console.log(cadena.startsWith('M', 5)); //Devuelve true porque, comenzando a contar desde la posición 5, el caracter que se encuentra es 'M'
console.log(cadena.startsWith('M', 4)); //Devuelve false porque el caracter que hay en la posición 4 es un espacio */


/* endsWith(valor [,longitud]) -> Sirve para saber si la cadena termina con ese valor.
Devuelve true o false. El valor que indicamos en longitud será la cantidad de caracteres que 
queremos tener en cuenta para buscar ese caracter final */

/* console.log(cadena.endsWith('o')); //Devuelve true porque 'Hola Mundo' termina en 'o'
console.log(cadena.endsWith('a', 4)); //Devuelve true porque en una longitud de 4 caracteres (0, 1, 2, 3 = 4 caracteres)
//el caracter que se encuentra en esa posición (3) es 'a'
console.log(cadena.endsWith('Mundo')); //Devuelve true. Se pueden buscar caracteres o cadenas.
console.log(cadena.endsWith('Mundo', 7)); //Devuelve false. Al indicarle una longitud de 7, la cadena en la que buscará
//el valor indicado será 'Hola Mu', por lo tanto, no terminaría en la cadena 'Mundo'
console.log(cadena.endsWith('mundo')); //Devuelve false porque la palabra 'mundo' que buscamos tiene la primera letra en minúsculas
//y la de la cadena original es 'Mundo', con la M en mayúsculas */


/* includes(valor[, incicio]) -> Igual que indexOf pero devuelve true o false */

/* console.log(cadena.includes('n')); //Devuelve true porque 'Hola Mundo' contiene una 'n'
console.log(cadena.includes('t')); //Devuelve false porque 'Hola Mundo' no tiene ninguna 't'
console.log(cadena.includes('a', 2)); //Devuelve true porque, comenzando por la posición 2, que correspondería a la 'l'
//se encuentra una 'a'
console.log(cadena.includes('a', 4)); //Devuelve false porque la posición de inicio que hemos indicado corresponde al espacio */


/* repeat(valor) -> Repite el string o caracter indicado el número de veces que le indiquemos */

/* console.log('#'.repeat(30)); //Devuelve una línea con el caracter '#' repetido 30 veces
console.log(cadena.repeat(3)); //Devuelve nuestro 'Hola Mundo' escrito, seguido, tres veces */


/* Template Strings */

/* let nombre = 'Sonia';
let apellido = 'Mota';
let edad = 52;

//Si queremos imprimir la frase 'Hola Sonia Mota, tienes 52 años', como sabemos hasta ahora sería:
console.log('Hola ' + nombre + ' ' + apellido + ', tienes ' + edad + ' años.');

//Con Template Strings sería usando, como comillas, la tilde grave (`) y, para las variables, rodearlas por ${}
console.log('#'.repeat(30)); //Esto solo lo hago para separar, en la consola, las dos frases impresas de las dos formas distintas
console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años.`); */

/* NOTA: Entre las llaves se pueden incluir cualquier operación de JavaScript, como por ejemplo arrays, 
condicionales, objetos, etc */

/* console.log(`Hola ${nombre} ${apellido}, el año que viene tendrás ${edad + 1} años.`); */


/* link para ver los métodos de los strings
https://www.w3schools.com/jsref/jsref_obj_string.asp
 */