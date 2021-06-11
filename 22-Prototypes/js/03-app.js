function Client2(name, balance) {
    this.name = name;
    this.balance = balance;
}

Client2.prototype.typeClient = function() {
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

Client2.prototype.nameClientBalance = function() {
    return `Name: ${this.name}, Balance: ${this.balance}, Type: ${this.typeClient()}`
}

Client2.prototype.withdrawBalance = function(withdraw) {
    this.balance -= withdraw;
}

const wolfgang  = new Client2('wolfang', 6000)
console.log(wolfgang.typeClient())
console.log(wolfgang.nameClientBalance())
console.log(wolfgang.withdrawBalance(1000))
console.log(wolfgang.nameClientBalance())
console.log(wolfgang)