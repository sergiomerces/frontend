/*adicionando propriedade ao objeto do array*/
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

const compraFechada = carrinho.map((item) => {
    return {
        ...item,
        total: item.preco * item.quantidade
    }
});

console.table(compraFechada);