let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let decrease = document.getElementsByClassName('decrease');
let lista = document.getElementById('items');
form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    let newItemText = document.getElementById('item1').value;
    let newItemvalue = document.getElementById('item2').value;
    let newItemqntd = document.getElementById('item3').value;
    if (newItemvalue > 0 && newItemqntd > 0) {
        let li = document.createElement('li');
        li.className = 'list-group-item';
        let text = document.createTextNode(
            `Item: ${newItemText} Valor Unitário:R$${newItemvalue},00 Valor:R$${
                newItemvalue * newItemqntd
            },00 Quantidade: ${newItemqntd}`
        );
        li.appendChild(text);
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn- float-end btns delete';
        deleteBtn.appendChild(document.createTextNode('x'));
        li.appendChild(deleteBtn);
        let addBtn = document.createElement('button');
        addBtn.className = 'btn btn-primary btn-sm float-end btns add';
        addBtn.appendChild(document.createTextNode('+'));
        li.appendChild(addBtn);
        let decreaseBtn = document.createElement('button');
        decreaseBtn.className =
            'btn btn-primary btn-sm float-end btns decrease';
        decreaseBtn.appendChild(document.createTextNode('-'));
        li.appendChild(decreaseBtn);
        items.appendChild(li);
    } else {
        alert('Valor e quantidade deve ser maior que 0!');
    }
}
function addBtn() {
    let text = document.getElementById('item1').value;
    let valor = document.getElementById('item2').value;
    let qntd = document.getElementById('item3').value;
    let li = document.getElementsByClassName('list-group-item');
    li.appendChild(
        document.createTextNode(
            `Item: ${text} Valor: R$${valor * qntd + valor},00 Quantidade: ${
                qntd + 1
            }`
        )
    );
    items.appendChild(li);
}
add = document.getElementsByClassName('add');
add.addEventListener('click', addBtn);
