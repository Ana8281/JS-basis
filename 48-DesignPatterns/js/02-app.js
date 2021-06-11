//constructor parent

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Company extends User {
    constructor(name, email, company) {
        super(name, email);
        this.company = company;
    }
}

const user1 = new User('ana', 'c@c.com')

console.log(user1)

const company = new Company('ana', 'c@c.com', 'Huge')

console.log(company)