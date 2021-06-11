//events on inputs

const search = document.querySelector('.busqueda');

// search.addEventListener('keydown', () => {
//     console.log('writing...');
// });

// search.addEventListener('keyup', () => {
//     console.log('writing...');
// });

// search.addEventListener('blur', () => { //when leave the inputnm           
//     console.log('writing...');
// });

// search.addEventListener('copy', () => { //wtih cmd+c
//     console.log('writing...');
// });

// search.addEventListener('paste', () => { //cmd+v
//     console.log('writing...');
// });

// search.addEventListener('cut', () => { //cmd+x
//     console.log('writing...');
// });

search.addEventListener('input', (e) => { //it does all the events but not blur
    e.target.value === '' ? console.log('event failed') : console.log(e.target.value);
});
