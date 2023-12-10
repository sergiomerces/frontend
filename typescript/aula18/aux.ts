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

