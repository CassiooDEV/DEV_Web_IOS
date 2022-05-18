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
}
let dob = new Date();
let pessoas = new Array(10);
pessoas[0] = new Pessoa('Brenno', '2005-04-08');
pessoas[1] = new Pessoa('Bruno', '2000-08-17');
pessoas[2] = new Pessoa('Caio', '2006-01-09');
pessoas[3] = new Pessoa('Cassio', '2001-11-19');
pessoas[4] = new Pessoa('Durval', '1998-06-30');
pessoas[5] = new Pessoa('Gabriel', '2004-04-06');
pessoas[6] = new Pessoa('Giovanna', '2002-12-17');
pessoas[7] = new Pessoa('Jorge', '2005-10-13');
pessoas[8] = new Pessoa('Hércules', '1997-09-14');
pessoas[9] = new Pessoa('Matheus', '2002-06-14');

Pessoa.prototype.getNiver = function () {
    if (dob.getMonth() < this.nasc.getMonth()) true;
    else if (
        dob.getMonth() == this.nasc.getMonth() &&
        dob.getDate() < this.nasc.getDate
    )
        false;
};
console.log(pessoas[4].getNiver(dob));
