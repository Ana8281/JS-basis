// Hoisting: refers how work the execution context in javascript
//for instance first the variables then function are registered and then executed

//function declaration: for these functions first is registered the funcion then getname can be before or after function

getName('maria')
function getName(name) {
    console.log(name)
}

//console.log(getName2) // error you can call the function before initialize
const getName2 = name => console.log(name)

console.log(getName2)
