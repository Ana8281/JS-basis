// different iterators

const cities = ['london', 'paris', 'new york', 'berlin']

const order = new Set([113, 231, 131, 102])

const data = new Map();

data.set('name', 'Jhon')
data.set('rol', 'Development')

//default
for(let city of cities) {
    console.log('default value', city)
}

for(let ord of order) {
    console.log('default value', ord)
}

for(let dat of data) {
    console.log('default value ', dat)
}


//entries iterator
for (let entry of cities.entries()) {
    console.log(entry)
}


for (let entry of order.entries()) {
    console.log(entry)
}

for (let entry of data.entries()) {
    console.log(entry)
}

//values iterator
for (let value of order.values()) {
    console.log(value)
}

for (let value of cities.values()) {
    console.log(value)
}

for (let value of data.values()) {
    console.log(value)
}

//keys iterator
for (let key of order.keys()) {
    console.log(key)
}

for (let key of cities.keys()) {
    console.log(key)
}

for (let key of data.keys()) {
    console.log(key)
}
