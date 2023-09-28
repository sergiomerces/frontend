/*
método que chama a função passada como parâmetro para cada elemento do array e devolve um novo array com vaores que atendem a condição estabelecida
*/
console.clear();

const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.table(numero)
console.log('Pesquisa')
const pesquisa = numero.filter(item => (item % 2 === 0));

console.log(pesquisa);

