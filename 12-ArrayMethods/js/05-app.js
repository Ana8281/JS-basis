//FIND METHOD
const products1 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let result2 = '';

products1.forEach((product, index) => {
    if(product.nombre === 'tablet') {
        result2 = products1[index];
    }
})

console.log(result2)

let resultFind = products1.find(product => product.nombre === 'Celular'); //the diference with filter it only gets the fisrt one which be true

console.log(resultFind)