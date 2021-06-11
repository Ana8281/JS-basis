//EVERY METHOD

const products2 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let result3 = products2.every(product => product.precio < 500) //all elements of the array must meet the condition

let result4 = products2.some(product => product.precio < 500)
console.log(result3)
console.log(result4)