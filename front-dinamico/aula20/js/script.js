//selecionando elementos HTML usando o document

const todosH1 = document.getElementsByTagName('h1');
const paragrafo = document.getElementById('primeiro');
const paragrafoSegundo = document.querySelector('p#segundo');
const todosParagrafos = document.querySelectorAll('p');

console.log(todosH1[0]);
console.log(paragrafo);
console.log(paragrafoSegundo);
console.log(todosParagrafos);

console.clear();


// alterando os conteúdos do elementos da DOM
const primeiroParagrafo = document.querySelector('p#primeiro');

console.log('textContent: ', primeiroParagrafo.textContent);
console.log('innerText', primeiroParagrafo.innerText);
console.log('innerHTML', primeiroParagrafo.innerHTML);

primeiroParagrafo.textContent = 'Outra coisa digitada.';

console.log(primeiroParagrafo.innerText);

console.clear();

const email = document.querySelector('input#inp-email');
console.log(email.value);

email.value = 'sergiomerces@outlook.com';

//criando elementos HTML com JavaScript
const lista = document.querySelector('ul.lista'); //captura  a lista
const novaTagLi = document.createElement('li'); //cria um item li

console.log(novaTagLi);
novaTagLi.textContent = 'Segundo item'; //altera o conteúdo de li
console.log(novaTagLi.innerText); //imprime no console o conteúdo de li
//lista.appendChild(novaTagLi); //renderiza no navegador o conteúdo de li

const listaLis = document.querySelectorAll('ul.lista > li');
lista.insertBefore(novaTagLi, listaLis[1]);
lista.removeChild(novaTagLi);