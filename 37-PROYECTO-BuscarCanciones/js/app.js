import * as UI from './interfaz.js'
import API from './api.js'

const { form, message } = UI;

form.addEventListener('submit', searchSong)

function searchSong(e) {
    e.preventDefault();

    const artist = document.querySelector('#artista').value
    const song = document.querySelector('#cancion').value

    if (artist === '' && song === '') {
        message('this field cant be empty')

        return;
    }



    // Call Api
    const getData = new API(artist, song);
    getData.requestApi()
    //console.log(getData)

    form.reset()
}

