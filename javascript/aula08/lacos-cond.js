const prompt = require('readline-sync');

let saldo = -1;

while(saldo < 0) {
    saldo = Number(prompt.question('Qual é o seu saldo? '));
    console.log(saldo);
}