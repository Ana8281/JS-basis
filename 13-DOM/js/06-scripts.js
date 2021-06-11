const h1 = document.querySelector('.contenido-hero h1');
h1.textContent = 'hallo world'

console.log(h1.innerHTML)//it brings the html
console.log(h1.textContent)//it brings only the text

const image = document.querySelector('.contenedor-cards .card:nth-child(1) img')
image.src = './img/hacer2.jpg'