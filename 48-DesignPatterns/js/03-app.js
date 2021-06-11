// Singleton> dont allow create multiple instances of the same class

let instance = null

class newPerson {
    constructor(name, age) {
        if (!instance) {
            this.name = name;
            this.age = age;
            instance = this;
        } else {
            return instance;
        }
    }
}

const client = new newPerson('felipe', 39)
const client2 = new newPerson('Marce', 29)
console.log(client)
console.log(client2)// the idea is not create another instance of the class
