const title = document.querySelector('h1')
// title.style.backgroundColor = 'pink';
// title.style.fontFamily = 'Arial';
// title.style.textTransform = 'uppercase'

//FOR CHANGE STYLES IS BETTER LEAVE THE RESPONSABILITY TO CSS IF I HAVE TO ADD STYLES ID BETTER USE A CLASS:

const card1 = document.querySelector('.card')
card1.classList.add('new-class', 'second-class')
card1.classList.remove('new-class')
console.log(card1)