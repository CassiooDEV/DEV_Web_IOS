// let profHelo = 1;
// while (profHelo <= 5) {
//     console.log(`Bate palma`);
//     profHelo++;
// }
// do {
//     console.log('Bate palma');
//     profHelo++;
// } while (profHelo <= 5);
// //Decremento
// let contador = 10;
// while (contador >= 0) {
//     console.log(`O valor do contador é ${contador}`);
//     contador--;
// }
for (let contador2 = 10; contador2 >= 0; contador2--) {
    console.log(`O valor do contador é ${contador2}`);
}
//Laços de repetição e Array
const frutas = ['maca', 'laranja', 'pera', 10];
for (let j = 0; j < frutas.length; j++) {
    console.log(`Nome: ${frutas[j]}`);
}

//Crie um array chamado carros com 8 modelos e percorra o array de 2 em 2
const carros = [
    'bmw',
    'ford',
    'ferrari',
    'sedan',
    'bugatti',
    'volks',
    'HB20',
    'fiat',
];
for (let c = 0; c < carros.length; c += 2) {
    console.log(`Modelo do carro: ${carros[c]}`);
}
