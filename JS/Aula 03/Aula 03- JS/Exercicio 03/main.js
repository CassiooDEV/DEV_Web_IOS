function AlertCookie() {
    alert('Você quer um cookie');
}
console.log('Você quer um cookie');
const AlertSucesso = () => {
    alert('Mensagem gerada com sucesso');
};
console.log('Mensagem gerada com sucesso');

const notebook = {
    marca: 'Asus',
    processador: 'Ryzen 7 2700x',
    gpu: 'rtx 2060',
    ram: 'Memória DDR4 Geil Super Luce 8 GB',
    ssd: 'SSD A400, Kingston, 240GB',
};
console.log(notebook);

function Conversor(anos = 1, dias = 365.25) {
    return anos * dias;
}
//Basta trocar a quantidade de anos para saber o resultado em dias.
console.log(Conversor());
