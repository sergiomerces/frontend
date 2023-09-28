const produtos = [
    {nome: 'Suco de laranja', preco: 7.50, tipo: 'Bebida'},
    {nome: 'Batata frita', preco: 10.50, tipo: 'Comida'},
    {nome: 'Pizza', preco: 12.49, tipo: 'Comida'},
    {nome: 'Chocolate', preco: 1.50, tipo: 'Comida'},
    {nome: 'Pastel', preco: 4.50, tipo: 'Comida'},
    {nome: 'Coca-Cola', preco: 6.99, tipo: 'Bebida'}
];

const produtoPesquisado = produtos.filter(produto => {
    (produto.preco < 10 && produto.tipo === 'Bebida')
});

console.log('Cardápio');
console.table(produtos);
console.log('Produto Pesquisado');
console.table(produtoPesquisado);