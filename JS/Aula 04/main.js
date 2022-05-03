//Arrays unidimensionais
// Podemos criar array assim
const num1 = new Array(30, -1, 5, 3, 121);
// Ou podemos fazer
const num2 = [-2, 40, 16, 111, 33, 64];
console.log(num1);
console.log(num2);
// Acessando elementos diversos dos arrays
console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);
console.log(`terceiro elemento de num1: ${num1[2]}`);
console.log(`quinto elemento de num2: ${num2[4]}`);
//Arrays bidimensionais
console.clear();
const matrix = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350],
];
// Acessando elementos diversos dos arrays
console.log(`Acessa a primeira linha: ${matrix[0]}`);
console.log(`Acessa o segundo elemento: ${matrix[0][1]}`);
// Alterando um valor do array
console.clear();
let moedas = ['Real', 'Dólar', 'Coroa', 'Peso'];
console.log(`Antes: ${moedas}`);
moedas[2] = 'Yen';
console.log(`Depois: ${moedas}`);
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log('Antes:');
console.log(matrix1);
// Alterando um valor do array
console.clear();
matrix1[0][2] = -10;
console.log('Depois:');
console.log(matrix1);
