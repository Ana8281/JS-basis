//destructuring arrays

const numbers1 = [10, 20, 30, 40, 50];

const [one, two, three, four, five] = numbers1;

console.log(one);
console.log(two);


//if I only like four item and not the others
const numbers2 = [10, 20, 30, 40, 50];
const [one2, , , , five2] = numbers2;

console.log(one2);
console.log(five2);

//if I only like some items and the rest
const numbers3 = [10, 20, 30, 40, 50];
const [one3, two3, ...five3] = numbers3;

console.log(one3);
console.log(two3);
console.log(five3);


//For each

const shop = [
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

shop.forEach(function(product) {
    console.log(`${product.name} - Precio ${product.price}`)
})








