const prompt = require('readline-sync');

console.clear();
const numAleatorio = parseInt(Math.random() * 10);
var numUsuario = parseInt(prompt.question('Informe um número entre 0 e 10: '));

while(numUsuario !== numAleatorio) {
    console.log(numUsuario);
    numUsuario = Number(prompt.question('Informe um número entre 0 e 10: '));
}

console.log(`Parabéns o número era ${numUsuario}`);

