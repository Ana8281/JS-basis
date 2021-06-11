// Callbacks

const countries = ['France', 'Germany', 'Spain'];

function newCountry(country, callback) {
    setTimeout(() => {
        countries.push(country);
        callback();
    }, 1000)
}


function showCountries() {
    setTimeout(() => {
        countries.forEach(country => {
            console.log(country)
        })
    }, 1000)
}

showCountries();

newCountry('Italy', showCountries)