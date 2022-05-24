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
    let img = document.createElement('img');
    img.src = './img/picture.jpg';
    document.body.insertBefore(img, b1.nextElementSibling);
};
b1.addEventListener('click', serie);
const form = () => {
    let getInfo = window.prompt('Preencha seu nome pra ser da nossa academia');
    let text = document.createElement('p');
    if (getInfo > 0 || getInfo == 'null' || getInfo < 0)
        alert('Oops preencha novamente');
    else {
        text.innerHTML = `Olá ${getInfo} Bem-vindo a nossa academia.`;
        document.body.appendChild(text);
    }
};
b2.addEventListener('click', form);

const calc = () => {
    let getNumber = parseInt(prompt('Insira um valor'));
    if (isNaN(getNumber)) {
        alert('Insira um valor númerico');
    } else {
        for (i = 0; i <= 10; i++) {
            let tool = document.createElement('p');
            tool.innerHTML = `${i} x ${getNumber} = ${i * getNumber}`;
            document.body.insertBefore(tool, b3.nextElementSibling);
        }
    }
};
b3.addEventListener('click', calc);
