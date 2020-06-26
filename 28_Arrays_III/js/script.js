/* Arrays - Métodos II */
// =======================================================================================
/* .from(iterable) -> Convierte en array el elemento iterable (iterable: que se puede recorrer) */

/* let word = 'Hola mundo' */

/* console.log(Array.from(word)) // Devuelve un array con cada uno de los caracteres del string "word" */
// Se consigue lo mismo con el método split() de los strings
/* console.log(word.split('')) */

// =========================================================================================
/* .sort([callback]) -> Ordena los elementos de un array alfabéticamente(valor Unicode).
    Si le pasamos un callback (función que ejecuta a su vez otra función, en este caso pasamos
    una función que ejecutará el método sort()) los ordena en función del algoritmo que le 
    pasemos. */

/* const letters = ['t', 'h', 'e', 'a', 'b']

console.log(letters.sort()) // Devuelve ["a", "b", "e", "h", "t"] */

/* Ordenar un array numérico: El valor Unicode de los números no coincide siempre
con su ordinal. Por ello necesitamos pasarle un algoritmo en una función, indicando
cómo queremos que se ordene. 
Esto se hace comparando dos valores. Todos los métodos que reciben un callback lo que
hacen internamente es recorrer el array a través de pares dentro de un bucle */

/* const numbers = [8, 100, 1, 22, 3] */
// Si queremos ordenar de menor a mayor (ASCENDENTE): 
/* console.log(numbers.sort((a, b) => a-b)) // Devuelve [1, 3, 8, 22, 100] */
// Vamos a ver lo que ha hecho internamente:
// Por cada vuelta va comparando los dos valores que recoge.La función sería como sigue:

/* function menorMayor(a, b){
    if(a-b > 0) return 1 // a es mayor que b
    if(a == b) return 0 // a y b son iguales 
    if(a-b < 0) return -1 // a es menor que b
} */

// De esta forma va comparando y ordenando

// Si queremos el orden de mayor a menor (DESCENDENTE):
/* console.log(numbers.sort((a, b) => b-a)) // Devuelve [100, 22, 8, 3, 1] */
// Esto es porque hemos hecho la operación al contrario, es decir, hemos comparado
// el segundo número con el primero restándolo por lo que la función sería:

/* function mayorMenor(a, b){
    if (b-a > 0) return 1 // b es mayor que a
    if (b == a) return 0 // b y a son iguales
    if (b-a < 0) return -1 // b es menor que a
} */

// ====================================================================================
/* .forEach(callback(currentValue, [index])) -> Ejecuta la función indicada una vez por 
    cada elemento del array. */

    /* const numbers = [8, 100, 1, 22, 3] */

    /* numbers.forEach((number) => console.log(number)) */
    //Devuelve:
    // 8
    // 100
    // 1
    // 22
    // 3

// Como vemos, hace lo mismo que un for...of pero con una sintaxis más sencilla

// Podemos pasarle también el parámetro index, con lo que nos devolverá también su posición
/* numbers.forEach((number, index) =>
    console.log(`${number} está en la posición ${index}`)) */

// =======================================================================================
/* .some(callback) -> Comprueba si, al menos, un elemento del array cumple la condición */


// =======================================================================================
/* .every(callback) -> Comprueba si todos los elementos del array cumplen la condición */


// =======================================================================================
/* .map(callback) -> Transforma todos los elementos del array y devuelve un nuevo array */

// =======================================================================================
/* .filter(callback) -> Filtra todos los elementos del array que cumplan la condición y
    devuelve un nuevo array */

// =======================================================================================
/* .reduce(callback) -> Reduce todos los elementos del array a un único valor */



// ========================================================================================
/* Enlace Arrays en JavaScript
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array */


