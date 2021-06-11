//Detect if there is conection to internet or not


//to check is conect and disconect to wifi
window.addEventListener('online', updateState)
window.addEventListener('offline', updateState)

function updateState() {
    if (navigator.onLine) {
        console.log('you are conected')
    } else {
        console.log('you are not conected')
    }
}
