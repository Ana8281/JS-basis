import { getClient, updateInfoClient } from './API.js'
import {showMessage, validate}  from './funciones.js'
import { form } from './selectors.js'

const nameValue = document.querySelector('#nombre'),
emailValue = document.querySelector('#email'),
telValue = document.querySelector('#telefono'),
companyValue = document.querySelector('#empresa'),
idInput = document.querySelector('#id');

document.addEventListener('DOMContentLoaded', async () => {
   const parametersUrl = new URLSearchParams(window.location.search)

   const idClient = parseInt(parametersUrl.get('id'))

   const editClient = await getClient(idClient)

   showClient(editClient)

    //submit to form
    form.addEventListener('submit', updateClient)
})

function showClient(client) {
    const { name, email, tel, company, id } = client
    nameValue.value = name;
    emailValue.value = email;
    telValue.value = tel;
    companyValue.value = company;
    idInput.value = id;
}

function updateClient(e) {
    e.preventDefault();
    
    const client = {
        name: nameValue.value,
        email: emailValue.value,
        tel: telValue.value,
        company: companyValue.value,
        id:  parseInt(idInput.value)
    }

    if (validate(client)) {
        showMessage('field can be empty')
        return;
    }

    //update register
    updateInfoClient(client)
}


