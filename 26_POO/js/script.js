class Person{

    /* Lo primero que tiene que aparecer es el método constructor */
    constructor(fistName, lastName, age){
        this.fistName = fistName
        this.lastName = lastName
        this.age = age
        
        // Creamos una nueva propiedad que no esperamos por parámetro
        // En este caso es similar al toString en Java
        // this.dates = `Me llamo ${this.fistName} ${this.lastName} y tengo ${this.age} años`
        // Como estamos dentro del constructor, podemos omitir el this y quedaría de la siguiente forma
        this.dates = `Me llamo ${fistName} ${lastName} y tengo ${age} años`
    }

    /* Métodos */
    saludar(){
        return `Hola, me llamo ${this.fistName} y tengo ${this.age} años` // En los métodos no podemos omitir el this
    }
} 
/* Aquí estaría terminada la clase Person */


/* Fuera de la clase, podemos instanciar la cantidad de objetos de la clase Person que queramos */
const person1 = new Person('Juan', 'García', 26) // De esta forma estamos invocando al constructor de la clase Person
const person2 = new Person('Marta', 'Pérez', 35)

console.log(person1) // Nos muestra todas las propiedades que tiene el objeto person1
// {firstName: "Juan", lastName: "García", age: 26, dates: "Me llamo Juan García y tengo 26 años"}
console.log(person1.saludar()) // Muestra "Hola, me llamo Juan y tengo 26 años"
// Lo mismo ocurriría para cada una de las instancias de Person que tengamos creadas