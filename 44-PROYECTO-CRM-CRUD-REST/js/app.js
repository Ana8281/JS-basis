import { allClients, deleteClient } from './API.js'

const listClients = document.querySelector('#listado-clientes')

document.addEventListener('DOMContentLoaded', getClients)
listClients.addEventListener('click', removeClient)

async function getClients() { //I have to use async because when the DOMContent loads getClients still is not completed
    const clients = await allClients() //with async i sure that block the code until promise is completed and get all clients

    clients.forEach(client => {
        const { name, email, tel, company, id } = client

        const row = document.createElement('tr')

        row.innerHTML += `
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
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        `;

        listClients.appendChild(row)
    });
}

//remove a client
function removeClient(e) {
    if (e.target.classList.contains('eliminar')) {
        const clientId = parseInt(e.target.dataset.cliente);
    
        const conf = confirm('do you want to delete a client?')

        if (conf) {
            deleteClient(clientId)
        } else {
            console.log('not')
        }
    }
}

