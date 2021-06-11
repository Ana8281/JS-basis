//variables
const result = document.querySelector('#resultado'),
    max = new Date().getFullYear(),
    min = max - 10,
    brand = document.querySelector('#marca'),
    year = document.querySelector('#year'),
    minPrice = document.querySelector('#minimo'),
    maxPrice = document.querySelector('#maximo'),
    doors = document.querySelector('#puertas'),
    transmision = document.querySelector('#transmision'),
    color = document.querySelector('#color');

const dataSearch = {
    brand: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    doors: '',
    transmision: '',
    color: ''
}


//evenlisteners
document.addEventListener('DOMContentLoaded', () => {
    //generating select years
    generateYear();
});

brand.addEventListener('change', e => {
    dataSearch.brand = e.target.value;

    filterAutos();
});

year.addEventListener('change', e => {
    dataSearch.year = parseInt(e.target.value);

    filterAutos();
});

minPrice.addEventListener('change', e => {
    dataSearch.minPrice = parseInt(e.target.value);
    filterAutos();
});

maxPrice.addEventListener('change', e => {
    dataSearch.maxPrice = e.target.value;

    filterAutos();
});

doors.addEventListener('change', e => {
    dataSearch.doors = e.target.value;

    filterAutos();
});

transmision.addEventListener('change', e => {
    dataSearch.transmision = e.target.value;

    filterAutos();
});

color.addEventListener('change', e => {
    dataSearch.color = e.target.value;

    filterAutos();
});

//functiones
function showCars(filteredAutos) {
    clearResults();

    filteredAutos.forEach(auto => {
        const autoHtml = document.createElement('p');

        const {marca, modelo, year, puertas, transmision, precio, color} = auto; //use destructuring always

        autoHtml.textContent = `
            ${marca}
            ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio ${precio} - Color ${color}

        `;

        result.appendChild(autoHtml)
    });
}

function generateYear() {
    for (i = max; i >= min; i--) {
        const option = document.createElement('option');

        option.textContent = i;
        option.value = i;

        year.appendChild(option);
    }
}

function filterAutos() {
    const filteredAutos = autos.filter(filterBrand).filter(filterYear).filter(filterMinPrice).filter(filterMaxPrice).filter(filterDoors).filter(filterTransmision).filter(filterColor); //filterBrand : function hight level, it means one function that take aonther function

    if (filteredAutos.length) {
        showCars(filteredAutos);
    } else {
        noResults();
    }
}

function noResults() {
    clearResults();
    const noResults = document.createElement('div');

    noResults.classList.add('alerta', 'error')

    noResults.textContent = 'There are not results, try with other options'

    result.appendChild(noResults)
}

function filterBrand(auto) {
    const { brand } = dataSearch;

    if (brand) {
        return auto.marca === brand;
    }

    return auto;
}

function filterYear(auto) {
    const { year } = dataSearch;

    if (year) {
        return auto.year === year;
    }

    return auto;
}

function filterMinPrice(auto) {
    const { minPrice } = dataSearch;

    if (minPrice) {
        return auto.precio >= minPrice;
    }

    return auto;
}

function filterMaxPrice(auto) {
    const { maxPrice } = dataSearch;

    if (maxPrice) {
        return auto.precio <= maxPrice;
    }

    return auto;
}

function filterDoors(auto) {
    const { doors } = dataSearch;

    if (doors) {
        return auto.puertas === doors;
    }

    return auto;
}

function filterTransmision(auto) {
    const { transmision } = dataSearch;

    if (transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filterColor(auto) {
    const { color } = dataSearch;

    if (color) {
        return auto.color === color;
    }

    return auto;
}

function clearResults() {
    while(result.firstChild) {
        result.removeChild(result.firstChild);
    }
}
