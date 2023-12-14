const tema = document.querySelector('body');
const titulo = document.querySelector('h1');
const botaoMudarTema = document.querySelector('button#btn-mudar-tema');
const botaoDiminuir = document.querySelector('button#btn-diminuir');
const botaoAumentar = document.querySelector('button#btn-aumentar');
const contador = document.querySelector('h2#contador');
const input = document.querySelector('#input');

let temaDark;

window.onload = () => {
    const ehTemaDarkStorage = localStorage.getItem('ehTemaDark');
    
    temaDark = ehTemaDarkStorage === 'true' ? true : false;

    if(temaDark) {
        tema.style.backgroundColor = 'black';
        botaoMudarTema.style.backgroundColor = 'white';
        botaoMudarTema.style.color = 'black';
        titulo.style.color = 'white';
    } else {
        tema.style.backgroundColor = 'white';
        botaoMudarTema.style.backgroundColor = 'black';
        botaoMudarTema.style.color = 'white';
        titulo.style.color = 'black';
    }
}

botaoMudarTema.addEventListener('click', () => {
    temaDark = !temaDark;

    localStorage.setItem('ehTemaDark', temaDark);

    if(temaDark) {
        tema.style.backgroundColor = 'black';
        botaoMudarTema.style.backgroundColor = 'white';
        botaoMudarTema.style.color = 'black';
        titulo.style.color = 'white';
    } else {
        tema.style.backgroundColor = 'white';
        botaoMudarTema.style.backgroundColor = 'black';
        botaoMudarTema.style.color = 'white';
        titulo.style.color = 'black';
    }
});

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