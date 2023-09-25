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
];

const buscaNome = pessoas.find((pessoa) => pessoa.nome === 'José');
const buscaIdade = pessoas.find((pessoa) => pessoa.idade > 25);

console.log(buscaNome);
console.log(buscaIdade);
