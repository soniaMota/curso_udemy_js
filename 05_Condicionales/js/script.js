/* Condicional simple (if) -> Comprueba una sola cosa */
let num1 = 0;
let num2 = 5;

/* if(num1>0) console.log(`${num} es mayor que 0`); */
// Sólo tenemos una línea de código a ejecutar, por lo que no es necesario poner las llaves 
// Como num1 es mayor que 0, se imprime "5 es mayor que 0".
// Si num1 vale, por ejemplo, 2 la línea no se imprime 

/* if(num1>0){
    console.log(`${num1} es mayor que 0`);
    console.log(`La raíz cuadrada de ${num1} es ${Math.sqrt(num1)}`);
} */
// Al tener más de una línea de código a ejecutar tenemos que poner las llaves


// ===============================================================
/* Condicional compuesto (if - else) -> Comprueba una cosa y la contraria */
/* if(num1>0){
    console.log(`${num1} es mayor que 0`);
}else{
    console.log(`${num1} es menor que 0`);
} */


// =================================================================
/* Condicional múltiple (if - else if - else) -> Se evalúan varias condiciones */
// En el ejemplo anterior, si num1 es mayor que 0 entra por el if, y todo lo que no sea esa condición pasa por el else
// Pero si num1 es igual a 0, imprimiría "0 es menor que 0" y eso no es cierto. 
// Por lo tanto, hay que evaluar otra condición, comprobar que num1 sea igual a 0
/* if(num>0){
    console.log(`${num} es mayor que 0`);
}else if(num<0){
    console.log(`${num} es menor que 0`);
}else{
    console.log(`${num} es igual que 0`);
} */


// ===================================================================
/* Operadores lógicos para  comprobar varias condiciones */

/* && -> and */
/* || -> or */
/* if(num1>0 && num2>0){
    console.log(`${num1} y ${num2} son mayores que 0`);
} */
// En este caso, al usar &&, se deben cumplir todas las condiciones, por lo tanto no imprimiría nada
// ya que num2 sí es mayor que 0, pero num1 no es mayor sino igual 

/* if(num1>0 || num2>0){
    console.log(`${num1} o ${num2} es mayor que 0`);
} */
// En el caso del operador || solo es necesario que una de las condiciones se cumpla para que entre 
// y se ejecute la línea de código, por lo que sí se imprimiría la línea "0 o 5 es mayor que 0"


// =====================================================================
/* If anidados */
/* if(num1>0){

    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }
} */
// De esta forma nos aseguramos que la segunda condición sólo se comprobará si la primera se cumple
// En este caso, no entraría porque num1 no es mayor que 0.
// Pero si cambiamos el valor de num1 a 1, ya si entraría y, si la segunda condición también se cumple
// se ejecutaría la línea de código del condicional e imprimiría "1 y 5 son mayores que 0"
// num1 = 1;
// Si además vamos cambiando el valor de num2, podremos ir viendo los diferentes recorridos que
// hará el código dependiendo del valor que tenga num2
// num2 = 0;
// num2 = -5;
/* if(num1>0){

    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`);
    }
} */
// Ahora comprobaremos todas las posibilidades comprobando el caso en que num1 no sea mayor que 0
// Vamos a cambiar el valor de num1 para ir viendo el recorrido que sigue ahora
/* num1 = -1;
// num2 = 0;
num2 = -5;
if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`);
    }
}else if(num1<0){
    if(num2>0){
        console.log(`${num1} es menor que 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y ${num2} es igual a 0`);
    }
}else{
    if(num2>0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} y ${num2} son iguales a 0`);
    }
} */

// NOTA: Las condiciones no sólo se pueden usar con números, podemos usar otro tipo de variables
// String
/* let word = 'Hola';

if(word.length>4){
    console.log(`${word} tiene más de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
} */

// Booleanos
let respuesta = false;

/* if(respuesta == true) console.log(`${respuesta} es verdadero`); */

// Si cambiamos el valor de la variable y preguntamos por la condición igual a false, se puede hacer de dos formas
// respuesta = false;

/* if(respuesta != true) console.log(`${respuesta} es falso`); */
/* if(respuesta == false) console.log(`${respuesta} es falso`); */

// IMPORTANTE: La forma más habitual de hacer estas consultas sería:
// Para preguntar si respuesta está a true:
if(respuesta) console.log(`Respuesta está a true`);
// Para preguntar si respuesta está a false:
if(!respuesta) console.log(`Respuesta está a false`);