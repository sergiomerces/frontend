//fetch API

//then/catch
/*
.then ((resposta) => {
    resposta.json().then((dados) => console.log(dados));
})
.catch((erro) => {
    console.error(erro);
});
*/

//async/await
async function obterDadosDoCep() {
    try {
        const resposta = await fetch("https://viacep.com.br/ws/13320270/json/");
        const dados = await resposta.json();
        console.table(dados);
    } catch (erro) {
        console.error('Deu errado', erro);
    } finally {
        console.warn("Terminou a requisição.");
    }
}

obterDadosDoCep();