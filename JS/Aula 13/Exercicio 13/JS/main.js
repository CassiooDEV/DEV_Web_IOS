let b12 = document.querySelectorAll('.B_12');
let b1 = document.querySelector('#B_01');
let b2 = document.querySelector('#B_02');
let b3 = document.querySelector('#B_03');
let b4 = document.querySelector('#B_04');
let figure = document.createElement('figure');
let tabuada = document.createElement('div');
let welcome = document.createElement('div');
let img = document.createElement('img');
let h2 = document.createElement('h2');
let text = document.createElement('p');
let h2o = document.createElement('h2');
document.body.appendChild(welcome);
document.body.appendChild(tabuada);
document.body.appendChild(figure);
for (i = 0; i < b12.length; i++) {
    b12[i].style.border = 'solid 2px #D9BC66';
    b12[i].style.padding = '.5rem';
    b12[i].style.backgroundColor = '#BFBFBF';
    b12[i].style.margin = '.7rem';
}

const serie = () => {
    if (figure.firstChild == img) {
        alert('Só pode uma imagem por vez');
    } else {
        document.body.style.backgroundColor = '#262525';
        img.src = './img/picture.jpg';
        figure.appendChild(img);
    }
};
b1.addEventListener('click', serie);
const form = () => {
    let getInfo = prompt('Preencha seu nome pra ser da nossa academia');
    if (getInfo > 0 || getInfo == null || getInfo < 0)
        alert('Oops preencha novamente');
    else {
        h2.innerHTML = 'Bem-Vindo!';
        text.innerHTML = `Olá ${getInfo} Bem-vindo a nossa academia.`;
        text.style.fontWeight = '600';
        welcome.appendChild(h2);
        welcome.appendChild(text);
    }
};
b2.addEventListener('click', form);

const calc = () => {
    let getNumber = parseInt(prompt('Insira um valor'));
    if (isNaN(getNumber) || getNumber == 0) {
        alert('Insira um valor númerico e maior que 0 ');
    } else {
        h2.innerHTML = 'Tabuada:';
        tabuada.appendChild(h2);
        for (i = 0; i <= 10; i++) {
            let tool = document.createElement('p');
            tool.style.fontWeight = '600';
            tool.innerHTML = `${i} x ${getNumber} = ${i * getNumber}`;
            tabuada.appendChild(tool);
        }
    }
};
b3.addEventListener('click', calc);
const apagar = () => {
    img.remove();
    document.body.style.backgroundColor = 'white';
    h2.remove();
    text.remove();
    tabuada.innerHTML = '';
};
b4.addEventListener('click', apagar);
