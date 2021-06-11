function Client3(name, balance) {
    this.name = name;
    this.balance = balance;
}

Client3.prototype.typeClient = function() {
    let type;

    if (this.balance >= 4000) {
        type = 'gold';
    } else if (this.balance >= 2000){
        type = 'platinum'
    } else {
        type = 'normal'
    }

    return type;
}

Client3.prototype.nameClientBalance = function() {
    return `Name: ${this.name}, Balance: ${this.balance}, Type: ${this.typeClient()}`
}

Client3.prototype.withdrawBalance = function(withdraw) {
    this.balance -= withdraw;
}


function Person(name, balance, telephone) {
    Client3.call(this, name, balance);
    this.telephone = telephone;
}

Person.prototype = Object.create(Client3.prototype)
Person.prototype.constructor = Client3;

Person.prototype.info = function() {
    return `your telephone is ${this.telephone}`
}

const juan = new Person('juan', 3000, 30032323)
console.log(juan.nameClientBalance())
console.log(juan.info())
console.log(juan)
