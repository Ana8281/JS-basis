const nav = document.querySelector('.navegacion');

//register an event
// nav.addEventListener('click', () => {
//     console.log('i am a menu')
// })

nav.addEventListener('mouseenter', () => {
    console.log('i am a menu enter');

    nav.style.background = 'pink';
})

nav.addEventListener('mouseout', () => {
    console.log('i am a menu out');
    nav.style.background = 'purple';
});

//mousedown  - similar to click
// click
//dbclick double click
//mouseup -  i do click and leave tge key 
