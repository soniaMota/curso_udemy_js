/* 
Sintaxis simple:
switch(evaluación){
    case n1:
        // código
        break;
    case n2:
        // código
        break;
    ...
    default:
        // código
}

// ============================================
Sintaxis múltiple:
switch(evaluación){
    case n1:
    case n2:
    case n3:
        // código
        break;
    case n4:
    case n5:
        // código
        break;
    ...
    default:
        // código
}

// ==============================================
Sintaxis múltiple encadenada:
No se explica en este curso
*/

// ##############################################################
// Definición e inicialización de variables
let num = 4;

/* Sintaxis simple */
switch (num) {
    case 1:
        console.log(`${num} vale 1`);
        break; // No olvidar poner el break después de cada caso para que no siga ejecutando el resto
    case 2:
        console.log(`${num} vale 2`);
        break;
    default:
        console.log(`${num} no vale ni 1 ni 2`);
}

/* Sintaxis múltiple */
switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`);
        break;
    case 2:
    case 4:
        console.log(`${num} es par`);
        break;
}

