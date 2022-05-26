const valores = [18, 12, 15];
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let add = document.getElementsByClassName('add');
let decrease = document.getElementsByClassName('decrease');
let remove = document.getElementsByClassName('delete');
let carrinho = document.getElementById('compra');
form.addEventListener('submit', addItem);
add.addEventListener('click', addItem);
filter.addEventListener('keyup', buscarItems);

function addItem(e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = 'Arroz';
    li.appendChild(document.createTextNode(newItem));
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn- float-end delete';
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
    carrinho.appendChild(li);
    form.reset();
}
// Função Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
// Função buscarItems
function buscarItems(e) {
    // Converte o texto digitado para minúsculo
    let text = e.target.value.toLowerCase();
    // Busca todos os itens
    let items = itemList.getElementsByTagName('li');
    // Converte os itens para array
    Array.from(items).forEach(function (item) {
        // Busca o primeiro item da lista
        let itemName = item.firstChild.textContent;
        // Busca o item na lista que começa com o mesmo texto digitado
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'; // exibe o item
        } else {
            item.style.display = 'none'; // oculta o item
        }
    });
}
