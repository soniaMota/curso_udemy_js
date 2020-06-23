/* 7 -> Crea 3 arrays. El primero tendŕa 5 números y el segundo se llamará pares y el tercero 
impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array 
por un número aleatorio entre 1 y 10, si el resultado es par, guarda ese número en el array de 
pares y, si es impar, en el array de impares. Muestra por consola:
    - la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    - el array de pares e impares */

const numbers = [4, 51, 12, 9, 37]
const min = 1
const max = 10    
let pares = []
let impares = []
let aleatorio
let multiplicacion

for(let number of numbers){
    aleatorio = Math.round(Math.random() * (max - min) + min)
    multiplicacion = number * aleatorio
    console.log(`${number} x ${aleatorio} = ${multiplicacion}`)

    if(multiplicacion % 2 == 0){
        pares.push(multiplicacion)
    }else{
        impares.push(multiplicacion)
    }
}

console.log(`Valores del array pares: ${pares}\nValores del array impares: ${impares}`)