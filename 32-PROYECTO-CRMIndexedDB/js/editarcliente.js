import { DB, form, nameInput, emailInput, telInput, companyInput } from './selectors.js';
import { conectDB, message } from './functions.js';

let newDB = DB;
let idClient;

document.addEventListener('DOMContentLoaded', () => {
    conectDB();

    //update info client when edit
    form.addEventListener('submit', updateClient)

    //VERIFY ID OF THE URL
    const parametersUrl = new URLSearchParams(window.location.search);

    idClient = parametersUrl.get('id');

    const openConection = window.indexedDB.open("crm", 1);

    openConection.onsuccess = () => {
        newDB = openConection.result;

        if (idClient) {
            getClient(idClient);
        }
    }
});

function getClient(id) {
    //insert Register in indexedBD
    const transaction = newDB.transaction(["crm"], "readwrite");

    //enable objectStore
    const objectStore = transaction.objectStore("crm");

    const client = objectStore.openCursor();

    client.onsuccess = function(e) { 
        const cursor = e.target.result;

        if (cursor) {
            if (cursor.value.id === Number(id)) {
                fillOutForm(cursor.value);
            }
            cursor.continue();
        }
    }
}

function fillOutForm(infoClient) {
    const { name, email, tel, company, id } = infoClient;

    nameInput.value = name;
    emailInput.value = email;
    telInput.value = tel;
    companyInput.value = company;
}

function updateClient(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || telInput.value === '' || companyInput.value === '') {
        message("Any field can't be empty", "error")

        return;
    }

    const clientUpdated = {
        name: nameInput.value,
        email: emailInput.value,
        tel: telInput.value,
        company: companyInput.value,
        id: Number(idClient) //id in database is a number
    }

    //update register
    //insert Register in indexedBD
    const transaction = newDB.transaction(["crm"], "readwrite");

    //enable objectStore
    const objectStore = transaction.objectStore("crm");

    objectStore.put(clientUpdated)

    transaction.oncomplete = () => {
        message('Saved correctly');

        setTimeout(() => {
            window.location.href = 'index.html'
        }, 2000);
    }

    transaction.onerror = () => {
        message('there was an error', 'error')
    }
}
