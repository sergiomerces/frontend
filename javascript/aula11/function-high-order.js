/*funções de alta ordem*/

/*função que retorna outra função como parâmetro*/

function welcome(courseName) {
    return (studentName) => {
        console.log(
            `Olá ${studentName}!\nSeja bem-vindo(a) ao curso de ${courseName}!`
            );
    }
}

console.clear();

const displayWelcomeToFrontEndReactCourse = welcome('Front-end em React');
const displayWelcomeToBackEndNodeCourse = welcome('Back-end em NodeJs');

displayWelcomeToFrontEndReactCourse('Sérgio');
displayWelcomeToBackEndNodeCourse('José');

/*função que retorna outra função como parâmetro*/
const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

const retorno = calcular(7, 3, somar);
console.log(retorno);

const resultado = calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2);
console.log(resultado);

/*
funções de alta ordem com arrays (listas)
foreach()
find()
findIndex()
ever()
sum()
map()
filter()
reduce()
*/