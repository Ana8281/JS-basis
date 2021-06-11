//Object methods


//FROZEN 

"use strict"; //for access some object methods

const coursesA = {
    e: 'english',
    s: 'spanish',
    d: 'deutsch'
}

Object.freeze(coursesA);

//coursesA.e= 'french';

//delete coursesA.s;

//console.log(coursesA);

console.log(Object.isFrozen(coursesA));
