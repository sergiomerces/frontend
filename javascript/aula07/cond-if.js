const prompt = require('readline-sync');

console.clear();
const idade = Number(prompt.question('Qual é a sua idade? '));
const ehMaiorDeIdade = idade >= 18;

if (ehMaiorDeIdade) {
    console.log('Você é maior de idade!');
} else {
    console.warn('Você é menor de idade!');
}