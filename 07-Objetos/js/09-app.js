//seal  allows to change the value of a property but not remove or add a new one


"use strict";

const hair = {
    one: 'straight',
    two: 'curly'
}



Object.seal(hair);
hair.one = 'mixto'; //just change properties

//hair.three = 'short'; // console.error
//delete hair.one; // console.error

console.log(hair)

console.log(Object.isSealed(hair))

