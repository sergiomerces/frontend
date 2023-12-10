//declarando variáveis

let numero1: number;  
let numero2: number = 20;
let numero = 20;

let nome:string = 'Sérgio';

//O typescript reconhece por inferência quando recebe um valor seja numero ou string

const PI = 3.1415;

//Para constatens o tipo é o próprio valor uma vez que é imutável.

let casado:boolean = true;
let canhoto = false;


//declarando arrays

const numeros:number[] = [1, 2, 3, 4, 5];
const dias:Array<number> = [5, 10, 15, 20, 30];


//tipos mistos não são boa prática, mas possíveis
const num = [];
const dados:any[] = [];

//tuplas - conjuntos de dados que você sabe que vai ter no array
const pessoaTupla:[string, number] = ['Sérgio', 44];

//Objetos

const pessoa = {
    nome: 'Sérgio',
    idade: 44,
    profissao: 'desenvolvedor',
    altura: 1.7
}

console.log(pessoa.peso);//como não existe a propriedade no objeto o TS vai indicar como erro

//para criar ojetos que tenham a mesma modelagem fixa, podemos definir um tipo pessoa com type ou interface

interface Person {
    nome: string;
    idade: number;
    profissao?: string; // a interrogação depois da key torna a propriedade opcional
    altura: number;
}

const pessoa2: Person = {
    nome: 'José',
    idade: 6,
    altura: 1.05
}

pessoa2.profissao = 'estudante'; //posso fazer uma atribuição para um propriedade opcional que está na classe mas não foi declarado no objeto

//o interface cria uma estrutura que funciona como classe, mais recomendada para uso com POO

type Student = {
    nome: string;
    idade: number;
    altura: number;
    professor: string;
}

//o type pode criar um tipo customizado, porém ele não será um objeto seu tipo será ele mesmo, seu uso é genérico