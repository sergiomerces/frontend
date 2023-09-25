/*
função de alta ordem de array

array.forEach(index, item, arrayCompleto);
uada para iterar/percorrer a lista
*/

const linguagens = ['HTML', 'CSS', 'JavaScript', 'Nodejs', 'PHP', 'SQL'];
console.clear();

/*foreach com retorno dos valores*/
console.log('Retorno dos valores');
linguagens.forEach(item => {
    console.log(item);
});

console.log('\n');

/*foreach com retorno dos índices*/
console.log('Retorno dos valores e índices');
linguagens.forEach((item, index) => {
    console.log(index, item);
});

console.log('\n');

/*foreach com retorno dos índices, valores e array completo*/
linguagens.forEach((item, index, arrayCompleto) => {
    console.log(index, item, arrayCompleto);
});