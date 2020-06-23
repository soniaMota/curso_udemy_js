/* 2 -> Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo,
rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área,
después solicita los datos que necesites para calcularlo.
    triángulo = b*h/2
    rectángulo = b*h
    círculo = π*r2 */

let figure; 
let b;
let h;
let r;
do{
    figure = prompt('Indica la figura sobre la que quieres calcular el area (triangle, rectangle, circle)');
}while(figure !== 'triangle' && figure !== 'rectangle' && figure !== 'circle');

switch (figure) {
    case 'triangle':
    case 'rectangle':
        // Comprobamos que el valor que se introduce es un dígito con isNaN() y
        // comprobamos que el valor introducido es mayor que 0
        do {
            b = prompt('Indica el tamaño de la base');
        } while(isNaN(b) || b <=0); 
        do {
            h = prompt('Indica el tamaño de la altura');
        } while(isNaN(h) || h <= 0);

        if (figure == 'triangle') {
            console.log(`El área del triángulo de base ${b} y altura ${h} es ${(b * h) / 2}`);
        } else {
            console.log(`El área del rectángulo de base ${b} y altura ${h} es ${b * h}`);
        }
        break;
    case 'circle':
        do {
            r = prompt('Indica cuál es su radio (debe ser un número mayor que 0)');
        } while(isNaN(r) || r <= 0);
        console.log(`El área del círculo de radio ${r} es ${Math.PI * Math.pow(r, 2)}`);
        break;
    default: console.log('La figura introducida no es válida');
}

