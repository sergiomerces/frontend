/*
método que chama a função passada como parâmetro para cada elemento do array e devolve um novo array como resultado do mesmo tamanho que o original
*/

const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tabuada = numero.map((item) => item * 7);

console.table(tabuada);