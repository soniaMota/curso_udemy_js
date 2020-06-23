/* 9 -> Solicitar al usuario una palabra y mostrar por consola el número de consonantes, 
vocales y longitud de la palabra. */

const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
const consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q',
'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let palabra
let numVocales = 0
let numConsonantes = 0
let otros = 0

// Controlamos que la palabra tenga una longitud de, al menos, un caracter
do{
    palabra = prompt('Introduce una palabra').trim().toLowerCase() 
    // Eliminamos los posibles espacios que haya podido introducir el usuario por error delante y detrás de la palabra
    // La convertimos a minúsculas para poder comprobar con los arrays
}while(palabra.length <= 0)

console.log(`La longitud de la palabra ${palabra} es ${palabra.length}`)

// Comenzamos a recorrer la palabra extrayendo cada uno de sus caracteres y comprobando si están en los arrays de vocales y consonantes
for(let caracter of palabra){
    
    if(vocales.indexOf(caracter)!== -1) numVocales++
        
    else if(consonantes.indexOf(caracter)!=-1) numConsonantes++
        
    else otros++   
}

console.log(`Tiene ${numVocales} vocales, ${numConsonantes} consonantes y ${otros} caracteres varios`)