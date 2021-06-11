import alias, { nameClient as nameCli, saved, printMessage, balance, User } from './cliente.js';
import { Company } from './empresa.js';


console.log(nameCli, saved)


//import function
console.log(printMessage(nameCli, saved))

console.log(balance(saved))


//import Class
const user = new User(nameCli, saved)
console.log(user)

console.log(user.showInfo())


//imported class intherid from other
const company = new Company('felipe', 500, 'gold')
console.log(company)
console.log(company.showInfo())

//default import
alias();








