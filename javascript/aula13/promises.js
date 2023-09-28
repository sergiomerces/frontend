/*
Objeto que guarda uma promessa de que algo será realizado.

Possui tres estados:

Pending
Fullfilled
Rejected

usada para pegar dados do back-end (API)
*/

const fs = require('fs');

const promessa = new Promise((resolve, reject) => {

    fs.readFile('./arquivo.txt', (erro, conteudo) => {
        if(erro) {
            reject('Ocorreu um erro ao tentar ler o arquivo.', erro);
        } else {
            resolve(String(conteudo));
        }
    });

});

//entregar a promessa
promessa
.then((retornoDoResolve) => {
    console.log('Deu certo!:)\n', retornoDoResolve);
})
.catch((erro) => {
    console.log('Deu ruim!:(\n', erro);
})
.finally(() => {
    console.log('Isso aqui vai ser executado, independente do sucesso ou fracasso da promessa, no final dela.')
});

//48 min