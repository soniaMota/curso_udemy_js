/* Objeto Math */

/* Propiedades */

/* Math.E */
// console.log(Math.E);

/* Math.PI */
// console.log(Math.PI);


/* Métodos */
let num = 5;
let num2 = 2;
let min = 10;
let max = 20;

// ===================================================
/* Math.abs(x) -> Devuelve el valor absoluto de x (o sea, el valor del número sin su signo*/
// console.log(Math.abs(num));

// ====================================================
/* Math.ceil(x) -> Redondea hacia arriba */
/* console.log(Math.ceil(num)); // Si num vale 5.3 o 5.9 devolvería, en ambos casos, un 6 */

// ====================================================
/* Math.floor(x) -> Redondea hacia abajo */
/* console.log(Math.floor(num)); // Si num vale 5.3 o 5.9 devolvería, en ambos casos, un 5 */

// ====================================================
/* Math.pow(x, y) -> Devuelve la potencia de x elevado a y */
/* console.log(Math.pow(num, num2)); //Si num vale 5 y num2 vale 2, devuelve 25 */

// =====================================================
/* Math.random() -> Generamos el número pseudoaleatorio entre 0 y 1 */
/* console.log(Math.random());  */
// Si queremos generar el número entre otro rango:
// Si lo queremos entre 0 y 100, multiplicamos el resultado *100:
/* console.log(Math.random()*100); // Devuelve cualquier número, incluidos decimales */
// Si queremos que el número sea un entero, lo usaremos combinado con Math.round(x):
/* console.log(Math.round(Math.random()*100)); // Devuelve sólo números enteros */
// Si lo que queremos generar es un número random entre un mínimo y un máximo:
/* console.log(Math.random() * (max - min)+min); // Devuelve cualquier número, incluidos decimales, entre 10 y 20 */
// Si queremos números enteros:
/* console.log(Math.round(Math.random() * (max - min) + min)); */
// NOTA: Ambos números, min y max, están incluidos

// =========================================================
/* Math.round(x) -> Devuelve el valor de un número redondeado al entero más cercano */
/* console.log(Math.round(num)); // Hasta el 5.4 devolvería 5, a partir de 5.5 devolvería 6 */

// ==========================================================
/* Math.sign(x) -> Devuelve el signo de x. 
Si el signo es negativo, devuelve -1.
Si el signo es positivo, devuelve 1.
Si x vale 0, devolverá 0 */
/* console.log(Math.sign(num)); */

// ===========================================================
/* Math.sqrt(x) -> Devuelve la raíz cuadrada de x */
/* console.log(Math.sqrt(num)); // Si la raíz cuadrada no es exacta, nos devuelve decimales */