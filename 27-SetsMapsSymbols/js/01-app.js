// Sets in javascript
//allow create list of values without duplicates


const carrito = new Set();
carrito.add('Shirt');
carrito.add('Socks');
carrito.add('Pullover');
carrito.add('Shirt'); //it has not be added just if it is in lowercase


//methods set
console.log(carrito.size)
console.log(carrito.has('Shirt')); // review if value exits
console.log(carrito.delete('Pullover')) // if true the element to remove exist

//carrito.clear(); // remove all the carrito elements

console.log(carrito)

//set can be iterable

carrito.forEach(product => {
    console.log(product)
})

//of the followin array, eliminate duplicated
const numbers = [10,20,30,40,50,10,20];

const notDuplicated = new Set(numbers)

console.log(notDuplicated)