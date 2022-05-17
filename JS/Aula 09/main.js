// //ForEach
// const frutas = ['Maca', 'Pera', 'Melancia'];
// frutas.forEach(MinhaFuncao);
// function MinhaFuncao(item, index) {
//     console.log(`Indice: ${index}`);
//     console.log(`Elemento: ${item}`);
// }

// // C/ Arrow Function
// const frutas2 = ['Maca', 'Pera', 'Melancia'];
// frutas.forEach((index, item) => {
//     console.log(`Indice: ${item}`);
//     console.log(`Elemento: ${index}`);
// });

// // Forma mais enxuta de escrever funções
const tarefas = [
    {
        id: 1,
        texto: 'sla',
    },
    {
        id: 2,
        texto: 'slaa',
    },
    {
        id: 3,
        texto: 'slaaa',
    },
];
// tarefas.forEach((teste) => console.log(teste.texto));

//Método Map
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.log('Array antigo');
console.log(numeros);
console.log('Novo Array');
console.log(newArray);

// Outro exemplo de Map
const mapText = tarefas.map((valor) => {
    return valor.texto;
});
console.log(mapText);

// Método Filter
const idade = [32, 15, 8, 98, 70];
let filterIdade = idade.filter((idades) => {
    return idades >= 18;
});
console.log(filterIdade);

//Método Find
const meuArray = [
    {
        nome: 'Diego',
        idade: 12,
        altura: 120,
        sexo: 'Masculino',
    },
    {
        nome: 'Jissara',
        idade: 15,
        altura: 170,
        sexo: 'Feminino',
    },
    {
        nome: 'Jhenifer',
        idade: 70,
        altura: 180,
        sexo: 'Feminino',
    },
];

console.log(
    meuArray.find((genero) => {
        return genero.sexo === 'Feminino';
    })
);
// Crie umm array de objeos com 4 objetos e cada objeto tera 4 propriedades,
// retorne o nome de todos os alunos que tirou nota maior que 6, e retorne o primeiro aluno que tirou nota menor que 5.
const alunos = [
    {
        nome: 'Jorge',
        idade: 14,
        altura: 160,
        nota: 8,
    },
    {
        nome: 'Jailson',
        idade: 15,
        altura: 170,
        nota: 3,
    },
    {
        nome: 'Gustavo',
        idade: 14,
        altura: 180,
        nota: 6,
    },
    {
        nome: 'Ademir',
        idade: 15,
        altura: 184,
        nota: 4,
    },
];
console.log(`Alunos Aprovados:`);
console.log(
    alunos.filter((notaA) => {
        return notaA.nota >= 6;
    })
);
console.log(`Aluno Reprovado:`);
console.log(
    alunos.find((notaR) => {
        return notaR.nota <= 5;
    })
);
