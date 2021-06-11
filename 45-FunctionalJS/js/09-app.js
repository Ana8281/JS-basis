// partials y currying = divide the function that takes more than one parameter
//in arguments in partial form


const sumPartial = (a,b,c) => a+b+c

const partial = a => (b,c) => sumPartial(a,b,c)

const firstNumber = partial(5)

const resultsum = firstNumber(4,3)

console.log(resultsum)

//more divided

const partialmoredivided = a => b => c => sumPartial(a,b,c)
// const firstN = partialmoredivided(5)
// const secondN = firstN(4)
//const resultNs = secondN(3)

// everything can be manage in only one line
const resultNs = partialmoredivided(5)(4)(3)

console.log(resultNs)
