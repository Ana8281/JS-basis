// explicit binging: use apply and call
//QUESTION FOR A JOB!!!!!!!! What is the difference between apply and call?
// R/ call aparameters should be pased one by one an respecting the position
// apply parameters accept cpmlete array

function person(elm1, elm2) {
    console.log(`Mi name is ${this.name} and I listen ${elm1} and ${elm2}`)
}

const infoUser = {
    name: 'Ana'
}

const musik = ['Rock', 'pop']

person.call(infoUser, musik[0], musik[1]) // cal exist in all native functions in javascript
person.apply(infoUser, musik)

// third function to do explicit biding: .bind(), its similar to call, but it creates a new function
const newFn = person.bind(infoUser, musik[0], musik[1])
newFn()