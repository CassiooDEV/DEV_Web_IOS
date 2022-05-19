class Pessoa {
    constructor(nome, nasc) {
        this.nome = nome;
        this.nasc = new Date(nasc);
    }
    getIdade(date) {
        let idade = date.getFullYear() - this.nasc.getFullYear();
        if (date.getMonth() < this.nasc.getMonth()) idade--;
        else if (
            date.getMonth() == this.nasc.getMonth() &&
            date.getDate() < this.nasc.getDate
        )
            idade--;
        return idade;
    }
    getName() {
        return this.nome;
    }
}
let dob = new Date();
let pessoas = new Array(10);
pessoas[0] = new Pessoa('Weverton', '2000-02-01');
pessoas[1] = new Pessoa('Bruno', '2000-08-17');
pessoas[2] = new Pessoa('Breno', '2001-09-12');
pessoas[3] = new Pessoa('Cassio', '2001-11-19');
pessoas[4] = new Pessoa('Durval', '1998-06-30');
pessoas[5] = new Pessoa('Cleiton', '2001-02-01');
pessoas[6] = new Pessoa('Eduardo', '2000-11-12');
pessoas[7] = new Pessoa('Vitória', '2002-03-17');
pessoas[8] = new Pessoa('Hércules', '1997-09-14');
pessoas[9] = new Pessoa('Matheus', '2002-06-14');

Pessoa.prototype.getNiver = function (date) {
    let n = 0;
    if (date.getMonth() < this.nasc.getMonth()) ++n;
    else if (
        date.getMonth() == this.nasc.getMonth() &&
        date.getDate() < this.nasc.getDate
    )
        ++n;
    return n == 0;
};
console.log(pessoas[0].getNiver(dob));
for (i = 0; i < pessoas.length; i++) {
    if (pessoas[i].getNiver(dob) === false)
        console.log(
            `${pessoas[i].getName()} tem ${pessoas[i].getIdade(
                dob
            )} anos e não fez aniversário esse ano`
        );
    else if (pessoas[i].getNiver(dob) === true)
        `${pessoas[i].getName()} tem ${pessoas[i].getIdade(
            dob
        )} anos e já fez aniversário esse ano`;
}
