//variables
const blockCar = document.querySelector('#carrito'),
    containerCar = document.querySelector('#lista-carrito tbody'),
    cleanCar  = document.querySelector('#vaciar-carrito'),
    listCourses = document.querySelector('#lista-cursos');

let productsCarrito = [];

//event listeners
loadEventListeners();

function loadEventListeners() {
    //add course to carrito
    listCourses.addEventListener('click', addCourse);


    //eliminate course carrito
    carrito.addEventListener('click', removeCourse);

    //clear carrito
    cleanCar.addEventListener('click', () => {
        productsCarrito = [];

        removeOldList();
    });
}


//functions 
function addCourse(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const selectedCourse = e.target.parentElement.parentElement;
        readDataCourse(selectedCourse);
    }
}

//read content html of the course and extract its info
function readDataCourse(course) {
    //create an object with the info actual
    const infoCourse = {
        img: course.querySelector('.imagen-curso').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
        quantity: '1'
    };

    //check if element exist carrito
    const idExist = productsCarrito.some( product => product.id === infoCourse.id);

    if (idExist) {
        // update the quantity
        const courses = productsCarrito.map( product => {
            if (product.id === infoCourse.id) {
                product.quantity++;

                return product; //return object update
            } else {
                return product; ////return object not duplicated
            }
        });

        productsCarrito = [...courses];
    } else {
        //update the course
        productsCarrito = [...productsCarrito, infoCourse];
    }

    addHtmlToCar(productsCarrito);
}

function addHtmlToCar() {
    //clean html
    removeOldList();

    //recorre carrito
    productsCarrito.map(course => {
        const {img, title, price, id, quantity} = course;
        const containerListCourses = document.createElement('tr');
        containerListCourses.innerHTML = `
            <td>
                <img src="${img}" width="100">
            </td>
            <td>${title}</td>
            <td>${price}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
            <td>${price}</td>
            <td>${quantity}</td>

        `;

        containerCar.appendChild(containerListCourses);
    });

}

function removeOldList() {
    //forma lenta
    //containerCar.innerHTML = '';
    while(containerCar.firstChild) {
        containerCar.removeChild(containerCar.firstChild);
    }
}


function removeCourse(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const courseId = e.target.getAttribute('data-id');

        productsCarrito = productsCarrito.filter(product => product.id !== courseId);

        addHtmlToCar() //iterate again over the car and show html

    }
}
