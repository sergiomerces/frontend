//selecionando elementos HTML usando o document

const todosH1 = document.getElementsByTagName('h1');
const paragrafo = document.getElementById('primeiro');
const paragrafoSegundo = document.querySelector('p#segundo');
const todosParagrafos = document.querySelectorAll('p');

console.log(todosH1[0]);
console.log(paragrafo);
console.log(paragrafoSegundo);
console.log(todosParagrafos);