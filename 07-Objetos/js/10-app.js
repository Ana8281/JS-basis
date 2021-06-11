
//concat 2 objects

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

const result = Object.assign(person, car);

console.log(result);


//spread operator or rest operator
const resultspread = {...person, ...car};

console.log(resultspread)