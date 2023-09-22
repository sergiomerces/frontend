const arr = [];

console.clear();

/*adiciona elemento a lista*/
arr.push('Capitão América');
arr.push('Homem de Ferro', 'Hulk', 'Thor');
console.log(arr);

/*adicioa elemento ao iníco da lista*/
arr.unshift('Homem Aranha');
console.log(arr);

/*remove o último elemento da lista*/
arr.pop();
console.log(arr);

/*remove o primeiro elemento da lista*/
arr.shift();
console.log(arr);

/*retorna o tamanho da lista*/
console.log(arr.length);

/*retorna se um valor está contido ou não na lista*/
console.log(arr.includes('Feiticeira Scarlate'));
console.log(arr.includes('Hulk'));


/*retorna o primeiro elemento da lista respectivo à busca*/
const posicao = arr.indexOf('Hulk');
const mensagem = (posicao !== -1) ? 'Existe' : 'Não existe';
console.log(mensagem);
console.log(arr[posicao]);

/*o .lastIndexOf() retorna a última ocorrência da lista */