import { form, DB, listClientes } from './selectors.js';

let newDB = DB;

export function message(text, type) {
    const alert = document.querySelector('.alert'); //class alert works to not repeat an fill of  many messages
    
    if (!alert) {
        const containMsg = document.createElement('div');
        containMsg.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alert')// class alert works to not repeat many messages

        if (type === 'error') {
            containMsg.classList.add('bg-red-100', 'border-red-400', 'text-red-700')
        } else {
            containMsg.classList.add('bg-green-100', 'border-green-400', 'text-green-700')
        }

        containMsg.textContent = text;
        if(form) {
            form.appendChild(containMsg);
        } else {
            listClientes.appendChild(containMsg)
        }


        setTimeout(() => {
            containMsg.remove()
        }, 3000);
    }

}

export function conectDB() {
    const openConection = window.indexedDB.open("crm", 1);

    openConection.onsuccess = () => {
        newDB = openConection.result;
    }

    openConection.onerror = () => {
         console.log('there were an error')
    }
}

