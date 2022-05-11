const alunos = [
    {
        id: 1,
        PrimeiroNome: 'Cassio',
        SegundoNome: 'Chagas',
        Idade: 20,
        Altura: 1.8,
        Formação: 'Ensino Médio Completo',
        Endereço: {
            Cidade: 'São Paulo',
            Bairro: 'Tucuruvi',
            Rua: 'Cometa',
        },
        NotasD: [8, 10, 7, 10],
        Notas: {
            Ciências: 8,
            Matemática: 10,
            Português: 7,
            Lógica: 10,
        },
    },
    {
        id: 2,
        PrimeiroNome: 'Matheus',
        SegundoNome: 'Honório',
        Idade: 19,
        Altura: 1.65,
        Formação: 'Ensino Médio Completo',
        Endereço: {
            Cidade: 'São Paulo',
            Bairro: 'São Paulo',
            Rua: 'São Paulo',
        },
        NotasD: [7, 8, 9, 8],
        Notas: {
            Ciências: 7,
            Matemática: 8,
            Português: 9,
            Lógica: 8,
        },
    },
    {
        id: 3,
        PrimeiroNome: 'Vitória',
        SegundoNome: 'Lawanda',
        Idade: 19,
        Altura: 1.58,
        Formação: 'Ensino Médio Completo',
        Endereço: {
            Cidade: 'Guarulhos',
            Bairro: 'Guarulhos',
            Rua: 'Guarulhos',
        },
        NotasD: [8, 7, 9, 7],
        Notas: {
            Ciências: 3,
            Matemática: 4,
            Português: 9,
            Lógica: 4,
        },
    },
];
const mediac =
    (alunos[0].Notas.Ciências +
        alunos[0].Notas.Matemática +
        alunos[0].Notas.Português +
        alunos[0].Notas.Lógica) /
    4;
const mediam =
    (alunos[1].Notas.Ciências +
        alunos[1].Notas.Matemática +
        alunos[1].Notas.Português +
        alunos[1].Notas.Lógica) /
    4;
const mediav =
    (alunos[2].Notas.Ciências +
        alunos[2].Notas.Matemática +
        alunos[2].Notas.Português +
        alunos[2].Notas.Lógica) /
    4;
console.log(
    `Aluno ${alunos[0].PrimeiroNome} com notas ${alunos[0].NotasD} mora em ${alunos[0].Endereço.Cidade} e teve a média ${mediac}, portanto foi aprovado(a)`
);
console.log(
    `Aluno ${alunos[1].PrimeiroNome} com notas ${alunos[1].NotasD} mora em ${alunos[1].Endereço.Bairro} e teve a média ${mediam}, portanto foi aprovado(a)`
);

console.log(
    `Aluno ${alunos[2].PrimeiroNome} com notas ${alunos[2].NotasD} mora em ${alunos[2].Endereço.Bairro} e teve a média ${mediav}, portanto foi reprovado(a)`
);
