const url = 'https://picsum.photos/list'


document.addEventListener('DOMContentLoaded', getData)


// function getData() {
//     fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// }

// Now with asyn/away

async function getData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}



