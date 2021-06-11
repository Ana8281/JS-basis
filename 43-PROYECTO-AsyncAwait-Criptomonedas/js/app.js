const criptoCoin = document.querySelector('#criptomonedas')
const coin = document.querySelector('#moneda');
const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

let objSearch = {
    moneda: '',
    criptomoneda: ''
}

document.addEventListener('DOMContentLoaded', () => {
    getCriptos()

    form.addEventListener('submit', readForm)

    coin.addEventListener('change', readValue)

    criptoCoin.addEventListener('change', readValue)
})

async function getCriptos() {

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    showSpinner();

    // fetch(url)
    //     .then(result => result.json())
    //     .then(data => showCriptos(data.Data))
    //     .catch( error => console.log(error))

    try {
        const response = await fetch(url)
        const result = await response.json()
        showCriptos(result.Data)

    } catch (error) {
        console.log(error)
    }

}

function showCriptos(coinValues) {
    coinValues.forEach(coinValue => {
        const { CoinInfo: {Name, FullName} } = coinValue;

        criptoCoin.innerHTML += `<option value="${Name}">${FullName}</option>`
    });
}

function readValue(e) {
    objSearch[e.target.name] = e.target.value
}

function readForm(e) {
    e.preventDefault();

    const { moneda, criptomoneda } = objSearch

    if (moneda === '' || criptomoneda === '') {
        message('Both fields should be not empty')
        return;
    }

    // consult Api with results
    consultApi()
}

function message(txt) {
    const error = document.querySelector('.error');

    if (!error) {
        msg = document.createElement('p');
        msg.classList.add('error')
        msg.innerHTML = `<strong class="font-bold">!Error</strong>
            <span class="block">${txt}</span>`

        form.appendChild(msg)

        setTimeout(() => {
            msg.remove()
        }, 3000)
    }
}


async function consultApi() {
    const { moneda, criptomoneda } = objSearch

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    // fetch(url)
    //     .then(result => result.json())
    //     .then(data => showChange(data.DISPLAY[criptomoneda][moneda]))
    //     .catch( error => console.log(error))
    try {
        const response = await fetch(url)
        const result = await response.json()
        showChange(result.DISPLAY[criptomoneda][moneda])

        
    } catch (error) {
        console.log(error)
    }
}

function showChange(data) {
    cleanHtml();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = data

    const price = document.createElement('p')

    price.innerHTML = `Price is: <span>${PRICE}</span>`

    const priceHigh = document.createElement('p')
    priceHigh.innerHTML = `Price hightest: <span>${HIGHDAY}</span>`

    const priceLow = document.createElement('p')
    priceLow.innerHTML = `Price lowest: <span>${LOWDAY}</span>`

    const lastHours = document.createElement('p')
    lastHours.innerHTML = `Variation last 24 hours: <span>${CHANGEPCT24HOUR}%</span>`

    const lastUpdate = document.createElement('p')
    lastUpdate.innerHTML = `Last Update: <span>${LASTUPDATE}</span>`

    result.appendChild(price)
    result.appendChild(priceHigh)
    result.appendChild(priceLow)
    result.appendChild(lastHours)
    result.appendChild(lastUpdate)

}

function cleanHtml() {
    while(result.firstChild) {
        result.removeChild(result.firstChild)
    }
}

function showSpinner() {
    cleanHtml()

    const spinner = document.createElement('div')
    spinner.classList.add('spinner')

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `

    result.appendChild(spinner)

}