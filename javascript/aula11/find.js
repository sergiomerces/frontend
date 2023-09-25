/*
array.find(() => {})
útil para encontrar um valor dentro do array
*/

console.clear();
const numeros = [7, 12, 19, 25, 27];

const encontrado = numeros.find((numero) => {
    return numero > 25;
}
);

/*retorna o primeiro valor encontrado que atende a condição*/
console.log(encontrado);
console.log('\n');

const cidades = ['Salto', 'Itu', 'Indaiatuba', 'Cabreúva', 'Porto Feliz', 'Elias Fausto'];

const acharCidade = cidades.find((cidade) => {
    return cidade === 'Salto';
});

console.log(acharCidade);