// arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>
// 1 - Acesse o elemento elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta');
// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'green';
// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText = 'Meu texto';
// 4 - Acesse o primeiroFilho a partir de pai
document.getElementById('pai').firstElemnteChild;
// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextSibling;
// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
// 8 - Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').lastElementChild.previousElementSibling;
// 9 - Crie um irmão para elementoOndeVoceEsta.
let paiElemento = document.getElementById('elementoOndeVoceEsta').parentElement;
// console.log(paiElemento);
let irmaoElemento = document.createElement('section');
paiElemento.appendChild(irmaoElemento);
// console.log(paiElemento);
// 10 - Crie um filho para elementoOndeVoceEsta.
let paiElemento2 = document.getElementById('elementoOndeVoceEsta');
let filhoElemento = document.createElement('section');
paiElemento2.appendChild(filhoElemento);
// console.log(paiElemento2);
// 11 - Crie um filho para primeiroFilhoDoFilho.
let paiElemento3 = document.getElementById('primeiroFilhoDoFilho');
let filhoElemento2 = document.createElement('section')
paiElemento3.appendChild(filhoElemento2);
// console.log(paiElemento3);
// 12 - A partir desse filho criado, acesse terceiroFilho.
filhoElemento2.parentElement.nextElementSibling;
// console.log(filhoElemento2.parentElement.parentElement.nextElementSibling);
