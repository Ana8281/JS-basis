//variables
const petInput = document.querySelector('#mascota'),
    ownerInput  = document.querySelector('#propietario'),
    telephoneInput = document.querySelector('#telefono'),
    dateInput = document.querySelector('#fecha'),
    hourInput = document.querySelector('#hora'),
    symptomInput = document.querySelector('#sintomas'),
    form = document.querySelector('#nueva-cita'),
    containerCitas = document.querySelector('#citas');

let editing; //variable that defines if i am in edition mode


//events
eventListeners();

function eventListeners() {
    petInput.addEventListener('input', dataCita);

    ownerInput.addEventListener('input', dataCita);

    telephoneInput.addEventListener('input', dataCita);

    dateInput.addEventListener('input', dataCita);

    hourInput.addEventListener('input', dataCita);

    symptomInput.addEventListener('input', dataCita);

    form.addEventListener('submit', validateData);

}


//main object
const citaObject = {
    pet: '',
    owner: '',
    tel: '',
    date: '',
    hour: '',
    symptoms: ''
}

//Classes
class Appoinment {
    constructor() {
        this.citas = [];
    }

    addListDates(dates) {
        this.citas = [...this.citas, dates];
    }

    eliminalteDate(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editDate(dateUpated) {
        this.citas = this.citas.map(cita => cita.id === dateUpated.id ? dateUpated : cita);
    }
}

class Ui {
    message(text, type) {
        const divMessage = document.createElement('div');

        divMessage.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if (type === 'error') {
            divMessage.classList.add('alert-danger');
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }

        divMessage.textContent = text;

        document.querySelector('#contenido').insertBefore(divMessage, document.querySelector('#agregar-cita'));

        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }

    showDatesHtml({citas}) { //i can access directly to dates applynig destructuring in the parameter
        this.clearHtml();

        citas.forEach(cita => {
            const {pet, owner, tel, date, hour, symptoms, id} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            //elements cita
            const petParagraph = document.createElement('h2');
            petParagraph.classList.add('card-title', 'font-weight-bolder');
            petParagraph.textContent = pet;

            const ownerParagraph = document.createElement('p');
            ownerParagraph.innerHTML = `<span class="font-weight-bolder">Owner: </span>${owner}`;

            const telParagraph = document.createElement('p');
            telParagraph.innerHTML = `<span class="font-weight-bolder">Tel: </span>${tel}`;

            const dateParagraph = document.createElement('p');
            dateParagraph.innerHTML = `<span class="font-weight-bolder">Date: </span>${date}`;

            const hourParagraph = document.createElement('p');
            hourParagraph.innerHTML = `<span class="font-weight-bolder">Hour: </span>${hour}`;

            const symptomsParagraph = document.createElement('p');
            symptomsParagraph.innerHTML = `<span class="font-weight-bolder">Symptoms: </span>${symptoms}`;   

            //add paragraph to divCita
            divCita.appendChild(petParagraph);
            divCita.appendChild(ownerParagraph);
            divCita.appendChild(telParagraph);
            divCita.appendChild(dateParagraph);
            divCita.appendChild(hourParagraph);
            divCita.appendChild(symptomsParagraph);

            containerCitas.appendChild(divCita);

            //eliminate Button
            const button = document.createElement('button');
            button.type = 'submit';
            button.classList.add('btn', 'btn-danger', 'mr-2');
            button.innerHTML = `Remove <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>`;
            divCita.appendChild(button);

            button.onclick = () => eliminalteDate(id);

            //edit button
            const editButton = document.createElement('button');
            editButton.classList.add('btn', 'btn-info', 'mr-2');
            editButton.innerHTML = `Edit <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>`;
            divCita.appendChild(editButton);

            editButton.onclick = () => loadEdition(cita);

        });
    }

    clearHtml() {
        while(containerCitas.firstChild) {
            containerCitas.firstChild.remove();
        }
    }
}

//instance  Classes

const ui = new Ui();

const appoinment = new Appoinment();



//functions
function dataCita(e) {
    citaObject[e.target.name] = e.target.value;

}

function validateData(e) {
    e.preventDefault();

    const {pet, owner, tel, date, hour, symptoms} = citaObject;

    if (pet === '' || owner === '' || tel === '' || date === '' || hour === '' || symptoms === '') {
        ui.message('this field can be empty', 'error');

        return;
    }

    if (editing) {
        ui.message('Edit successfully')

        //pass the cita object to the edition
        appoinment.editDate({...citaObject});

        // Back bottom to inital state
        form.querySelector('button[type="submit"]').textContent = 'Create Cita';

        //remove mode edition
        editing = false;


    } else {
        citaObject.id = Date.now(); //add an id to edit  or remove the date

        //creating a new date
        appoinment.addListDates({...citaObject}); //we must pass a copy of ths object and not the object itself

        //message added successfully
        ui.message('Added successfully')

    }

    //reset object for validation
    resetObject();

    //clear form after fill out all the fields
    form.reset();

   //show dates html
   ui.showDatesHtml(appoinment);

}

function resetObject() {
    citaObject.pet = '';
    citaObject.owner = '';
    citaObject.tel = '';
    citaObject.date = '';
    citaObject.hour = '';
    citaObject.symptoms = '';
}

function eliminalteDate(id) {
    //Eliminate date
    appoinment.eliminalteDate(id);

    //show message
    ui.message('The date was removed successful');

    //refresh the dates
    ui.showDatesHtml(appoinment);
}

function loadEdition(cita) {
    const {pet, owner, tel, date, hour, symptoms, id} = cita;


    //fill out the fields
    petInput.value = pet;
    ownerInput.value  = owner;
    telephoneInput.value = tel;
    dateInput.value = date;
    hourInput.value = hour;
    symptomInput.value = symptoms;


    //fiill out object validation
    citaObject.pet = pet;
    citaObject.owner = owner;
    citaObject.tel = tel;
    citaObject.date = date;
    citaObject.hour = hour;
    citaObject.symptoms = symptoms;
    citaObject.id = id;

    form.querySelector('button[type="submit"]').textContent = 'Save changes';

    editing = true;
}

