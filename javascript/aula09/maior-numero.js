const prompt = require('readline-sync');

let maiorNumero = 0;
let numeroInformado;

for(let i = 0; i <= 5; i++) {
    numeroInformado = Number(prompt.question('Infomre um número maor que zero: '));

    if(numeroInformado > maiorNumero) {
        maiorNumero = numeroInformado;
    }
}

console.log(`Maior número ${maiorNumero}`);