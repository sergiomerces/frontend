/*
verifica se ao menos um dos elementos de um array seguem uma determinada condição retornada pela função
ao menos um deve ser verdadeiro para ter um retorno verdadeiro

array.some();
*/

const numeros = [40, 34, 67, 89, 23, 16, 10];

const todosPositivos = numeros.some((elemento) => elemento % 2 == 0);
const maiorQueDez = numeros.some((elemento) => elemento < 10);

console.log(todosPositivos);
console.log(maiorQueDez);