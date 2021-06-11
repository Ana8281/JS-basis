// order higer function


const newProd = [
    {
        name: 'tv',
        price: '1000',
        size: 100
    },
    {
        name: 'phone',
        price: '2000',
        size: 400
    },
    {
        name: 'iwatch',
        price: '200',
        size: 50
    }
]
// normal filter

// const filterNormal = newProd.filter(product => product.price > 1000)
// console.log(filterNormal)
 


// with Higher order functions; Function that return another function as an argument
// most of the array methos are Higher order functions

const fnResult = product => product.price > 400;
const fnSize = product => product.size >  100;

const resultHF = newProd.filter(fnResult).filter(fnSize);

console.log(resultHF)



