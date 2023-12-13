const botaoDiminuir = document.querySelector('button#btn-diminuir');
const botaoAumentar = document.querySelector('button#btn-aumentar');
const contador = document.querySelector('h2#contador');
const input = document.querySelector('#input');

botaoDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual - 1;
});

botaoAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contador.textContent);
    contador.textContent = valorAtual + 1;
});

input.addEventListener('input', (event) => {
    console.log(input.value);
});

//adicionando estilos inline ao contador
contador.style.color = 'red';
contador.style.padding = '3rem';
contador.style.backgroundColor = 'silver';
contador.style.border = '1px solid black';
contador.style.width = '650px';