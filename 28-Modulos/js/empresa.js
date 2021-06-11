//inherit a class which is imported
import { User } from './cliente.js';


export class Company extends User {
    constructor(user, balance, category) {
        super(user, balance);
        this.category = category;
    }

    showInfo() {
        console.log(`Client: ${this.user} - Saved ${this.balance}`)
    }
}
