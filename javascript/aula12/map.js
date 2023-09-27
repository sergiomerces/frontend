/*
método que chama a função passada como parâmetro para cada elemento do array e devolve um novo array como resultado do mesmo tamanho que o original
*/
console.clear();

const numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*exemplo1 gerando uma tabuada*/
console.log('Gerando uma Tabuada')
const tabuada = numero.map(item => item * 7);

console.table(tabuada);

/*elevando todos os elementos ao quadrado*/
console.log('Elevando ao quadrado')

const quadrado = numero.map((item) => Math.pow(item, 2));
console.table(quadrado);