/*
async/await
permite que executemos o código de forma sequencial

vantagem em relação ao uso do then que evita o uso de muita indentação à direita com funções assícronas dentro da outra
*/

const fs = require('fs');

console.clear();

function lerArquivoPromise() {

    return new Promise((resolve, reject) => {
        fs.readFile('./arquivo.txt', (erro, conteudo) => {
            if(erro) {
                reject('Ocorreu um erro ao tentar ler o arquivo.', erro);
            } else {
                resolve(String(conteudo));
            }
        });
    });

}

async function leituraDeDados() {
    console.log('Isso é executado antes da promise ser resolvida');

try {
        //await espera a promessa ser resolvida para avançar no código
        const dadosDoArquivoLido = await lerArquivoPromise(); 

        console.log(dadosDoArquivoLido);
        console.log('Isso é executado DEPOIS da promise ser resolvida');
    } catch(erro) {
        console.log(erro);
        console.log('Isso aqui é executado depois da promise (com erro)');
    } finally {
        console.log('Dentro do finally');
    }
}

leituraDeDados();