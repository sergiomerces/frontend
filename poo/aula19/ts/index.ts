console.log('Hello world!');

//sempre que eu tiver um objeto que se repita muito é interessante criarmos uma classe no TypeScript

//a interface cria um contrato com propriedades obrigatórias para minha classe
interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
}

class Pessoa implements IPessoa{
    //atributos: características (variáveis)
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;

    //método constructor
    constructor(nome: string, idade: number, altura: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }

    //método (ação: funções)
    dormir() {
        console.log('Dormindo... 😴zzZZZ');
    }

    //acessar propriedade privada
    get cpf(): string {
        return this._cpf;
    }

    //alterar propriedade privada
    set cpf(newCpf: string) {
        this._cpf = newCpf;
    }
}

//classe professor
class Professor extends Pessoa {
    codigo: string;

    constructor(nome: string, idade: number, altura: number, cpf: string, codigo: string) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
}

//instanciando (criando) uma pessoa (indivíduo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa('Pietra', 16, 1.68, '123.456.788-00');
const pessoa2 = new Pessoa('Pablo', 21, 1.69, '123.456.788-01');

//instanciando professor
const professor = new Professor('Cesar', 30, 1.66, '222.222.222-00', '0001');

console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa2);
pessoa2.dormir();
console.log(pessoa1.cpf);

//o getter permite visualizar uma propriedade private e o setter alterá-la
pessoa1.cpf = '123.456.788-11';
console.log(pessoa1.cpf);

console.log(professor);
console.log(professor instanceof Pessoa);