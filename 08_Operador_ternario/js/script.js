/* 
Operador ternario
Sintaxis:
- Para una sola sentencia:
    (condición) ? true : false;

- Para varias sentencias:
    (condición) ? 
        (primera sentencia,
        segunda sentencia,
        ...)
        :
        (primera sentencia, 
        segunda sentencia,
        ...)
*/

// Definición e inicialización de variables
let num = 376;

// Usaremos el operador ternario para saber si num es par o impar.

// Una sola sentencia
/* (num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`); */
// Como vemos, la primera sentencia se ejecuta si la respuesta a la pregunta de si num es par es true
// Si la respuesta es false se ejecuta la sentencia que está después de los dos puntos (:)

// Si lo hiciéramos con if se necesitaría más código y requiere más recursos, con lo que ralentizaría la aplicación
/* if(num % 2 == 0) console.log(`${num} es par`);
else console.log(`${num} es impar`); */

// NOTA: Siempre que se pueda utilizar el operador ternario se recomienda su uso ya que se necesitan menos recursos

// Varias sentencias (puede haber varias sentencias en el true y solo una en el false o viceversa)
(num % 2 == 0) ?
    (
        console.log(`Comprobamos si ${num} es par o impar:`),
        console.log(`${num} es par`)
    )
    :
    (
        console.log(`Comprobamos si ${num} es par o impar:`),
        console.log(`${num} es impar`)
    );
