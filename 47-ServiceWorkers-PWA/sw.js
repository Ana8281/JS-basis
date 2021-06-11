const nameCache = 'apv-v3';

const files = [ //these file are cached and loads without conecction to internet if i load many file the page will be slow
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
];


// install service worker
self.addEventListener('install', e => {
    console.log('Installed service worker');
    e.waitUntil( //here we cache the files. It waituntil wait until all the files have been downloaded
        caches.open(nameCache).then(cache => {
            console.log('cacheando')
            cache.addAll(files)
          })
    ) 
})

//activate service worker
self.addEventListener('activate', e => { //it is activate in applications -> Status activate in the browser
    console.log('activate service worker')
    e.waitUntil(
        caches.keys()
        .then( keys => {
            return Promise.all(
                keys.filter(key => key !== nameCache)
                    .map( key => caches.delete(key)) // remove the other keys and leave the last one
            )
        })
    )
})


// event fetch to download static files
self.addEventListener('fetch', e => {
    console.log(e, 'fetch...')

    e.respondWith( // give this response once we do the fetch
        caches.match(e.request) //review type of request and in case igual what we have in cache
            .then(responseCache => {
                return responseCache
            })
            .catch( () => caches.match('./error.html')) // remember add this page to caheh files
    )
})


