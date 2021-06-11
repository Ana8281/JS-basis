//FILTER METHOD

const products = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultFilter = products.filter(product => product.precio > 400);

resultFilter = products.filter(product => product.precio < 600);

resultFilter = products.filter(product => product.nombre !== 'Televisión');

resultFilter = products.filter(product => product.nombre === 'Televisión');

console.log(resultFilter)