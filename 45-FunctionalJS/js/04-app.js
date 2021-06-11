const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];


const resultNames = product => product.nombre;


//MAP
const reultMap = carrito.map(resultNames)
console.log(carrito) // you can see the original array is not modified
console.log(reultMap)

const resultPrices = (total, product) => total + product.precio;


//REDUCE
const resultReduce = carrito.reduce(resultPrices, 0)

console.log(resultReduce)


//SOME

const exist = p => p.nombre === 'Celular'

const existResult = carrito.some(exist);

console.log(existResult)


//FIND INDEX

const indexTablet = p => p.precio === 300
const indexTabletResult = carrito.findIndex(indexTablet)

console.log(indexTabletResult)


// FIND
const findCel = p => p.nombre === 'Celular'

const resultFind = carrito.find(findCel)

console.log(resultFind)

// SOME
const somep = p => p.precio < 500
let result4 = carrito.some(somep)

console.log(result4)

// EVERY

const everyp = p => p.precio < 500
const result3 = carrito.every(everyp) //all elements of the array must meet the condition
console.log(result3)
