//load from  datos.txt
const loadTxt = document.querySelector('#cargarTxt')

loadTxt.addEventListener('click', getData)

function getData() {
    const url = 'data/datos.txt'

    fetch(url)//you can get or receive date iss native of javascript, repalce ajax
        .then(response => {
            console.log(response)

            return response.text()
        })
        .then(data => console.log(data))
        .catch( error => console.log(error))

}