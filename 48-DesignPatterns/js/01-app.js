// desing patters

//are typic solutions to resolve some problems to the code

// Class patern

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const user = new Person('carlos', 'c@c.com')

console.log(user)