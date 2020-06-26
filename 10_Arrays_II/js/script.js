// Declaración e inicialización del array
let numbers = [5, 3, 2, 4, 1];
let words = ['hola', 'adiós', 'buenas', 'mañana', 'tarde']

// ###############################################################
/* 
    Arrays - Propiedad
        .length -> devuelve el número de posiciones que contiene el array
 */

/* console.log(numbers.length); */

// ###############################################################
/* 
    Arrays - Métodos 
        Array.isArray(variable a evaluar) -> Devuelve true si la variable es una array
*/

/* let number = 4;

console.log(Array.isArray(number)); // Devuelve false porque la variable "number" no es un array
console.log(Array.isArray(numbers)); // Devuelve true porque la variable "numbers" sí es un array */

// ==============================================================
/* 
        Eliminar un elemento
            .shift() -> Elimina el primer elemento del array y devuelve ese elemento
            .pop() -> Elimina el último elemento de un array y devuelve ese elemento
*/

/* console.log(numbers); // Devuelve [1, 2, 3, 4, 5] */
/* console.log(numbers.shift()); // Devuelve el elemento que eliminamos: 1. Este elemento podemos guardarlo en una variable */
/* let deleteElement = numbers.shift(); // Esta variable guardará el número 1 que hemos eliminado del array
console.log(deleteElement); // Devuelve 1, que es el elemento eliminado y guardado en la variable */
/* console.log(numbers); // Devuelve [2, 3, 4, 5]. Como vemos, el 1 ha sido eliminado */
/* console.log(numbers.pop()); //Devuelve el elemento eliminado: 5 */
/* console.log(numbers); // Devuelve [1, 2, 3, 4]. Como vemos, el 5 ha sido eliminado */

// =================================================================
/* 
        Añadir elementos
            .push(element1, element2, ...) -> Añade uno o más elementos al final del array y devuelve la nueva longitud
            .unshift(element1, element2, ...) -> Añade uno o más elementos al comienzo del array y devuelve la nueva longitud
*/

/* console.log(numbers); // Devuelve [1, 2, 3, 4, 5]
let nuevaLong = numbers.push(6, 7, 8); // Guardamos la longitud del array una vez que hemos añadido los tres elementos nuevos
console.log(nuevaLong); // Devuelve 8, que es la nueva longitud del array
nuevaLong = numbers.unshift(0); Guardamos ahora en la variable la nueva longitud, una vez añadido el nuevo elemento
console.log(nuevaLong); // Devuelve 9, que es la longitud que tiene ahora el array
console.log(numbers);  // Mostramos el array con todos los nuevos elementos añadidos: [0, 1, 2, 3, 4, 5, 6, 7, 8] */


// =================================================================
/* 
        .indexOf(element) -> Devuelve el primer índice del elemento que coincida con el valor especificado,
                    o -1 si no se ha encontrado ninguno
*/

/* console.log(numbers);
console.log(numbers.indexOf(2)); // Devuelve 1, que es la posición en la que se encuentra el elemento "2"
console.log(numbers.indexOf(6)); // Devuelve -1 porque el 6 no existe en nuestro array */


// ===================================================================
/* 
        .lastIndexOf(element) -> Devuelve el último índice del elemento que coincida con el valor especificado,
                        o -1 si no se encuentra ninguno
*/

// Vamos a modificar el array para añadir un elemento repetido
// Vamos a añadir un 1 al final del array con el método push()
/* numbers.push(1);
console.log(numbers); // Ahora el array vemos que es [1, 2, 3, 4, 5, 1]
// Ahora buscamos la posición en la que se encuentra el elemento "1"
console.log(numbers.indexOf(1)); // En este caso devuelve la posición del primer elemento coincidente con el requerido: o 
console.log(numbers.lastIndexOf(1)); // En este caso devuelve la posición del último elemento coincidente: 5 */


// =======================================================================
/* 
        .reverse() -> Invierte el orden de los elementos del array
*/

/* console.log(numbers); // Devuelve [1, 2, 3, 4, 5]
numbers.reverse(); 
console.log(numbers); // Devuelve [5, 4, 3, 2, 1] */


// ==========================================================================
/* 
        .join('separador') -> Devuelve un string con el separador que idiquemos, por defecto son comas
*/

/* console.log(numbers.join(' - ')); // Devuelve '1 - 2 - 3 - 4 - 5'. Como podemos ver, se han incluido tambien
// los espacios que hemos añadido junto al guión. */
/* // Podemos guardarlo en una variable:
let arrayString = numbers.join(' - ');
console.log(arrayString); // Devuelve lo mismo que en el ejemplo anterior pero ahora lo tenemos guardado en memoria */


// ==========================================================================
/* 
        .splice(a, b, items) -> Cambia el contenido de un array eliminando elementos existentes 
                                y/o agregando nuevos elementos.
                                    a - Índice de inicio
                                    b - Número de elementos (opcional)
                                    items - Elementos a añadir en el caso de que se añadan (opcional)
*/

/* console.log(numbers); // Vemos el array [1, 2, 3, 4, 5] */
/* numbers.splice(3); // Elimina del array todos los elementos desde la posición a (en este caso 3) en adelante */
/* numbers.splice(2,2); // Desde la posición a (en este caso 2), eliminaría el número de valores que le indiquemos con b (en este caso 2, o sea, eliminaría las posiciones 2 y 3) */
/* numbers.splice(1, 2, 8, 9, 10); // Desde la posición a (en este caso la 1), elimina los valores indicados en b (en este caso 2, por lo tanto elimina los valores de las posiciones 1 y 2) 
                                    e insertaría en su lugar todos los valores que se indiquen a partir de la segunda coma, que serían los items  */
// Si quisiéramos simplemente insertar, sin eliminar elementos, el valor b tendría que ser 0
/* numbers.splice(1, 0, 8, 9, 10); // Con esto insertaríamos, a partir de la posición a (en este caso la 1), los valores indicados en los items                                    
console.log(numbers); // Devuelve el array como quedó después del splice() */


// ============================================================================
/* 
        .slice(a, b) -> Extrae elementos de un array desde el índice a (incluido) hasta el índice b (no incluido) y lo devuelve como un nuevo array. 
                        Si no esixte b, lo hace desde a hasta el final. 
                        Si no existe ni a ni b, hace una copia del original
*/

/* console.log(numbers);
let newNumbers = numbers.slice(); // Guardamos en la variable newNumbers una copia exacta del array numbers
newNumbers = numbers.slice(2); // Guarda en la variable newNumbers un array con los valores encontrados desde la posición a (en este caso 2) en adelante
newNumbers = numbers.slice(1, 4); // Guarda en la variable newNumbers un array con los valores encontrados desde la posición a (en este caso 1) hasta la posición b (en este caso la 4)
console.log(newNumbers); // Devuelve el array guardado en la variable newNumbers
 */


//  ========================================================================
 /* 
        .sort() -> Ordena un array. Si el array es de strings lo ordena alfabéticamente
        La forma de ordenar un array numérico lo veremos en el tema Array III  */

 console.log(words.sort())