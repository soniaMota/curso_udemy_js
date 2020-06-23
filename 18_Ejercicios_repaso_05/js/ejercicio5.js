/* 5 -> Escribe un programa que pida un número entero mayor que 0 y calcule su factorial.
El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad

!5 = 5*4*3*2*1 = 120 */

let num;
let factorial = 1; // Se irá guardando el valor por el que el número tendrá que ir multiplicándose
// Se inicializa a 1 porque es el primer número por el que multiplicaremos la variable num
// para que el resultado sea el propio número (Ej.: Si num vale 5, la primera operación será
// 5*1 = 5. De esta forma, en la variable factorial se quedará guardado el 5 que se multiplicará
// por el siguiente valor)

do{
    num = parseInt(prompt('Introduzca un número entero mayor que 0 para calcular su factorial'))
}while(isNaN(num) || num <= 0)

// Creamos un bucle en el que el contador se inicializará al mismo valor del número introducido
// En este caso, el contador (i) tiene que ir decrementando
for(let i = num; i>0; i--){
    factorial *= i // Sería igual que factorial = factorial * i
    // Supongamos que el número introducido sea el 5. Cada vuelta sería:
    // 5 = 1 * 5 (donde 1 es el valor incicial de factorial y 5 el valor del contador)
    // 20 = 5 * 4 (donde 5 es ahora el valor de factorial y 4 el valor del contador -1)
    // 60 = 20 * 3 (donde 20 es ahora el valor de factorial y 3 el valor del contador -1)
    // 120 = 60 * 2 (donde 60 es el valor de factorial y 2 el valor del contador -1)
    // 120 = 120 * 1 (donde 120 es ahora el valor de factorial y 1 el valor del contador -1)
    // En estos momentos, el contador i vale 1. Si volvemos a decrementar en 1, el valor de i
    // queda a 0, por lo que ya no cumple la condición "i>0" y no entraría en el bucle
    // pasando a ejecutarse la siguiente línea:}
}

console.log(`El factorial de ${num} es ${factorial}`)
