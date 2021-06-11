const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//INCLUDES AND SOME METHOD


//search if Enero exist with forEach

meses.forEach(item => {
    if (item === 'Enero') {
        console.log(`yes ${item} exist`);
    }
});

const result = meses.includes('Febrero');
console.log(result)

//in an array of objects some is used

const exist = carrito.some(product => product.nombre === 'Celular');

const existMonth = meses.some(month => month === 'Abril')

console.log(exist);
console.log(existMonth);


