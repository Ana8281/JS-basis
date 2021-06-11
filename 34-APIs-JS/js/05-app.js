//visibility state: Knowing if a user is looking in the current page or not
// is very useful when youtube stop a video if user change the tab
//console.log(document.visibilityState)

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Execute function to reproduce the video...')
    } else {
        console.log('Pause the video...')
    }
})