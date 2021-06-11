//load json from empleados.json

const btnLoad = document.querySelector('#cargarJSON')

btnLoad.addEventListener('click', loadJson)

function loadJson() {
    const url = 'data/empleado.json'

    fetch(url)
        .then(response => response.json())
        .then(data => showHtml(data))
        .catch(error => console.log(error))
}


function showHtml({empresa, id, nombre, trabajo}) {
    const contenido = document.querySelector('.contenido')

    contenido.innerHTML = `
    <p>Employer: ${empresa}</p>
    <p>ID: ${id}</p>
    <p>Name: ${nombre}</p>
    <p>Job: ${trabajo}</p>`
}
