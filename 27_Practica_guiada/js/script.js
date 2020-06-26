/* 
Crea una clase Libro.
La clase Libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro.
Pide 3 libros y guárdalos en un array.
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos.
Validar que el año sea un número y que tenga 4 dígitos.
Validar que el género sea: aventuras, terror o fantasía.
Crea un función que muestre todos los libros.
Crea una función que muestre los autores ordenados alfabéticamente.
Crea una función que pida un género y muestre la información de los libros que pertenezcan
a ese género usando el método que devuelve la información.
*/

/* Solución: */

class Book {
    /* Método constructor */
    constructor(title, author, year, gender) {
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    /* Métodos */
    /* Método que devuelve la información del libro */
    bookInfo() {
        return `Título: ${this.title}\nAutor: ${this.author}\nAño de publicación: ${this.year}\nGénero literario: ${this.gender}`
    }

    /* Método que devuelve el autor de un libro */
    getAuthor() {
        return this.author
    }

    /* Método que devuelve el género de un libro */
    getGender(){
        return this.gender
    }
}
/* Hasta aquí la clase */


/* Declaración e inicialización del array */
let books = []

// Creamos un bucle que se repetirá mientras que el array tenga una longitud menor a 3
while (books.length < 3) {
    let title = prompt('Introduce el título del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el año de publicación del libro')
    let gender = prompt('Introduce el género del libro').toLowerCase()

    // Validamos que los campos no están vacíos, que el año sea un dígito de cuatro cifras
    // y que género sea uno de los tres indicados
    if (title != ''
        && author != ''
        && !isNaN(year) && year.length == 4
        && (gender == "aventuras" || gender == "terror" || gender == "fantasía")) {

        // Si se cumplen todas las condiciones anteriores, añadimos un nuevo libro 
        // al array, pasándole por parámetro el título, autor, año y género
        books.push(new Book(title, author, year, gender))
    }
}

/* Función que muestre todos los libros */
const showAllBooks = () => {
    // Recorremos el array y, por cada libro, llamamos al método que muestra la información
    for(const book of books){
        console.log(book.bookInfo())
        console.log('='.repeat(25)) // Mostramos una línea de separación repitiendo el carácter "="
    }    
}


/* Función que muestre los autores ordenados alfabéticamente */
const showAuthors = () => {
    // Creamos un array donde guardaremos los autores
    let authors = []
    // Recorremos el array y extraemos los autores de cada libro y lo guardamos en su array
    for (const book of books) {
        // Llamamos al método que devuelva el autor
        authors.push(book.getAuthor())
    }
    // Ahora lo ordenamos alfabéticamente y los mostramos
    console.log(authors.sort())
}


/* Función que pida un género y muestre la información de los libros que pertenezcan
a ese género */
const showBooksOfGender = () => {
    // Creamos una variable que va a ir contando los libros encontrados
    let contador = 0
    // Recogemos el género que desea el usuario usando el método prompt()
    const gender = prompt('Indica el género que deseas consultar')
    // Recorremos el array buscando los libros cuyo género coincida con el indicado y lo mostramos
    for(const book of books){
        if(book.getGender() == gender){
            contador++ // Aumentamos en 1 el contador
            console.log(book.bookInfo()) // Mostramos la información del libro encontrado 
        }              
    }
    // Comprobamos si la variable contador se ha quedado a 0 para mostrar el mensaje de que no se 
    // ha encontrado ningún libro
    if(contador == 0) console.log(`El género ${gender} no tiene ningún libro`)
}


showAllBooks() // Invocación a la función que muestra los libros
showAuthors() // Invocación a la función que muestra los autores por orden alfabético
showBooksOfGender() // Invocación a la función que muestra los libros de un género indicado