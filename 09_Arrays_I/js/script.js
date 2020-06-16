/* 
- Son estructuras que nos permiten almacenar varios datos y agruparlos
- Se pueden llenar concualquier tipo de dato válido en JavaScript y deben ir separados por comas
- Se pueden mezclar tipos de datos distintos (NO ES RECOMENDABLE)
- Se declaran con corchetes []
- Pueden declararse vacíos o con un contenido ya establecido
- Pueden añadirse o eliminarse elementos en el momento que queramos

    let array = []; // Array vacío
    let numeros = [1,2,3,4,5]; // Array con contenido inicial
*/

// Declaración del array vacío
/* let numeros = []; // La longitud es 0 */ 

// Declaración arrays con contenido
let numeros = [1,2,3,4,5];
let palabras = ['hola', 'estamos', 'en', 'YouTube'];
let booleans = [true, true, false];

console.log(numeros); //La longitud es 5, aunque su índice mayor sería el 4

// Si queremos acceder a algún valor guardado en el array lo haremos desde su posición
console.log(numeros[0]); // La posición 0 devuelve el 1, la posición 1 el 2, y así sucesivamente

// Si queremos acceder a una posición que no existe en el array (en este caso, 
// cualquier posición a partir de la 5 incluida), devolverá "undefined", es decir,
// que no existe esa posición

// Podemos hacer cualquier operación:
console.log(numeros[2] + numeros[4]); // Esto nos devolverá la suma de 3 + 5, que son los valores guardados en las posiciones 2 y 4

console.log(`La palabra "${palabras[3]}" tiene ${palabras[3].length} letras`); //Devuelve la longitud de la palabra "YouTube" que es la que se encuentra en la posición 3
