/* Bucles */

/* 
    Determinados:

    bucle for:

    Su sintaxis se compone de 3 partes:
        Iniciación de la variable contador
        Número de vueltas
        Incremento o decremento

    for(let i = 0; i <= 10; i++){
        //código a ejecutar
    }
*/

// Imprimir los números desde el 0 hasta el 10
/* for(let i = 0; i <= 10; i++){
    console.log(i);
} */

/* for(let i = 0; i <= 10; ++i){ // Si invertimos la forma de escribir el incremento o decremento, primero aumentaría o decrementaría y luego imprimiría
    console.log(i);
}
 */

// Imprimir los número de 0 a 10 de mayor a menor:
// Para ello iniciamos la variable i a 10 y vamos decrementando hasta que i valga 0
/* for(let i = 10; i >= 0; i--){
    console.log(i);
} */

// Imprimir los números del 1 al 10 indicando los pares y los impares
/* for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(`Par: ${i}`);
    }else{
        console.log(`Impar: ${i}`);
    }    
} */

// Recorrer un array e imprimir su contenido
let numbers = [56,14,23,37,41,59];

/* for(let i = 0; i<numbers.length; i++){
    console.log(`Posición ${i}: ${numbers[i]}`);
} */
// IMPORTANTE: En este caso no podemos poner <= o >=, porque .length devuelve un número mas que el número de la posición
// Recordar que las posiciones comienzan por el 0. Este array tiene desde la posición 0 hasta la 5, 
// pero si contamos, su longitud es de 6 elementos. Lo vemos:
for(let i = 0; i<=numbers.length; i++){
    console.log(`Posición ${i}: ${numbers[i]}`);
}
// Cuando la i es igual a la longitud que nos devuelve el .length, que en este caso es el 6, 
// numbers[6] no existe, por lo que nos mostrará la palabra "undefined"