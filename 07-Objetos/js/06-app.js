//destructuring in nested objects

const {parents, parents: {children, children: { daugther, son }}} = family;

console.log(parents);
console.log(children);
console.log(daugther);
console.log(son);


