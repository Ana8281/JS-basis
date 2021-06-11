//this word to reference values into the object

const person2 = {
    firstName1: "John",
    lastName1: "Doe",
    age1: 50,
    eyeColor1: function() {
        console.log(`your name: ${this.lastName1}, your age ${this.age1}`);
    }
};

console.log(person2.eyeColor1());






