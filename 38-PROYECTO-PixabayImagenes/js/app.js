const form = document.querySelector('#formulario'),
    result = document.querySelector('#resultado'),
    paginationContainer = document.querySelector('#paginacion');

const registersByPage = 40;

let totalHits;
let iterator;
let actualPage = 1;

window.onload = () => {
    form.addEventListener('submit', getData)
}

function getData(e) {
    e.preventDefault();

    const term = document.querySelector('#termino').value

    if (term === '') {
        message('add term to the search')

        return;
    }

    searchImages()

}

function message(txt) {
    const error = document.querySelector('.bg-red-100');
        

    if (!error) {
        msg = document.createElement('p');
        msg.classList.add('bg-red-100', 'bg-white-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center')
        msg.innerHTML = `<strong class="font-bold">!Error</strong>
            <span class="block">${txt}</span>`
    
        form.appendChild(msg)
    
        setTimeout(() => {
            msg.remove()
        }, 3000)
    }
}

function searchImages() {
    const term = document.querySelector('#termino').value;
    
    const idKey = '21116393-82b2107d7e00eff76b8ba205d'

    const url = `https://pixabay.com/api/?key=${idKey}&q=${term}&per_page=${registersByPage}&page=${actualPage}`

    fetch(url)
        .then(result => result.json())
        .then(data => {
            totalHits = totalPages(data.totalHits)
            showImages(data.hits)
        })
        .catch(error => console.log(error))
}

function showImages(images) {
    while(result.firstChild) {
        result.removeChild(result.firstChild)
    }
    
    (images).forEach(image => {
        const { previewURL, likes, views, largeImageURL } = image

        result.innerHTML += `<div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">
                    <div class="p-4">
                        <p class="font-bold">${likes}<span class="font-light"> I like</span></p>
                        <p class="font-bold">${views}<span class="font-light"> times view</span></p>
                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase text-center font-bold rounded mt-5 p-1" href="${largeImageURL}" target="_blank">See Image</a>
                        </div>
                </div>
            </div>`
    });

    //clean previous paginator
    while (paginationContainer.firstChild) {
        paginationContainer.removeChild(paginationContainer.firstChild)
    }


    printPaginator()
}


function totalPages(total) {
    return parseInt( Math.ceil(total / registersByPage))
}

//Generator is going to register the quantity of pages according to the pages

function *createPaginator(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

function printPaginator() {
    iterator = createPaginator(totalHits);

    while(true) {
        const { value, done } = iterator.next();

        if (done) return;

        //else
        const btn = document.createElement('a');
        btn.href = '#';
        btn.dataset.pagina = value;
        btn.textContent = value;
        btn.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-10', 'uppercase', 'rounded' )

        btn.onclick = () => {
            actualPage = value;

            searchImages();
        }

        paginationContainer.appendChild(btn)
    }




}
