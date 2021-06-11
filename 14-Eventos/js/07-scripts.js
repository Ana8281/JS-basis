//event bubbling with delegation


const card1 = document.querySelector('.card')

card1.addEventListener('click', e => {
    if (e.target.classList.contains('.categoria')) { //with event.target we can identifiyng to which element we do click
     console.log('you did click in category')
    }

    if (e.target.classList.contains('titulo')) { //with event.target we can identifiyng to which element we do click
        console.log('you did click in [title]')
       }

       if (e.target.classList.contains('precio')) { //with event.target we can identifiyng to which element we do click
        console.log('you did click in price')
       }
})