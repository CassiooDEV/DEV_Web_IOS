let dob = new Date();
let nome = document.getElementById('name');
let email = document.getElementById('email');
let date = document.getElementById('date');
let form = document.getElementById('form');
let users = document.getElementById('users');
let deletar = document.getElementById('excluir');

let vEmail = false;
let vData = false;

form.addEventListener('submit', onSubmit);
deletar.addEventListener('click', excluir);
function onSubmit(e) {
    e.preventDefault();
    verifEmail();
    verifData();
    if (nome.value === '' || email.value === '') {
        alert('Por favor preencha os dados');
        setTimeout(() => (msg.innerHTML = ''), 3000);
    } else if (vEmail === true && vData === true) {
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `Nome: ${nome.value} E-mail: ${email.value} Nascimento: ${date.value}`
            )
        );
        users.appendChild(li);
        nome.value = '';
        email.value = '';
        nome.focus();
    }
}
function verifEmail() {
    let def = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
    if (!def.test(email.value)) {
        let error = document.createElement('p');
        error.innerHTML = 'Insira um e-mail válido.Ex: Nome@dominio.com';
        form.appendChild(error);
        setTimeout(() => (msg_email.innerHTML = ''), 3000);
    } else {
        vEmail = true;
    }
}
function verifData() {
    let get = new Date(date.value);
    let idade = dob.getFullYear() - get.getFullYear();
    if (dob.getMonth() < get.getMonth()) idade--;
    else if (dob.getMonth() == get.getMonth() && dob.getDate() < get.getDate)
        idade--;
    if (idade < 18) {
        alert('Menores de 18 não pode comprar ingresso');
    } else {
        vData = true;
    }
}
function excluir() {
    let del = prompt('Insira o número do cadastro que deseja remover');
    let lista = users.getElementsByTagName('li');
    users.removeChild(lista[del - 1]);
}
