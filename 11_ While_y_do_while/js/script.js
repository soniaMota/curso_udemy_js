/* Bucles */

/* 
    Indeterminados -> No sabemos el número de veces que se va a ejecutar el código

    Bucle while:
    while(condición){
        //código a ejecutar
    }

    Bucle do...while:
    do{
        //código a ejecutar
    }while(condición);
*/


/* Ejemplo: introducir una contraseña */

let pass = '';


/* Bucle while */

// Si la variable está inicializada y vale 'hola', el bucle no se ejecutaría y mostraría directamente la línea "Fin del bucle"
// pass = 'hola';
/* while(pass != 'hola'){ // Siempre que lo que se introduzca sea distinto de 'hola' continuará ejecutándose el bucle
    pass = prompt('Introduzca su contraseña'); // La función prompt() lanza un mensaje donde poder escribir
}

console.log('Fin del bucle'); // Esta línea no se ejecutará hasta que no se haya salido del bucle */


/* Bucle do...while */

// Aunque la variable estuviera inicializada a 'hola', el mensaje se mostraría, al menos una vez y, 
// si se introdujera un valor distinto a 'hola', se modificaría la variable y ya seguiríamos dentro del bucle
// siempre que no volviéramos a introducir 'hola'
// pass = 'hola';
/* do{
    pass = prompt('Introduzca su contraseña');
}while(pass != 'hola');

console.log('Fin del bucle'); */