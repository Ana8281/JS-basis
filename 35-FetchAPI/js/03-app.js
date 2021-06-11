const loadJsonArray = document.querySelector('#cargarJSONArray');

loadJsonArray.addEventListener('click', loadJson)

function loadJson() {
    const url = 'data/empleados.json'

    fetch(url)
        .then(response => response.json())
        .then(response => showHtml(response))
        .catch(error => console.log(error))
}

function showHtml(data) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    data.map(employer => {
        const { empresa, id, nombre, trabajo } = employer;

        html += `
            <p>Employer: ${empresa}</p>
            <p>ID: ${id}</p>
            <p>Name: ${nombre}</p>
            <p>Job: ${trabajo}</p>`
    })

    contenido.innerHTML = html;
}