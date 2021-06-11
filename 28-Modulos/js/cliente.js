//old way

// (function() {
//     console.log('console form IIFE');
//     const nameClient = 'nama' //in this way this var can be acceded outside in the app
// })()

//export variables
export const nameClient = 'Ana';
export const saved = 200;


//export a function
export function printMessage(nameClient, saved) {
    console.log(`Client: ${nameClient} - Saved ${saved}`)
}

export function balance(saved) {
    if ( saved > 0) {
        console.log('yes, you have balance')
    } else {
        console.log('no, you dont have balance')

    }
}


//export a class
export class User {
    constructor(user, balance) {
        this.user = user;
        this.balance = balance;
    }

    showInfo() {
        console.log(`From class Client: ${this.user} - Saved ${this.balance}`)
    }
}

export default function newFn() { //I CAN NEVER HAD MORE THAN 1 EXPORT DEFAULT FOR THAT REASON I CAN USE AN ALIAS WHEN IMPORT
    console.log('this is export default and no needto be into {} to be called')
}