/*
verifica se todos elementos de um array seguem uma determinada condição retornada pela função
todos devem ser verdadiro para ter um retorno verdadeiro

array.every();
*/

const numeros = [40, 34, 67, 89, 23, 16, 10];

const todosPositivos = numeros.every((elemento) => elemento % 2 == 0);

console.log(todosPositivos);