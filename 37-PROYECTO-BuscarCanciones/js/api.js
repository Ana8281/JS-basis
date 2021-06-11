import * as UI from './interfaz.js'

class API {
    constructor(artist, song) {
        this.artist = artist
        this.song = song
    }

    requestApi() {
    const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}/`

    fetch(url)
        .then(result => result.json())
        .then(data => {
            if (data.lyrics) {
                const { lyrics } = data

                UI.result.textContent = lyrics
                UI.title.textContent = `${this.song} by ${this.artist}`
            } else {
                UI.message('No lyrics found')
                UI.result.textContent = ''
                UI.title.textContent = ''
            }
        })
        .catch(error => console.log(error))
    }

}

export default API;