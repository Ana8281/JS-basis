//methods spread operator -> forma declarativa no modifica el arreglo actual

const carShop1 = [];

const newProd = {
    name: 'tv',
    price: '1000'
}

const newProd2 = {
    name: 'phone',
    price: '2000'
}

const newProd3 = {
    name: 'iwatch',
    price: '200'
}

let result = [...carShop1, newProd];

result = [...result, newProd2];

result = [newProd3, ...result];

console.table(result);