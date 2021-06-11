const message = 'smart tv has a price of 1000';
//replace
console.log(message.replace('1000', '500'));
console.log(message.replace('smart tv', 'led tv'));


//recortar
console.log(message.slice(6,8));
console.log(message.slice(8)); //if second argument is not passed it goes to the final of the string
console.log(message.slice(3,1)); //is firstargument > secondargument nothing happend


//alternative to slice
console.log(message.substr(6,8)); //same of slice
console.log(message.substr(8)); //same of slice if second argument is not passed it goes to the final of the string
console.log(message.substr(4,3)); //try do reorder to message.substr(3,4)

console.log(message.substr(0,1)); //if i want to get first caracter or just one
console.log(message.charAt(0)); //get just 1 character

