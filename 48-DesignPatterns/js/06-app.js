//Mixins


class User1 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


class Client1 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const functionUser = {
    createInput() {
        console.log(`<input type="${this.name}" name="${this.email}" id="${this.name}">`)
    },

    showUser() {
        console.log(`Name: ${this.name}"`)
    }
}


Object.assign(User1.prototype, functionUser)

Object.assign(Client1.prototype, functionUser)

const userFunction = new User1('EXAMPLE', 'a@a.com')

const userFunctionClient = new Client1('EXAMPLE')

userFunction.createInput()

userFunctionClient.showUser()
