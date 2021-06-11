//Variables
const sendButton = document.querySelector('#enviar'),
    inputEmail = document.querySelector('#email'),
    inputSubject = document.querySelector('#asunto'),
    inputMessage = document.querySelector('#mensaje'),
    formGeneral = document.querySelector('#enviar-mail'),
    expresRegular = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    resetBtn = document.querySelector('#resetBtn');


eventListeners();

function eventListeners() {
    // Inilializing app
    window.addEventListener('DOMContentLoaded', initApp);

    //validating fields of forms
    inputEmail.addEventListener('blur', validatingForm)
    inputSubject.addEventListener('blur', validatingForm)
    inputMessage.addEventListener('blur', validatingForm)

    //reset form
    resetBtn.addEventListener('click', resetForm)

    //send email
    formGeneral.addEventListener('submit',  sendEmail);


}

function initApp() {
    sendButton.disabled = true;
    sendButton.classList.add('cursor-not-allowed', 'opacity-50');
}

function validatingForm(e) {
    if (e.target.value.length > 0) {
        const error = document.querySelector('p.error');

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');

        //eliminate errors
        if (error) {
            error.remove();
        }
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        showError('All fields are mandatory');
    }

    if (e.target.type === 'email') {
        if ( expresRegular.test(e.target.value)) {
            const error = document.querySelector('p.error');

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border',  'border-green-500');

            if (error) {
                error.remove();
            }
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            showError('this email is not valid');
        }
    }

    if (expresRegular.test(email.value) && inputSubject.value !== '' && inputMessage.value !== '') {
        sendButton.disabled = false;
        sendButton.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        showError('the are fields by validate');
    }
}

function showError(message) {
    const labelError = document.createElement('p');
    labelError.innerText = message;
    labelError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formGeneral.appendChild(labelError);
    }
}

function sendEmail(e) {
    e.preventDefault();

    //show spinner
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';
        const msg = document.createElement('p');
        msg.innerText = 'your message was added succesfully';
        msg.classList.add('text-center', 'my-10', 'bg-green-500', 'text-white', 'p-2', 'font-bold', 'uppercase');
        formGeneral.insertBefore(msg, spinner);

        setTimeout(() => {
            msg.remove();
            resetForm();
        }, 5000)
    }, 3000)
}



//reset form
function resetForm() {
    formGeneral.reset();
    initApp();
}
