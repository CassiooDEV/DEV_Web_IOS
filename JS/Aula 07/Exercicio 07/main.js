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
    const alq1 = team[0].Sálario;
    if (alq1 > 7087)
        console.log(
            `O funcionário ${team[0].Nome} é CLT e contribui ${
                (alq1 * 14) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if (alq1 <= 3641 && alq1 >= 2427)
        console.log(
            `O funcionário ${team[0].Nome} é CLT e contribui ${
                (alq1 * 12) / 100
            }R$ segundo a tabela de 2022.`
        );
    else
        console.log(
            `O funcionário ${team[0].Nome} é CLT e contribui ${
                (alq1 * 9) / 100
            }R$ segundo a tabela de 2022.`
        );
} else {
    console.log(
        `O funcionário ${team[0].Nome} não contribui para o INSS pois é PJ`
    );
}
if (team[1].Vínculo === 'CLT') {
    const alq2 = team[0].Sálario;
    if (alq2 > 7087)
        console.log(
            `O funcionário ${team[1].Nome} é CLT e contribui ${
                (alq2 * 14) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if (alq2 <= 3641 && alq2 >= 2427)
        console.log(
            `O funcionário ${team[1].Nome} é CLT e contribui ${
                (alq2 * 12) / 100
            }R$ segundo a tabela de 2022.`
        );
    else
        console.log(
            `O funcionário ${team[1].Nome} é CLT e contribui ${
                (alq2 * 9) / 100
            }R$ segundo a tabela de 2022.`
        );
} else {
    console.log(
        `O funcionário ${team[1].Nome} não contribui para o INSS pois é PJ`
    );
}
if (team[2].Vínculo === 'CLT') {
    const alq3 = team[2].Sálario;
    if (alq3 > 7087)
        console.log(
            `O funcionário ${team[2].Nome} é CLT e contribui ${
                (alq3 * 14) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if (alq3 <= 3641 && alq3 >= 2427)
        console.log(
            `O funcionário ${team[2].Nome} é CLT e contribui ${
                (alq3 * 12) / 100
            }R$ segundo a tabela de 2022.`
        );
    else
        console.log(
            `O funcionário ${team[2].Nome} é CLT e contribui ${
                (alq3 * 9) / 100
            }R$ segundo a tabela de 2022.`
        );
} else {
    console.log(
        `O funcionário ${team[2].Nome} não contribui para o INSS pois é PJ`
    );
}
