// Implicit binding, "this" word reserved 

//QUESTION FOR A JOB!!!!!!!!: give me an exmaple of implicit binding

const user = {
    name: 'ana',
    age: 38,
    info() {
        console.log(`your name is ${this.name}`)
    },
    pet: {
        name: 'sam',
        age: 3,
        info() {
            console.log(`your pet name is ${this.name}`)
        },
    }
}

user.info()
user.pet.info()