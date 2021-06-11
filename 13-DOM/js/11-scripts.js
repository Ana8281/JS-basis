//Example DOM scripting

const btnFloat = document.querySelector('.btn-flotante')

 btnFloat.addEventListener('click', showHideFooter);

//another way
//document.querySelector('#footer').classList.toggle('activo')

 function showHideFooter() {
    if(document.querySelector('#footer').classList.contains('activo')) {
        document.querySelector('#footer').classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';

    } else {
      document.querySelector('#footer').classList.add('activo');
      this.classList.add('activo');
      this.textContent = 'X cerrar';

    }
 }