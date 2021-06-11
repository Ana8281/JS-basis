//forma imperactiva modifica el arreglo actual
//methods push and unshift 

const carShop = [];

const newProduct = {
    name: 'tv',
    price: '1000'
}

carShop.push(newProduct);

const newProduct2 = {
    name: 'phone',
    price: '2000'
}

carShop.push(newProduct2);

const newProduct3 = {
    name: 'iwatch',
    price: '200'
}

carShop.unshift(newProduct3);


console.table(carShop);