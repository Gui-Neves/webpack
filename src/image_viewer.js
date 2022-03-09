
import bigFausrek from '../assets/fausrek.jpg'
import smallFaustop from '../assets/faustop.png'

import '../styles/image-view.css';

const image = document.createElement('img');
image.src = smallFaustop

document.body.appendChild(image);


const bigImage = document.createElement('img');
bigImage.src = bigFausrek

document.body.appendChild(bigImage);