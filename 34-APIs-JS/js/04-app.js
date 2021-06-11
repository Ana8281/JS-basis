//exectue full screen with js 

const openScreen = document.querySelector("#abrir-pantalla-completa")
const closeScreen = document.querySelector("#salir-pantalla-completa")
const img = document.querySelector(".containr img")

openScreen.addEventListener('click', openfullScreen)
closeScreen.addEventListener('click', closefullScreen)

function openfullScreen() {
    //img.requestFullscreen();
    document.documentElement.requestFullscreen();
}

function closefullScreen() {
    //img.exitFullscreen();
    document.exitFullscreen();
}
