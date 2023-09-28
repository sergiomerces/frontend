const alunos = [
    {
        nome: 'Quincy',
        media: 96
    },

    {
        nome: 'Jason',
        media: 84
    },

    {
        nome: 'Alexis',
        media: 100
    },

    {
        nome: 'Sam',
        media: 65
    },

    {
        nome: 'Katie',
        media: 90
    }
];

const alunosAprovados = alunos.filter(aluno => aluno.media >= 70);
const alunosReprovados = alunos.filter(aluno => aluno.media < 70);

console.log('Alunos Aprovados');
console.table(alunosAprovados);
console.log('Alunos Reprovados');
console.table(alunosReprovados);