//leitura de arquivo
//não é necessário instalar a biblioteca

const fs = require('fs');

// * 1. Callbacks

//função assícrona (ler um arquiva leva um tempo)
fs.readFile('./arquivo.txt', (erro, conteudo) => {
    if(erro) {
        console.error('Ocorreu um erro ao tentar ler o arquivo.', erro);
    } else {
        //converter o aquivo para string
        console.log(String(conteudo));
    }
});