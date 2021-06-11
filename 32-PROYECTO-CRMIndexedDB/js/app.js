//(function() {
import { listClientes } from './selectors.js';
import { message } from './functions.js';

let DB;

document.addEventListener('DOMContentLoaded', () => {
    createDB();

    if (window.indexedDB.open("crm", 1)) {
        getClients()
    }

    listClientes.addEventListener('click', removeClient)
})

function createDB() {//create database from indexedDB
    const createDB = window.indexedDB.open("crm", 1);

    createDB.onsuccess = () => {
        DB = createDB.result;
    }

    createDB.onerror = () => {
        console.log('any index is unique')
    }

    createDB.onupgradeneeded = e => {
        const db  = e.target.result;

        const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoInrement: true})

        objectStore.createIndex('name', 'name', {unique: false})
        objectStore.createIndex('email', 'email', {unique: true})
        objectStore.createIndex('tel', 'tel', {unique: false})
        objectStore.createIndex('company', 'company', {unique: false})
        objectStore.createIndex('id', 'id', {unique: true})
    }
}

function getClients() {
    const openConection = window.indexedDB.open("crm", 1);

    openConection.onsuccess = () => {
        DB = openConection.result;

        const objectStore = DB.transaction('crm').objectStore('crm');

        objectStore.openCursor().onsuccess = function(e) { //this is like the forach of indexdb
            const cursor = e.target.result;

            if (cursor) {
                const {company, email, name, tel, id } = cursor.value;

                listClientes.innerHTML += `<tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <p class="text-gray-700">${tel}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${company}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminate">Eliminar</a>
                    </td>
                </tr>`;
                //go to next item
                cursor.continue();
            } else {
                console.log('there are not more registers')
            }
        }
    }

    openConection.onerror = () => {
        console.log('any index is unique')
    }

    openConection.onupgradeneeded = e => {
        const db  = e.target.result;

        const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoInrement: true})

        objectStore.createIndex('name', 'name', {unique: false})
        objectStore.createIndex('email', 'email', {unique: true})
        objectStore.createIndex('tel', 'tel', {unique: false})
        objectStore.createIndex('company', 'company', {unique: false})
        objectStore.createIndex('id', 'id', {unique: true})
    }
}

function removeClient(e) {
    if (e.target.classList.contains('eliminate')) {
        const idEliminate = Number(e.target.dataset.cliente);
        const confirmate = confirm('Do you want to eliminate tihs client');

        if (confirmate) {
            //insert Register in indexedBD
            const transaction = DB.transaction(["crm"], "readwrite");

            //enable objectStore
            const objectStore = transaction.objectStore("crm");

            objectStore.delete(idEliminate)

            transaction.oncomplete = () => {
                message('Eliminated');

                e.target.parent.parent.remove();
            }

            transaction.onerror = () => {
                message('there was an error', 'error')
            }
        }
    }
}
