import { form } from './selectors.js'
import {showMessage, validate}  from './funciones.js'
import {newClient} from './API.js'


form.addEventListener('submit', saveClient)


function saveClient(e) {
    e.preventDefault()

    const name = document.querySelector('#nombre').value,
        email = document.querySelector('#email').value,
        tel = document.querySelector('#telefono').value,
        company = document.querySelector('#empresa').value;


    const ObjClient = {
        name,
        email,
        tel,
        company
    } 


    if (validate(ObjClient)) {
        showMessage('field can be empty')
        return;
    }

    newClient(ObjClient)
}

