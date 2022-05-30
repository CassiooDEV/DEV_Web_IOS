const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const decrease = document.getElementsByClassName('decrease');
const lista = document.getElementById('items');
const carrinho = document.getElementById('compra');
const div1 = document.getElementsByClassName('total');
const end = document.getElementById('fim');
const prices = [];
let finaltotal = document.getElementById('valor-total');
form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    let newItemText = document.getElementById('item1').value;
    let newItemvalue = document.getElementById('item2').value;
    let newItemqntd = document.getElementById('item3').value;
    let valor = newItemvalue * newItemqntd;
    total(valor);
    if (newItemvalue > 0 && 100 > newItemqntd > 0) {
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
            document.createTextNode(
                `${newItemqntd}x ${newItemText} Valor: R$${
                    newItemvalue * newItemqntd
                },00 `
            )
        );
        carrinho.appendChild(li2);
        deleteBtn.addEventListener('click', excluir);
        function excluir() {
            li.remove();
            li2.remove();
        }
        addBtn.addEventListener('click', add);
        function add() {
            let inc = newItemqntd++;
            let newValueplus = newItemvalue * inc;
            let newValve = +newItemvalue;
            if (newItemqntd <= 100) {
                li2.innerHTML = `${inc + 1}x ${newItemText} Valor: R$${
                    newValueplus + newValve
                },00`;
                let newValue = +newItemvalue;
                total(newValue);
            }
        }
        decreaseBtn.addEventListener('click', decrease);
        function decrease() {
            let dec = newItemqntd--;
            let newValue = newItemvalue * dec;
            if (newItemqntd >= 1) {
                li2.innerHTML = `${
                    dec - 1
                }x ${newItemText} Valor: R$${(newValue -= newItemvalue)},00`;
                let novoValor = -newItemvalue;
                total(novoValor);
            }
        }
    } else if (newItemqntd > 100) {
        alert('Quantidade deve ser menor que 100');
    } else if (newItemqntd <= 0 || newItemvalue <= 0) {
        alert('Insira um valor maior que 0');
    } else {
        alert('Insira um valor númerico');
    }
    form.reset();
}
function total(i) {
    let itemprice = parseInt(i);
    prices.push(itemprice);
    let total = 0;
    if (prices.length <= 1) {
        total = itemprice;
    } else {
        for (let i = 0; i < prices.length; i++) {
            total += prices[i];
        }
    }
    finaltotal.innerHTML = `R$${total},00`;
}
