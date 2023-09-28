//somando as compras de um carrinho com reduce

const carrinho = [
    {
        produto: 'feijão',
        preco: 5.89,
        quantidade: 3
    },

    {
        produto: 'arroz',
        preco: 12.50,
        quantidade: 2
    },

    {
        produto: 'leite 1L',
        preco: 3.90,
        quantidade: 6
    }
];

const total = carrinho.reduce((acumulador, item) => {
    return item.preco * item.quantidade + acumulador
}, 0);

console.log('Compras');
console.table(carrinho);
console.log(`Total a pagar: ${total}`);