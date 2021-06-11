//speech API (when user talks javascript interprate it by speechAPI)

const out = document.querySelector('#salida')
const microphone = document.querySelector('#microfono')

microphone.addEventListener('click', executeSpeechAPI)

// some webbrowser doesnt support speech like firefox, safari
function executeSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.start()

    recognition.onstart = function() {
        out.classList.add('mostrar')
        out.textContent = 'Listening...'
    }

    recognition.onspeechend = function() {
        out.textContent = 'Stopping of recording...'
        recognition.stop()
    }

    recognition.onresult = function(e) {
        //console.log(e.results[0][0])

        const { confidence, transcript} = e.results[0][0];

        const speech = document.createElement('p')
        speech.innerHTML = transcript;

        const confidencePercentage = document.createElement('p')
        confidencePercentage.innerHTML = `Confidence ${ parseInt(confidence * 100)} %`


        out.appendChild(speech)
        out.appendChild(confidencePercentage)
    }


}