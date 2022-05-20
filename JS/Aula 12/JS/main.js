//Método getElementById
let titulo = document.getElementById('titulo');
titulo.innerHTML = 'Vai perder o PC galera do AWS';
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';
//Método getElementByClass
let itens = document.getElementsByClassName('item');
console.log(itens);
console.log(itens[1]);
itens[1].textContent = 'Hello 2';
itens[1].style.fontWeight = 'bold';
itens[1].style.backgroundColor = 'yellow';
itens[1].style.padding = '.5rem';

//Utilizando o FOR para percorrer a lista
for (let i = 0; i < itens.length; i++) {
    itens[i].style.backgroundColor = 'gray';
}
//Método getElementByTagName
let li = document.getElementsByTagName('li');
for (let i = o; i < li.length; i += 2) {
    li[i].style.backgroundColor = 'pink';
}
//Método getElementByName
let nome = document.getElementsByName('fitem');
nome[0].textcontent = 'Pose de quebrada';
nome[0].style.backgroundColor = ' yellow';
nome[1].textcontent = 'RECEBAAA';
nome[1].style.backgroundColor = ' yellow';

//Remover conteúdo
let item2 = document.getElementById('item2');
item2.remove();

//Inserir um valor
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

//Alterar estilo da lista
let ul = document.getElementById('itens');
ul.style.listStyle = 'none';
ul.style.listStyle = 'decimal inside';
