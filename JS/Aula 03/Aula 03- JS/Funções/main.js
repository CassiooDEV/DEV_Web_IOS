//Estrutura de uma função.
/* 
function NomeDaFuncao(valor1, valor2){
    return valor1 * valor2
}
*/
function AddNums(num1 = 2, num2 = 5) {
    return num1 + num2;
}
const somaAddNums = (num1 = 2, num2 = 5) => {
    return num1 + num2;
};

// console.log(AddNums());
let x = AddNums(10, 11);
console.log(x);
console.clear();

// Criando Arrow Funcion
const hello = () => {
    return 'Olá mundo';
};
// Retornar resultado da função
console.log(hello());

//Criando Objetos
const aluno = {
    primeiroNome: 'Cassio',
    segundoNome: 'Chagas',
    idade: '20',
};
console.clear();
//Evento onload mostra algo enquanto carrega a Página WEB

const BoasVindas = () => {
    alert('Bem vindo a nossa pagina');
};
console.log('Bem vindo a nossa pagina');
function EventClick() {
    console.log('Você apertou o botão');
}
