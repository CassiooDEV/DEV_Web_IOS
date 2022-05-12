const team = [
    {
        Nome: 'Charles',
        Sálario: 7548.07,
        Vínculo: 'CLT',
    },
    {
        Nome: 'Cleiton',
        Sálario: 2548.21,
        Vínculo: 'PJ',
    },
    {
        Nome: 'Lázaro',
        Sálario: 2875.54,
        Vínculo: 'CLT',
    },
];

if (team[0].Vínculo === 'CLT') {
    console.log(
        `O funcionário ${team[0].Nome} é CLT e contribui ${INSS1} segundo a tabela de 2022.`
    );
} else {
    console.log(`O funcionário ${team[0].Nome} não contribui para o INSS`);
}
if (team[1].Vínculo === 'CLT') {
    console.log(
        `O funcionário ${team[1].Nome} é CLT e contribui ${INSS2}segundo a tabela de 2022.`
    );
} else {
    console.log(`O funcionário ${team[1].Nome} não contribui para o INSS`);
}
if (team[2].Vínculo === 'CLT') {
    console.log(
        `O funcionário ${team[1].Nome} é CLT e contribui ${INSS3} segundo a tabela de 2022.`
    );
} else {
    console.log(`O funcionário ${team[2].Nome} não contribui para o INSS`);
}
