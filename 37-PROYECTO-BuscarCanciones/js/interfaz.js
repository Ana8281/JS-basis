export const form = document.querySelector('#formulario-buscar'),
    search = document.querySelector('#buscar'),
    msgs = document.querySelector('#mensajes'),
    result = document.querySelector('#resultado'),
    title = document.querySelector('.letra-resultado h2');


export function message(txt) {
    const error = document.querySelector('.error');

    if (!error) {
        msgs.classList.add('error')
        msgs.innerHTML = txt

        form.appendChild(msgs)

        setTimeout(() => {
            msgs.remove()
        }, 3000)
    }

}