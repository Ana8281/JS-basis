const newlink = document.createElement('a')
newlink.href = '#'
newlink.textContent = 'new link'
newlink.target = '_blank'
const navi = document.querySelector('.navegacion')

//navi.appendChild(newlink)

//if i want to add in an specdific position
navi.insertBefore(newlink, navi.children[0] )



//createting a new card
const pargraph1 = document.createElement('p');
pargraph1.textContent = 'Concierto';
pargraph1.classList.add('categoria', 'clase')

const pargraph2 = document.createElement('p');
pargraph2.textContent = 'Concierto de Rock';
pargraph2.classList.add('titulo');

const pargraph3 = document.createElement('p');
pargraph3.textContent = '$800 por persona';
pargraph3.classList.add('precio');

const info1 = document.createElement('div');
info1.classList.add('info')
info1.appendChild(pargraph1);
info1.appendChild(pargraph2);
info1.appendChild(pargraph3);

const image1 = document.createElement('img');
image1.src = './img/hacer4.jpg';


const newCard = document.createElement('div');
newCard.classList.add('card')
newCard.appendChild(image1);
newCard.appendChild(info1);

const parentCard = document.querySelector('.contenedor-cards');
parentCard.insertBefore(newCard, parentCard.children[0]);





