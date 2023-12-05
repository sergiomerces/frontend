const permissoes  = 'admin';

console.clear();

switch(permissoes) {
    case 'aluno':
        console.log('Você só pode visualizar as aulas.');
        break;
    case 'professor':
        console.log('Você só pode alterar as aulas e adicionar exercícios.');
        break;
    case 'admin':
        console.log('Você pode fazer o que quiser no sistema.');
        break;
    default:
        console.log('Não sei quem é você no sistema!');
        break;
}