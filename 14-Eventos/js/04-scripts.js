//events for forms

const form = document.querySelector('#formulario');
form.addEventListener('submit', submitForm)

function submitForm(e) { //by default addevenlistener has the event so we no need to add the parameter in the callback function
    e.preventDefault(); //prevent the action
    console.log(e.target.action)
   // console.log(e.target.method)
}

