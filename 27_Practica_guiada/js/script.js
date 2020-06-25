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
    bookInfo() {
        return `Título: ${this.title}\nAutor: ${this.author}\nAño de publicación: ${this.year}\n
        Género literario: ${this.gender}\n'='.repeat(20)`
    }
}
/* Hasta aquí la clase */

let books = []

while (books.length < 3) {
    let title = prompt('Introduce el título del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el año de publicación del libro')
    let gender = prompt('Introduce el género del libro').toLowerCase()

    // Validamos que los campos no están vacíos
    if (title != '' &&
        author != '' &&
        !isNaN(year) &&
        year.length == 4 &&
        (gender == "aventuras" || gender == "terror" || gender == "fantasía")) {

            books.push(new Book(title, author, year, gender))
    }
}

/* Función que muestre todos los libros */
const showAllBooks = () => {
    console.log(books);
}

showAllBooks()