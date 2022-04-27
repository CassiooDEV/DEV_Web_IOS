console.log('Hello World!');
console.error('Essa é uma mensagem de erro');
console.warn('Essa é uma mensagem de aviso!');
// let, const
console.clear();
let idade = 30;
const nome = 'Nico';
console.log(nome);
console.log(idade);
idade = 31;
console.log(idade);
// String, Numbers, Boolean, null, undefined
console.clear();
const nome_pessoa = 'John';
const idade1 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof nome_pessoa); // Type of const
console.log(typeof idade1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
// Concatenar strings
console.clear();
const pessoa = 'Irmão do Jorel';
const idade2 = 30;
console.log('Meu nome é ' + pessoa + ' e eu tenho ' + idade2 + ' anos!');
// Template String
const hello = `Meu nome é ${pessoa} e eu tenho ${idade2} anos!`;
console.log(hello);
console.log(
    'Exemplo de template string + $(pessoa) juntando variáveis {idade}'
);
// Operadores de comparação e lógico
console.clear();
let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;
console.log(teste1 > teste2); // Operador de comparação
console.log(teste1 < teste2); // Operador de comparação
console.log(teste1 && teste2); // Operador lógico
console.log(valor1 && valor2); // Operador lógico
