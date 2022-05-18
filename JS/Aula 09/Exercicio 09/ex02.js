const alunos = [
    {
        Nome: 'Ana',
        Idade: 17,
        Nota: 8,
        Ano: '2ºB',
    },
    {
        Nome: 'Bruno',
        Idade: 16,
        Nota: 6,
        Ano: '2ºC',
    },
    {
        Nome: 'Veronica',
        Idade: 16,
        Nota: 9,
        Ano: '2ºC',
    },
    {
        Nome: 'Marta',
        Idade: 15,
        Nota: 5,
        Ano: '3ºC',
    },
    {
        Nome: 'Brenno',
        Idade: 19,
        Nota: 6,
        Ano: '3ºC',
    },
    {
        Nome: 'Maria',
        Idade: 14,
        Nota: 4,
        Ano: '1ºF',
    },
];
const alunos1 = alunos.filter((alunos) => {
    console.log(`Nome:${alunos.Nome}`);
    console.log(`Ano:${alunos.Ano}`);
});
const alunos2 = alunos.filter((alunos) => {
    if (alunos.Ano === '2ºB' || alunos.Ano === '2ºC') console.log(alunos);
});
const media =
    (alunos[0].Nota +
        alunos[1].Nota +
        alunos[2].Nota +
        alunos[3].Nota +
        alunos[4].Nota +
        alunos[5].Nota) /
    6;
if (media >= 7)
    console.log(
        `Os Alunos estão acima da média com ${media} como nota da turma`
    );
else if (media <= 7)
    console.log(
        `Os Alunos estão abaixo da média com  ${media} como nota da turma`
    );
