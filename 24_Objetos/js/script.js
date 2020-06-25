/* Objetos */

const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego']
}

console.log(person) // Esto nos muestra {name: "Juan", age: 26, sons: Array(2)}
console.log(person.name) // Nos muestra Juan
console.log(person.age) // Nos muestra 26
console.log(person.sons[0]) // Nos muestra Laura
console.log(person.sons[1]) // Nos muestra Diego

/* Otra forma de conseguir el mismo resultado */
console.log(person['name']) // Muestra Juan
console.log(person['age']) // Muestra 26
console.log(person['sons']) // Muestra (2) ["Laura", "Diego"]


/* Usando un bucle */
// OJO!!!: No podemos usar el bucle for ... of porque es para objetos iterables y person no lo es
for (const key in person){
    console.log(key)
}
// Muestra los nombres de las claves, es decir, los nombres de las propiedades:
// name
// age
// sons

for (const key in person){
    console.log(person[key])
}
// Muestra los valores:
// Juan
// 26
// (2) ["Laura", "Diego"]


/* Para recorrer una propiedad que es un array mediante un bucle */
/* Bucle for ... of */
// OJO!!! En este caso sí podemos usar el bucle for...of porque sons es un array, que sí es iterable
for (const son of person.sons){
    console.log(son)
}
// Muestra los valores:
// Laura
// Diego

/* Bucle for ... in */
for (const son in person.sons){
    console.log(son)
}
// Muestra las posiciones:
// 0
// 1

/* Imprimir un objeto en forma de frase (toString en Java) */
console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman
${person.sons.join(', ')}`)
// Lo hemos hecho con template strings y hemos usado el método join que es un método de los arrays