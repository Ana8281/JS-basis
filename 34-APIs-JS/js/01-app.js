//Apis natives in javascript
const notifyBtn = document.querySelector('#notificar')

notifyBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(result => console.log(`The result is ${result}`))
})


const seeNotify = document.querySelector('#verNotificacion')

seeNotify.addEventListener('click', () => {
   if (Notification.permission === 'granted') {
        const notification = new  Notification('This is the notification', {
            icon: 'img/ccj.png',
            body: 'learning how are native notifications'
        })

        notification.onclick = function() {
            window.open('https://www.google.com/')
        }
   }
})