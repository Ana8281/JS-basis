//intersection Observer native of javascript

//it is used to load imageonly when user go to any element
// or for a infinite scroll like instagram

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( entries => {
        if (entries[0].isIntersecting) {
            console.log('already visible')
        }
    })

    observer.observe(document.querySelector('.premium'))
})

