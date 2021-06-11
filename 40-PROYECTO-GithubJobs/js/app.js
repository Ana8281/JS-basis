//Use AXIOS: Fetch improved

const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');


document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', readForm)
})

function readForm(e) {
    e.preventDefault();

    const search = document.querySelector('#busqueda').value

    if (search.length < 3) {
        message('search very short')
    }

    consultApi(search)
}

function consultApi(search) {
    const githuburl = `https://jobs.github.com/positions.json?search=${search}`;
    
    //avoiding cors policy
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(githuburl)}`

    axios.get(url)
     .then(response => showVacancies(JSON.parse(response.data.contents)))
     .catch(error => console.log(error))
}

function showVacancies(vacancies) {
    while (result.firstChild) {
        result.removeChild(result.firstChild)
    }

    console.log(vacancies)

    if (vacancies.length> 0) {
        result.classList.add('grid')

        vacancies.forEach(vacancy => {
        const { company, title, type, url} = vacancy
        
        result.innerHTML += `<div class="shadow bg-white p-6 rounded">
                <h2 class="text-2xl font-light mb-4">${title}</h2>
                <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
            </div>`
        });
    } else {
        const noResults = document.createElement('div')
        noResults.classList.add('w-full', 'text-gray-600', 'text-center', 'mt-10')
        result.classList.remove('grid')
        noResults.textContent = 'No Results have been found, try with another search'
        result.appendChild(noResults)
    }
}

function message(txt) {
    const error = document.querySelector('.error');

    if (!error) {
        msg = document.createElement('p');
        msg.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta')
        msg.innerHTML = `<strong class="font-bold">!Error</strong>
            <span class="block">${txt}</span>`

        form.appendChild(msg)

        setTimeout(() => {
            msg.remove()
        }, 3000)
    }
}