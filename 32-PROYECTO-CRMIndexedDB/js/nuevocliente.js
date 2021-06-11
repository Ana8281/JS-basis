import { conectDB, message } from './functions.js';
import { form, DB } from './selectors.js';
let newDB = DB;

document.addEventListener('DOMContentLoaded', () => {
    conectDB();

    form.addEventListener('submit', validateClient)
})

function validateClient(e) {
    e.preventDefault();

    const name = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const tel = document.querySelector('#telefono').value;
    const company = document.querySelector('#empresa').value;

    if (name === '' || email === '' || tel === '' || company === '') {
        message("Any field can't be empty", "error")
        return;
    }

    //create an object with information
    const clientObject = {
        name,
        email,
        tel,
        company
    }

    clientObject.id = Date.now();

    const openConection = window.indexedDB.open("crm", 1);

    openConection.onsuccess = () => {
        newDB = openConection.result;

        createNewClient(clientObject);
    }
}

function createNewClient(client) {

    //insert Register in indexedBD
    const transaction = newDB.transaction(["crm"], "readwrite");

    //enable objectStore
    const objectStore = transaction.objectStore("crm");

    //insert in database
    objectStore.add(client);

    transaction.oncomplete = function() {
        //Mostrar mensaje de que todo esta bien...
        message('client was added successfully')

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 1000)
    }

    transaction.onerror = function() {
        message('there was an error in the transaction', 'error')
    }
}
