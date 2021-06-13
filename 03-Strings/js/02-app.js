//strng methods

const screen4 = 'screen 27 \"inches"';

console.log(screen4.length);

console.log(screen4.indexOf('screen')); // 0 exist in de string
console.log(screen4.indexOf('tablet')); // -1 doesnt exist in the string

console.log(screen4.includes('27')); //true
console.log(screen4.includes('pixeles')); //false

