const pessoa = {
    nome: 'Sérgio',
    sobrenome: 'Mercês',
    idade: 44,
    altura: 1.70,
    signo: 'leão',
    ehDestro: false,
    linguagens: ['HTML', 'CSS', 'JAVASCRIPT', 'NODEJS', 'C/C++', 'PYTHON']
}

console.log(pessoa);

const { nome, sobrenome, idade } = pessoa;

console.log(nome);
console.log(sobrenome);
console.log(idade);