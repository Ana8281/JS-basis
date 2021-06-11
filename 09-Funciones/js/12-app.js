//forEach and map with arrays

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

const newShop = shop1.forEach(product => console.log(`${product.name} - Precio ${product.price}`));

const newShop1 = shop1.map(product => `${product.name} - Precio ${product.price}`);

//console.log(newShop);
console.log(newShop1);