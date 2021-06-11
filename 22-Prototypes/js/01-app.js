//object literal(it i more static)

const client = {
    name: 'Ana',
    balance: 500
}

console.log(client)

//object constructor (it is more dynamic)

function Client(name, balance) {
    this.name = name;
    this.balance = balance;

}

const newClient = new Client('maria', 300)

console.log(newClient)