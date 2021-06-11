//scrolling Events

const scrolling = window.addEventListener('scroll', () => {
    //console.log(window.scrollY);
    const premium = document.querySelector('.premium');
    //console.log(premium.getClientRects()) new method to know the coordinates of an element
    if (premium.getClientRects()[0].top < 78) {
        console.log('i can see premium container')
    } else {
        console.log('i can not see')
    }
})