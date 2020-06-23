/* 6 -> Escribe un programa que permita ir introduciendo una serie indeterminada de números 
mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el 
contador de cuántos números se han introducido */

let sum = 0
let cont= 0

while(sum < 50){
    sum += parseInt(prompt('Introduce un número para añadir a la suma'))
    cont++
}

console.log(`Total acumulado: ${sum}\nNúmeros introducidos: ${cont}`)