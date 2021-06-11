const product3 = {
    name: 'ana',
    price: 50,
    available: true
}

//adding new properties to the object
product3.iva = '15%';

console.log(product3)

//removing a property

delete product3.available;

console.log(product3)