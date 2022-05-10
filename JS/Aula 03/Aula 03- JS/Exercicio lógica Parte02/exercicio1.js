/*
Escreva um algoritmo que armazene o valor 10 em uma variável A e o
valor 20 em uma variável B. A seguir (utilizando apenas atribuições entre
variáveis) troque os seus conteúdos fazendo com que o valor que está
em A passe para B e vice-versa. Ao final, escrever os valores que ficaram
armazenados nas variáveis */

console.log('Exercicio 1');
var A = 10;
var B = 20;

var invertendo = A;
A = B;
B = invertendo;
console.log(A, B);
