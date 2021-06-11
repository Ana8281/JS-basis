//Removing elements from DOM

const firstLink = document.querySelector('a');
//firstLink.remove();
//console.log(firstLink)


//remove from parent
const nav = document.querySelector('.navegacion');
nav.removeChild(nav.children[2]);
console.log(nav)