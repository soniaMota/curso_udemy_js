/* Bucles */

/* 
    Determinados:

    bucle for of / for in

    for(let variable of/in estructura){
        // código a ejecutar
    }

    Palabras reservadas de bucles:
        break -> Rompe el bucle
        continue -> Se salta la(s) posición(es) que se le indique y después continúa su ejecución
*/

let names = ['Paco', 'José', 'Paula', 'María'];

// for of
/* for(let name of names){
    console.log(name);
} */
/* 
Imprime:
Paco
José
Paula
María 
*/

// for in 
// (Vamos a usarlo con el ejemplo del array names aunque su uso aquí sería poco lógico
// ya que su uso más común es con objetos, que aún no hemos visto en el curso)
/* for(let index in names){
    console.log(index);
} */
/* 
Imprime:
0
1
2
3
*/

// Palabra reservada "break": Cuando la condición se cumple, rompe el bucle y sale de él
// Imprimir, hasta un valor determinado:

// Bucle for:
/* for (let i = 0; i < names.length; i++){
    // Si entra en este if se ejecuta el break y rompe el bucle
    if(names[i] === 'Paula'){
        break
    }
    console.log(names[i]); // Esta línea se ejecutará mientras no se rompa el bucle
} */
/* 
Imprime:
Paco
José
*/

// Bucle for of:
/* for (let name of names){
    if(name === 'Paula'){
        break
    }
    console.log(name);
} */
/* 
Imprime:
Paco
José
*/

// Bucle for in:
/* for (let index in names){
    if(names[index] === 'Paula'){
        break
    }
    console.log(index);
} */
/* 
Imprime:
0
1
*/


// Palabra reservada "continue": Cuando la condición se cumple, se salta la posición en la que se está
// pero continúa a la siguiente vuelta

// Bucle for:
/* for (let i = 0; i < names.length; i++){
    // Si entra en este if, esa posición se salta, pero continúa en el bucle
    if(names[i] === 'Paula'){
        continue
    }
    console.log(names[i]); // Esta línea se ejecutará mientras no se termine el bucle
} */
/* 
Imprime:
Paco
José
María
*/

// Bucle for of:
/* for (let name of names){
    if(name === 'Paula'){
        continue
    }
    console.log(name);
} */
/* 
Imprime:
Paco
José
María
*/

// Bucle for in:
/* for (let index in names){
    if(names[index] === 'Paula'){
        continue
    }
    console.log(index);
} */
/* 
Imprime:
0
1
3
*/