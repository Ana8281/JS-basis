//Map is the same that forEach but map creates a new array

const shop1 = [
    {
        name: 'tv',
        price: '1000'
    },
    {
        name: 'iphone',
        price: '2000'
    },
    {
        name: 'tablet',
        price: '800'
    },
    {
        name: 'iwatch',
        price: '100'
    },
]

const newShop = shop1.forEach(function(product) {
    return `${product.name} - Precio ${product.price}`;
});

const newShop1 = shop1.map(function(product) {
    return `${product.name} - Precio ${product.price}`;
});

console.log(newShop);
console.log(newShop1);

