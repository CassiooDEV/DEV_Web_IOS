//Trabalhando com Strings
//Concatenar
let exemplo1 = 10;
let exemplo2 = 2;

console.log('O resultado da soma é:' + (exemplo1 + exemplo2));
console.log('O resultado da soma é:' + (exemplo1 + exemplo2));
console.log(`O resultado da soma é: ${exemplo1 + exemplo2}`);
console.clear();
//METODOS DE STRING

//Acessa uma String
let string1 = 'Aqui vai o texto';
console.log(string1[0]);

//Tamanho da String
let string2 = 'Aqui vai o texto';
console.log(string2.length);
//Maiúsculas e minúsculas
let string3 = 'aqui vai o texto';
console.log(string3.toUpperCase());
let string4 = 'AQUI VAI O TEXTO';
console.log(string4.toLowerCase());
//Substring e Split
let string5 = 'Mozilla';
console.log(string5.substring(0, 2));
let string6 = 'A raposa é um animal esperto';
let string7 = string6.split(' ');
console.log(string7);
//Subtituir uma string dentro da string
let string8 = 'Aqui vai o texto';
let string9 = string8.replace('Aqui', 'Kauan');
console.log(string9);
//Remover espaços da string
let string10 = ' Aqui vai o texto ';
console.log(string10.trim());
//Métodos de buscar em strings
let string11 = 'Aqui vai o texto';
console.log(string11.indexOf('Aqui'));
console.log(string11.lastIndexOf('texto'));
console.log(string11.search('Aqui'));
console.log(string11.startsWith('A'));
console.log(string11.endsWith('i'));
