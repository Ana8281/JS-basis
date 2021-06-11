localStorage.removeItem('name')

//update register
const monthsNew = JSON.parse(localStorage.getItem('months'));

monthsNew.push('April')

console.log(monthsNew)

localStorage.setItem('months', JSON.stringify(monthsNew))


//clear all localStorage
localStorage.clear()

