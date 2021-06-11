//weakMaps
//support private data

const personal = {
    idPerson: 10
}

const newWeakMap = new WeakMap();

newWeakMap.set(personal, 'name' ); 
console.log(newWeakMap.has(personal)) //id is not shown
console.log(newWeakMap.get(personal))//id is not shown i can acess to id with get
console.log(newWeakMap.delete(personal))
console.log(newWeakMap) //id is not shown

//weakMap dont has size and can't not be iterable. JUST ACCEPT OBJECTS