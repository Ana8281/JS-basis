//Constructores

function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

function UI() {

}

//prototypes
UI.prototype.years = () => { //can be an array because i not need "this"
    const maxYear = new Date().getFullYear(),
        minYear = maxYear - 20,
        yearSelect = document.querySelector('#year');

    for(i = maxYear; i > minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        yearSelect.appendChild(option)
    }
}

UI.prototype.message = (msg, type) => {//can be an array because i not need "this"
    const containerMsg = document.createElement('div');

    clearHtml();

    if (type === 'error') {
        containerMsg.classList.add('error');

    } else {
        containerMsg.classList.add('correcto')
    }

    containerMsg.classList.add('mensaje','mt-10');
    containerMsg.textContent = msg;
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(containerMsg, document.querySelector('#resultado'))

    setTimeout(() => {
        containerMsg.remove()
    }, 2000)

}

UI.prototype.showResult = (insurance, total) => {
    const result = document.createElement('div'),
        loading = document.querySelector('#cargando');

    const {brand, year, type} = insurance;

    let insuranceType;

    switch (brand) {
        case '1':
            insuranceType = 'Americano';
            break;
        case '2':
            insuranceType = 'Asiatico';
            break;
        case '3':
            insuranceType = 'Europeo';
            break;
    default:
            break;
    }


    loading.style.display = 'block';
    result.classList.add('mt-10');

    const html = `
        <p class="header">Summary</p>
        <p class="font-bold">Type: <span class="font-normal">${insuranceType}</span></p>
        <p class="font-bold">Year: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Insurance: <span class="font-normal">${type}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
        `;


    result.innerHTML = html;

    setTimeout(() => {
        loading.style.display = 'none';
        document.querySelector('#resultado').appendChild(result);
    }, 2000);
}

Insurance.prototype.calculateInsurance = function () {
    /*
        1. Americano 1.15
        2. Asiatico 1.05
        3. Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch (this.brand) {
        case  '1':
            cantidad = base * 1.15;
            break;
        case  '2':
            cantidad = base * 1.05;
            break;
        case  '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //insurance cantidad is reduce to 3% every year
    const difference = new Date().getFullYear() - this.year; 

    cantidad -= ((difference * 3) * cantidad) / 100;

    /*
        if insurance is basic: it has to be * 30%
        if insurance is complete: it has to be * 50%
    */
   if (this.type === 'basico') {
       cantidad *= 1.30;
   } else {
       cantidad *= 1.5;
   }

    return cantidad;
}

const ui = new UI();

//EventListeners
document.addEventListener('DOMContentLoaded', () => {
    ui.years();
});

eventListeners();

function eventListeners() {
    const form = document.querySelector('#cotizar-seguro')
    form.addEventListener('submit', quoteInsurance);
}

//NOTE: selectors is not good to add in a prototype

//Functions
function  quoteInsurance() {
    const brand = document.querySelector('#marca').value,
        year = document.querySelector('#year').value,
        type = document.querySelector('input[type="radio"]:checked').value;

    if (brand === '' || year === '' || type === '') {
        ui.message('this filed cant be empty', 'error');
        return;
    }

    ui.message('Quote insurance...', 'correcto');

    const insurance = new Insurance(brand, year, type);

    const total = insurance.calculateInsurance();

    ui.showResult(insurance, total);
}

function clearHtml() {
    const result = document.querySelector('#resultado');

    while (result.firstChild) {
        result.firstChild.remove();
    }

}
