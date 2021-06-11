// Load API

const loadApi = document.querySelector('#cargarAPI');

loadApi.addEventListener('click', getData)

function getData() {
    const url = 'https://picsum.photos/list'

    fetch(url)
        .then(response => response.json())
        .then(response => showHtml(response))
        .catch(error => console.log(error))
}

function showHtml(data) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    data.map(profile => {
        const { author, post_url } = profile;

        html += `
            <p>Author: ${author}</p>
            <a href="${post_url}" target="_blank">See image</a>`
    })

    contenido.innerHTML = html;
}