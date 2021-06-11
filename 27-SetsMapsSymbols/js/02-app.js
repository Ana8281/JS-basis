//WeakSet
//in a weakset accept to add just objects

const weakSet = new WeakSet();

const client = {
    name: 'ana',
    balance: 100
}

weakSet.add(client)
console.log(weakSet.has(client))
console.log(weakSet.delete(client))
console.log(weakSet)  

//wekSet has not size and is not iterable