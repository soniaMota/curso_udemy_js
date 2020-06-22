/* 4 -> Escribe un programa que pida un número entero mayor que 1 y que escriba si el número 
es primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad */

let num;
let divisores = 0;

do{
    num = parseInt(prompt('Introduce un número entero mayor que 1'))
}while(isNaN(num) || num <= 1);

// Vamos a dividir el número introducido entre todos los números que vayan entre 2 (el 1 no,
// porque todos los números son divisibles por 1) y uno menos que dicho número (porque todos
// los números son divisibles por sí mismos). En el caso de que el número introducido sea 
// divisible por algunos de los números de ese rango, es que el número no es primo.
for(let i = 2; i < num; i++){
    if(num % i == 0){
        console.log(`${num} / ${i} = ${num / i}. ${num} no es primo`)
        divisores++ // Si ha entrado en este if significa que ha encontrado, al menos un divisor
                    // que no es ni el 1 ni él mismo, por lo que divisores valdrá 1, ya que con el 
                    // break se romperá la ejecución del bucle porque no necesitamos comprobar más.
        console.log(divisores)
        break
    }
}

// Comprobamos el valor de la variable divisores. Si no ha encontrado ninguno se mantendrá a 0.
if(divisores == 0) console.log(`${num} es un número primo`)