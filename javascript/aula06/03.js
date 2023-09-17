/*
Biblioteca baixada $ npm install readline-sync na pasta pai
A função deve ser chamada por uma variável com um alias .question
Executar no terminal com $ node
*/

const prompt = require("readline-sync");

console.clear();
const idade = prompt.question("Quantos anos você tem? ");
console.log(`Você tem ${idade} anos.`);