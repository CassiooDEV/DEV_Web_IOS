//Estrutura de uma função.
/* 
function NomeDaFuncao(valor1, valor2){
    return valor1 * valor2
}
*/
function AddNums(num1 = 2, num2 = 5) {
    return num1 + num2;
}

// console.log(AddNums());
let x = AddNums(10, 11);
console.log(x);
console.clear();

// Criando Arrow Funcion
const hello = () => {
    return 'Olá mundo';
};
console.log(hello());
