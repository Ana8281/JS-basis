//eliminate an element of array splice


const name = ["ana", "maria", "arbelaez", "ruiz"];

//form imperative
//eliminate last item of array
const namePop = name.pop();

console.table(name);

//eliminate first item of array
const namePop1 = name.shift();

console.table(name);

//for declarative splice
const justName = name.splice(0, 2);

console.log(justName);






