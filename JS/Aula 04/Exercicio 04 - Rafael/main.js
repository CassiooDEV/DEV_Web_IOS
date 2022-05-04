const party = ['Joaquim', 'José', 'Silva', 'Xavier'];
console.log(`Assim que começou a festa estavam ${party}`);
let a = party.unshift('Amanda');
console.log(`Depois de 15 minutos chegou mais uma convidada e ficou ${party}`);
let x = party.pop();
console.log(
    `Depois de um tempo de festa Xavier foi embora, ficando assim ${party}`
);
let z = party.push('Zuleica');
console.log(
    `Depois de mais um tempo chegou mais uma convidada, ficando assim ${party} na festa`
);
let aa = party.shift();
console.log(
    `Começou a ficar tarde e uma das convidadas foram embora, restando assim ${party}`
);
delete party[2];
console.log(
    `Em seguida mais uma convidada foi embora, restando assim ${party} `
);
party[2] = 'Silvana';
console.log(`No final chegou uma convidada atrasada, e ficaram ${party}`);

//Segunda etapa do exercicio
console.clear();
const ranks = ['Immortal', 'Diamond', 'Emerald', 'Platinum', 'Silver'];
console.log('Antes:');
console.log(`Em um jogo tinha os seguintes ranks de classificação: ${ranks}`);
ranks.splice(4, 0, 'Gold');
const att = ranks.slice(1);
console.log('Depois:');
console.log(
    `Após uma atualização o jogo recebeu novos ranks e removeu outros, ficando assim os seguintes ranks: ${ranks}`
);
