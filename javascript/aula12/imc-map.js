const pessoa = [
    {
        nome: 'Sérgio',
        idade: 44,
        altura: 1.7,
        peso: 91
    },

    {
        nome: 'Izabel',
        idade: 41,
        altura: 1.7,
        peso: 88
    },

    {
        nome: 'Pablo',
        idade: 21,
        altura: 1.66,
        peso: 60
    },

    {
        nome: 'Pietra',
        idade: 15,
        altura: 1.66,
        peso: 50
    },

    {
        nome: 'José',
        idade: 6,
        altura: 1.2,
        peso: 15
    }
];

const pessoaComImc = pessoa.map((item) => {
    return {
        ...item,
        imc: item.peso / (item.altura ** 2)
    };
});

console.table(pessoaComImc);