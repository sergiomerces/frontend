const botaoDiminuir = document.querySelector('button#btn-diminuir');
const botaoAumentar = document.querySelector('button#btn-aumentar');
const contador = document.querySelector('h2#contador');

botaoDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual - 1;
});

botaoAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual + 1;
});