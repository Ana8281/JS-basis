function Client1(name, balance) {
    this.name = name;
    this.balance = balance;
}

const newClient1 = new Client1('pedro', 600)

console.log(newClient1)

function formatClient(user) {
    const {name, balance} = user;
    return `your client is ${name} and has a balance of ${balance}`;
}
const newClient2 = new Client1('clau', 400)
console.log(formatClient(newClient2));

function Company(name, balance, company) {
    this.name = name;
    this.balance = balance;
    this.company = company;
}

function formatCompany(user) {
    const {name, balance, company} = user;
    return `your client is ${name} and has a balance of ${balance} and the company is ${company}`;
}

const newCompany = new Company('Robert', 300, 'BMW');

console.log(formatCompany(newCompany))