const navigation = document.querySelector('.navegacion')
console.log(navigation.childNodes)// the space in white are considere elements
console.log(navigation.children)// just the html code

console.log(navigation.firstElementChild)
console.log(navigation.lastElementChild)


//traversing DOM
card2 = document.querySelector('.card')
console.log(card2.children[1].children[1].textContent)

card2.children[1].children[1].textContent = 'new title from traversing DOM'


console.log(card2.children[0].src)
card2.children[0].src = './img/hacer1.jpg';


//traversing from child to parent
console.log(card2.parentNode)
console.log(card2.parentElement.parentElement.parentElement)

//siblings
//next
console.log(card2.nextElementSibling.nextElementSibling)

//previous
const lastCard = document.querySelector('.card:nth-child(4)');
console.log(lastCard.previousElementSibling.previousElementSibling)
 