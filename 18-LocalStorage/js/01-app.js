localStorage.setItem('name', 'Ana')// localstorage only save strings

//For that reason if I used an object for example i have to convet to string

const normalObject = {
    name: 'ana',
    lastName: 'arbelaez',
    age: '38'
}

console.log(typeof(normalObject))


const normalObjectString = JSON.stringify(normalObject)

console.log(typeof(normalObjectString))// now I can send the info to localStorage

localStorage.setItem('user', normalObjectString)

//localsotrage for arrays

const months = ["januar", "februar", "march"];

localStorage.setItem('months', JSON.stringify(months))