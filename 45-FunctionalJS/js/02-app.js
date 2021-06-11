 // functions with arguments

const sum1 = (a,b) => a + b;
const mult = (a,b) => a * b;

const sumOrmultiply = fn => fn(10,20)

console.log(sumOrmultiply(sum1))
console.log(sumOrmultiply(mult))