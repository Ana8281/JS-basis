// PWA
// it is faster,load all information in less than 5 minutes
///instalable. user can install in the navigator or phone
//support offline. works wihout internet conection

//service workes 
// it is the base of PWA. ]They are scripts running all the time behind stage
// it works offline
// it havent got acess to DOM
// loads instantly// you can synchronize data behind stage or interrupt the navigation
// use self
// use cache


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(registered => console.log('installed correctly', registered))
    .catch(error => console.log('failed instalation', error))
} else {
    console.log('serviceWorkers not supported')
}