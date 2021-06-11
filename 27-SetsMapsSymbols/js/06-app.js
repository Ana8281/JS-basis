//iterators
//how to build a for, foreach ...etc

function createIterator(car) {
    let i = 0;

    return {
        next: () => {
            const end = i >= car.length;
            const value = !end ? car[i++] : undefined;

            return {
                end,
                value
            }
        }
    }
}

const car = ['product 1', 'product 2', 'product 3', 'product 4'];

//use iterator
const runIterator = createIterator(car);

console.log(runIterator.next())
console.log(runIterator.next())
console.log(runIterator.next())
console.log(runIterator.next())
console.log(runIterator.next())


