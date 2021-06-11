// Symbols

//allow create a unique property, never a symbol is equal to another


const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2) {
    console.log('they are same');
} else {
    console.log('they are differents')
}

const name2 = Symbol();
const lastName = Symbol();

const person = {};

//add name and last name as keys of the object

person[name2] = 'Ana';
person[lastName] = 'Arbelaez';
person.age = 20;
person.color = 'dark'

console.log(person.name2) // i can aceesss to a key in this wat with symbol
console.log(person[name2]) // only in this way

//the properties that use a symbol are not iterables
for(let i in person) {
    console.log(i)
}

console.log(person)

//define description of symbol
const nameClient = Symbol('name of client')
const client1 = {}

client1[nameClient] = 'Peter'

console.log(client1)
console.log(client1[nameClient]); //acess to the value
console.log(nameClient) //access to the description 



