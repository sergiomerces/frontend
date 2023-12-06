const fs = require('fs');

//lendo um arquivo um JSON
fs.readFile('./file.json', (erro, dados) => {
    if(erro) {
        console.log('Erro:', erro);
    } else {
        //buffer com dados do arquivo json
        console.log(JSON.parse(dados));
        console.log(typeof dados);
    }
});

//convertendo JSON em formato de String para objeto
const jsonString = {"nome": "Sérgio"};
console.log(JSON.parse(jsonString));

//convertendo um objeto do JS em um JSON string
const pessoa = {
    nome: "Tony Stark", 
    codinome: "Homem de Ferro",
};

console.log(JSON.stringify(pessoa));