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
/* .some(callback) -> Comprueba si, al menos, un elemento del array cumple la condición.
Devuelve true si alguno de los elemento cumple la condición y false si no la cumple ninguno */

/* const words = ['HTML', 'CSS', 'JavaScript', 'PHP'] */

/* console.log(words.some(word => word.length >8)) // Devuelve true */
// some() recorre el array y va obteniendo cada uno de los elementos y lo guarda en la variable
// indicada, en este caso "word". La condición que hemos pedido es que compruebe si alguno de
// los elementos tiene una longitud mayor que 8. En esta ocasión devuelve true ya que el
// elemento "JavaScript" tiene una longitud de 10.

// Si cambiamos la condición y la ponemos a mayor que 10, devolverá false
/* console.log(words.some(word => word.length >10)) */


// =======================================================================================
/* .every(callback) -> Comprueba si todos los elementos del array cumplen la condición.
Devuelve true si TODOS cumplen la condición. Funciona igual que el método some(), recorriendo
el array y guardando, en cada vuelta, el elemento encontrado en la variable indicada (word) */

/* const words = ['HTML', 'CSS', 'JavaScript', 'PHP'] */

/* console.log(words.every(word => word.length >2)) // Devuelve true porque todos los elementos
// tienen una longitud superior a 2
 */
// Pero si la condición es que la longitud sea superior a 3, devolverá false porque "CSS" y 
// "PHP" tienen una longitud de 3, no superior
/* console.log(words.every(word => word.length >3)) */


// ##################################################################################
// Los tres métodos que vienen a continuación funcionan recorriendo un array y devolviendo
// un nuevo array, en el caso de map() y filter(), y un único valor, en el caso de reduce().
// Su uso es como el de un bucle for, pero más sencillo de usar, por lo que es más habitual
// usar éstos que los bucles for

// =======================================================================================
/* .map(callback) -> Transforma todos los elementos del array y devuelve un nuevo array */

/* const numbers = [8, 100, 1, 22, 3] */

// Vamos a multiplicar por 2 cada valor del array
/* numbers.map(number => console.log(number * 2)) */ 
// Devuelve:
// 16 
// 200 
// 2 
// 44 
// 6

// Obtendríamos lo mismo usando un bucle for...of, pero vemos que es bastante más complicado
/* for(const number of numbers){
    console.log(number * 2)
} */

// Si queremos guardar el resultado en un array, usando map es tan sencillo como esto:
/* const numbers2 = numbers.map(number => number * 2) */

// Y si lo guardamos a través del for...of:
/* const numbers2 = []
for(const number of numbers){
    numbers2.push(number * 2)
} */

// Observamos la diferencia: con map() se hace todo en un línea; con for...of hemos necesitado tres

/* console.log(numbers2) */


// =======================================================================================
/* .filter(callback) -> Filtra todos los elementos del array que cumplan la condición y
    devuelve un nuevo array */

// Ejemplo para obtener un array con los elementos de otro array que sean mayor a 20
/* const numbers = [8, 100, 1, 22, 3] */

/* const numbers2 = numbers.filter(number => number > 20) 
// Obtenemos un array con los elementos [100, 22] */

// Vamos a ver la diferencia si hubiéramos utilizado un bucle for...of
/* const numbers2 = []

for(number of numbers){
    if(number > 20){
        numbers2.push(number)
    }
} */
// Como vemos, con filter() hemos necesitado una sola línea; con for...of se han necesitado 6

/* console.log(numbers2) */

// =======================================================================================
/* .reduce(callback) -> Reduce todos los elementos del array a un único valor. Al igual que
el método sort(), recibe dos parámetros (a, b) porque lo hace a través de pares */

// Vamos a hacer la suma de todos los elementos del array numbers. Los va a sumar de dos
// en dos, es decir, en la primera vuelta suma los dos primeros, al resultado, en la segunda
// vuelta, le sumará el tercero y, al resultado, en la tercera vuelta, le sumará el último valor
/* const numbers = [8, 100, 1, 22, 3] */

/* console.log(numbers.reduce((a, b) => a + b)) // Devuelve 134 */

// Este valor también se puede guardar en una variable
/* const suma = numbers.reduce((a, b) => a + b)

console.log(suma) // Muestra asimismo 134 */

// Vamos a crear un array de objetos users (en esta ocasión no vamos a crear una clase. Para
// el ejemplo los vamos a crear a mano) y vamos a usar el método reduce() para obtener el número
// de usuarios que están conectados
const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

// Al método reduce le vamos a pasar dos parámetros. "cont" será la variable donde se vayan
// a ir guardando el número de usuarios que está online; "user" será donde se guarde cada 
// elemento del array en cada vuelta
const userOnline = users.reduce((cont, user) => {
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${userOnline} usuarios conectados`) // Devuelve "Hay 4 usuarios conectados"

// IMPORTANTE: como vemos reduce está recibiendo dos cosas, por un lado los dos parámetros
// que guardarán la información recogida en cada vuelta (cont, user), y, por otro lado, el
// callback o función que va a ejecutar para obtener la información deseada (a partir de la 
// flecha(=>) todo lo que está entre las llaves ({})). Pero también puede recibir un valor 
// inicial de alguno de los parámetros pasados. En este caso, vamos a incicializar "cont" 
// para que "cont" sea un número (lo inciciamos a 0), porque si no lo inicializamos así,
// no se considera que la variable es un número y devolvería "NaN" (Not a Number).
// De esta forma resumida podemos hacernos una idea de cómo queda nuestro reduce():

    // .reduce( (parámetros) => {callback}, valorInicial )



// ========================================================================================
/* Enlace Arrays en JavaScript
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array */


