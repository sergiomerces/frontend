const prompt = require('readline-sync');

console.clear();

const idade = Number(prompt.question('Qual a sua idade? '));

idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade');

const mensagem = idade >= 16 ? 'Pode votar' : 'Não pode votar';

console.log(mensagem);