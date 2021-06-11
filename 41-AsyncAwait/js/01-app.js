// Try and Catch

console.log(1+1)

//hola() //if javascript detect an error it doesnt exectue after the error in this case next line is not executed
// with a try catch it allows to continue it doesnt matter it find an error
console.log(2+2)


// with a try catch it allows to continue it doesnt matter it find an error
console.log(3+3)
try {
    hola()
} catch (error) {
    console.log(error)
}
console.log(4+4)