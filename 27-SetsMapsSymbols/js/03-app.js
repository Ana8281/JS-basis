//Maps
//Maps are ordering list in key and value, it can be any date



const user = new Map();

user.set('name', 'Ana');
user.set('type', 'Premium');
user.set('balance', 100);



console.log(user)
console.log(user.size)

console.log(user.has('type'))
console.log(user.get('name'))


user.delete('balance')
console.log(user.has('balance'))
console.log(user.get('balance'))

user.clear();
console.log(user)

//initialize map with values
const patient = new Map([['name', 'patient'], ['age', 38], ['type', 'man']])


patient.set('Dr', 'Dr Asignado')
patient.set('name', 'Antiono') //rewrite value name


console.log(patient)
//maps are iterable
patient.forEach(date => {
    console.log(date)
})

//in general maps have better performance than objects