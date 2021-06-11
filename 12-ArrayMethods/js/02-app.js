//FINDINDEX METHOD
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const shop = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//find indexOf with forEach

months.forEach((month, index) => {
    if(month === 'Mayo') {
        console.log(`found in the index: ${index}`)
    }
});


const indexJune = months.findIndex(month => month === 'Junio')
console.log(indexJune)


const shopTeclado = shop.findIndex(item => item.precio === 100)
console.log(shopTeclado)
