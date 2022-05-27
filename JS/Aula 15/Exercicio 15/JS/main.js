let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let decrease = document.getElementsByClassName('decrease');
let lista = document.getElementById('items');
let carrinho = document.getElementById('compra');
let div = document.getElementById('total');
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
            `Item: ${newItemText} Valor Unitário:R$${newItemvalue},00`
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
        let li2 = document.createElement('li');
        li2.className = 'list-group-item';
        li2.appendChild(
            document.createTextNode(`${newItemqntd}x ${newItemText} `)
        );
        carrinho.appendChild(li2);
        let h5 = document.createElement('h5');
        h5.className = 'total';
        h5.appendChild(document.createTextNode('Valor'));
        carrinho.appendChild(h5);
        let p = document.createElement('p');
        p.className = 'total';
        p.appendChild(
            document.createTextNode(`R$${newItemvalue * newItemqntd},00`)
        );
        carrinho.appendChild(p);
        deleteBtn.addEventListener('click', excluir);
        function excluir() {
            li.remove();
            li2.remove();
            h5.remove();
            p.remove();
            deleteBtn.remove();
        }
        addBtn.addEventListener('click', add);
        function add() {
            let add = newItemqntd++;
            li2.innerHTML = `${add}x ${newItemText}`;
            p.innerHTML = `R$${newItemvalue * add},00`;
        }
        decreaseBtn.addEventListener('click', decrease);
        function decrease() {
            let dec = newItemqntd--;
            li2.innerHTML = `${dec}x ${newItemText}`;
            p.innerHTML = `R$${newItemvalue * dec},00`;
        }
    } else {
        alert('Valor e quantidade deve ser maior que 0!');
    }
}
