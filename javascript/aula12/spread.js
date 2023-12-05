const pessoa = {
        nome: 'Sérgio',
        idade: 44,
        altura:1.70
    }

//desestruturação ou spread (operator)
const pessoaComPeso = {
    //copia as propriedades do objeto anterior
    ...pessoa,
    //acrescenta a propriedade peso
    peso: 91.2
}

console.table(pessoa);
console.table(pessoaComPeso);