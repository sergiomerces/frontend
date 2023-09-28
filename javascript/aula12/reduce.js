/*
método que executa para cada elemento do array a função que foi passada como parâmetro resultando em um elemento único

imagine que você queira calcular a soma dos elementos de um array

arr.reduce((acumulador, elemento, index, arrayCompleto) => {
    return elemento + acumulador;
}, 0);

o acumulador é aquilo que estamos reduzindo
*/

const numeros = [1, 2, 3, 4, 5];

//somando os elementos de um array
const soma = numeros.reduce((acumulador, elemento) => {
    return elemento + acumulador;
}, 0);

//calculando a média de um array
const media = numeros.reduce((acumulador, numero, _, arrayCompleto) => {
    return numero / arrayCompleto.length + acumulador
}, 0);

//soma dos pares
const somaDosPares = numeros.reduce((acumulador, numero) => {
    if(numero % 2 === 0) {
        return acumulador + numero
    } else {
        return acumulador;
    } 
}, 0);

console.clear();
console.log(numeros);
console.log(`A soma do array é ${soma}`);
console.log(`A média do array é ${media}`);
console.log(`A soma dos números pares é ${somaDosPares}`);