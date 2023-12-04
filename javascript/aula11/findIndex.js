/*
função de alta ordem findIndex()

quando não encontra o valor retorna -1
*/

console.clear();

const pessoas = [
    {
        nome: 'Izabel',
        signo: 'leão',
        idade: 40
    },

    {
        nome: 'Pablo',
        signo: 'touro',
        idade: 21
    },

    {
        nome:'Pietra',
        signo: 'libra',
        idade: 15
    },

    {
        nome: 'José',
        signo: 'touro',
        idade: 6
    }
];b

const buscaIdade = pessoas.findIndex((pessoa) => pessoa.idade > 25);

console.log(buscaIdade);
console.table(pessoas);
