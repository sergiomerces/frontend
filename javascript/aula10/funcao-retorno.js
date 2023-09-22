
/*os valores padrronizados são usados caso  usuário não passe nehum parâmetro*/
function saudacao(nomeEstudante='aluno(a)', curso='Front-end') {
    return `Olá, ${nomeEstudante}!\nSeja bem-vindo(a) ao curso de ${curso}!`;
}

const mensagemSaudacao = saudacao('Sérgio', 'Javascript');
const mensagemSaudacao2 = saudacao();

console.log(mensagemSaudacao);
console.log();
console.log();
console.log(mensagemSaudacao2);