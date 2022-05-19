const equipe = [
    {
        Nome: 'Cassio',
        Sálario: 8271.02,
        Vínculo: 'CLT',
    },
    {
        Nome: 'Matheus',
        Sálario: 3721.31,
        Vínculo: 'PJ',
    },
    {
        Nome: 'Vitória',
        Sálario: 2363.21,
        Vínculo: 'CLT',
    },
];

if (equipe[0].Vínculo === 'CLT') {
    const inss = equipe[0].Sálario;
    if (inss > 7087)
        console.log(
            `O funcionário ${equipe[0].Nome} é CLT e contribui ${
                (inss * 14) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if (inss <= 3641 && inss >= 2427)
        console.log(
            `O funcionário ${equipe[0].Nome} é CLT e contribui ${
                (inss * 12) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if ((inss) => 1212 && inss <= 2427)
        console.log(
            `O funcionário ${equipe[0].Nome} é CLT e contribui ${
                (inss * 9) / 100
            }R$ segundo a tabela de 2022.`
        );
    else
        console.log(
            `O funcionário ${equipe[0].Nome} é CLT e contribui ${
                (inss * 7, 5) / 100
            }R$ segundo a tabela de 2022.`
        );
} else {
    console.log(
        `O funcionário ${equipe[0].Nome} não contribui para o INSS pois é PJ`
    );
}
if (equipe[1].Vínculo === 'CLT') {
    const inss2 = equipe[1].Sálario;
    if (inss2 > 7087)
        console.log(
            `O funcionário ${equipe[1].Nome} é CLT e contribui ${
                (inss2 * 14) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if (inss2 <= 3641 && inss2 >= 2427)
        console.log(
            `O funcionário ${equipe[1].Nome} é CLT e contribui ${
                (inss2 * 12) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if ((inss2) => 1212 && inss2 <= 2427)
        console.log(
            `O funcionário ${equipe[1].Nome} é CLT e contribui ${
                (inss2 * 9) / 100
            }R$ segundo a tabela de 2022.`
        );
    else
        console.log(
            `O funcionário ${equipe[1].Nome} é CLT e contribui ${
                (inss2 * 7, 5) / 100
            }R$ segundo a tabela de 2022.`
        );
} else {
    console.log(
        `O funcionário ${equipe[1].Nome} não contribui para o INSS pois é PJ`
    );
}
if (equipe[2].Vínculo === 'CLT') {
    const inss3 = equipe[2].Sálario;
    if (inss3 > 7087)
        console.log(
            `O funcionário ${equipe[2].Nome} é CLT e contribui ${
                (inss3 * 14) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if (inss3 <= 3641 && inss3 >= 2427)
        console.log(
            `O funcionário ${equipe[2].Nome} é CLT e contribui ${
                (inss3 * 12) / 100
            }R$ segundo a tabela de 2022.`
        );
    else if ((inss3) => 1212 && inss3 <= 2427)
        console.log(
            `O funcionário ${equipe[2].Nome} é CLT e contribui ${
                (inss3 * 9) / 100
            }R$ segundo a tabela de 2022.`
        );
    else
        console.log(
            `O funcionário ${equipe[2].Nome} é CLT e contribui ${
                (inss3 * 7, 5) / 100
            }R$ segundo a tabela de 2022.`
        );
} else {
    console.log(
        `O funcionário ${equipe[2].Nome} não contribui para o INSS pois é PJ`
    );
}
