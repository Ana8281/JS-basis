// From callbak hell to promises change exercise 02-app.js

const cities = [];

const newCity = city => new Promise((resolve, reject) => {
    setTimeout(() => {
        cities.push(city);
        if (cities.length >= 1) {
            resolve('Result of resolve') // when t he promise is resolve
        } else {
            reject('Cant be resolved') //when the promise dont resolve
        }
    }, 3000);

});

newCity('München') //use the promise
    .then(city => { // then i resolve the promise
        console.log(city)
        console.log(cities)
        return newCity('Berlin')
    })
    .then(city => {
        console.log(city)
        console.log(cities)
        return newCity('Köln')
    })
    .then(city => {
        console.log(city)
        console.log(cities)
        return newCity('Dusserdolf')
    })
    .then(city => {
        console.log(city)
        console.log(cities)
    })

