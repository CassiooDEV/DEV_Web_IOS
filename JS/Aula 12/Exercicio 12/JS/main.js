let b12 = document.getElementsByClassName('B_12');
let b1 = document.getElementById('B_01');
let b2 = document.getElementById('B_02');
let b3 = document.getElementById('B_03');
for (i = 0; i < b12.length; i++) {
    b12[i].style.border = 'solid 2px #D9BC66';
    b12[i].style.padding = '.5rem';
    b12[i].style.backgroundColor = '#BFBFBF';
    b12[i].style.margin = '.7rem';
}

const serie = () => {
    document.body.style.backgroundColor = '#262525';
    let figure = document.createElement('figure');
    document.body.appendChild('figure');
    let pic = document.createElement('img');
    pic.src = 'Pics/picture.jpg';
    figure.appendChild('pic');
};
b1.addEventListener('click', serie);
const form = () => {
    let getInfo = prompt('Preencha seu nome pra ser da nossa academia');
    if (getInfo == 0 || getInfo == 'null') alert('Oops preencha novamente');
    else {
        document.body.innerHTML = `Olá ${getInfo} Bem-vindo a nossa academia.`;
    }
};
b2.addEventListener('click', form);

const calc = () => {
    let tab = document.getElementById('tab');
    let getNumber = parseInt(prompt('Insira um valor'));
    for (i = 0; i <= 10; i++) {
        let tool = document.createElement('p');
        tool.innerText = `${getNumber} x ${i} = ${getNumber * i}`;
        tab.appendChild('tool');
    }
};
b3.addEventListener('click', calc);
