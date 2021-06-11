//REDUCE METHOD

const product = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//sum total of each price product
let total = 0;
product.forEach(item => total += item.precio)
console.log(total);


let resultTotal = product.reduce((total, item) => total + item.precio, 0);
console.log(resultTotal)


