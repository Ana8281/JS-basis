//Generators

//Yield are values which can be iterable

function *createGenerator() {
    yield 1;
    yield 'juan';
    yield 3+3;
    yield 3;
}

const iterator =  createGenerator();
console.log(iterator) //start with suspended asleep
console.log(iterator.next()) //awake the generator then back to asleep
console.log(iterator.next().value)  //acces to value
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)


// Generator shoppingCar

function *createShoppingCartIterator(cart) {
    for (let i = 0; i < cart.length; i++) {
        yield cart[i];
    }
}

const cart = ['product 1', 'product 2', 'product 3', 'product 4'];

const iteratorCart = createShoppingCartIterator(cart);
console.log(iteratorCart)
console.log(iteratorCart.next())
console.log(iteratorCart.next())
console.log(iteratorCart.next())
console.log(iteratorCart.next())
console.log(iteratorCart.next())