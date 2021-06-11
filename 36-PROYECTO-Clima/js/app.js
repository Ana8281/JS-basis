// Variables

const container = document.querySelector('.container')
const result = document.querySelector('#resultado')
const form = document.querySelector('#formulario')


window.addEventListener('load', () => {
    form.addEventListener('submit', searchWeather)
})

function searchWeather(e) {
    e.preventDefault()

    // validate
    const city = document.querySelector('#ciudad').value,
        country = document.querySelector('#pais').value;

    if (city === '' || country === '') {
        showMsg('This field cant be empty')
        return;
    }

    // repuest API
    requestApi(city, country)

}

function showMsg(text) {
    const alert = document.querySelector('.bg-red-100')

    if (!alert) {
        const msg = document.createElement('div');
        msg.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center')

        msg.textContent = text;

        container.appendChild(msg)

        setTimeout(() => {
            msg.remove()
        }, 3000)
    }

}

function requestApi(city, country) {
    const apiId = '612d7a548281db0dbf9e590e3b1b6c88';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`

    spinner();

    fetch(url)
        .then(response => response.json())
        .then(data => {
            cleanHtml();

            if (data.cod === "404") {
                showMsg('City not found')

                return;
            }

            showHtml(data)
        })
        .catch(error => console.log(error))

}


function showHtml(data) {
    console.log(data)
    const { name, main: {temp, temp_max, temp_min}} = data

    const celsius = kelvinToCelsius(temp);
    const tempMax = kelvinToCelsius(temp_max);
    const tempMin = kelvinToCelsius(temp_min);

    const nameCity = document.createElement('p');
    const weather = document.createElement('p');
    const weatherMax = document.createElement('p');
    const weatherMin = document.createElement('p');

    nameCity.classList.add('font-bold', 'text-2xl');
    nameCity.innerHTML = `Weather in ${name}:`;

    weather.classList.add('font-bold', 'text-6xl')
    weather.innerHTML = `${celsius} &#8451;`;

    weatherMax.classList.add('text-xl');
    weatherMax.innerHTML = `Max temperature: ${tempMax} &#8451;`;

    weatherMin.classList.add('text-xl');
    weatherMin.innerHTML = `Min temperature: ${tempMin} &#8451;`;

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('text-center', 'text-white');

    resultDiv.appendChild(nameCity)
    resultDiv.appendChild(weather)
    resultDiv.appendChild(weatherMax)
    resultDiv.appendChild(weatherMin)

    result.appendChild(resultDiv)
}

const kelvinToCelsius = grade => parseInt(grade - 273.15);

function cleanHtml() {
    while (result.firstChild) {
        result.removeChild(result.firstChild)
    }
}

function spinner() {
    const spinner = document.createElement('div')
    spinner.classList.add('sk-fading-circle')

    spinner.innerHTML = `<div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>`

    result.appendChild(spinner)
}