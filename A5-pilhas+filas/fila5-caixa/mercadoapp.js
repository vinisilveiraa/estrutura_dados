const mercadoFila = require('./mercado-fila');

const fila = new mercadoFila;

function novoCliente(cliente, produtos) {
    fila.enqueue(cliente, produtos)
}

novoCliente('Roberta', 15);
novoCliente('Ronaldo', 20);
novoCliente('Ana', 12);
novoCliente('Bruno', 8);
novoCliente('Carla', 25);
novoCliente('Daniel', 5);
novoCliente('Elaine', 30);
novoCliente('Fabio', 18);
novoCliente('Giovana', 7);
novoCliente('Higor', 14);
novoCliente('Isabela', 22);
novoCliente('João', 9);

console.log('')

function andandoFila1() {
    if (!fila.estaVazia1()) {
        const cliente = fila.dequeue1();

        console.log('Fila 1:')
        console.log(`Cliente sendo atendido: ${cliente.cliente} com ${cliente.produtos} items`);

        const tempo = cliente.produtos * 100;
        setTimeout(andandoFila1, tempo);
        console.log(`Tempo de atendimento: ${tempo / 1000} segundos`);

        console.log('');

    } else {
        console.log('Fila 1 Vazia!!');
        console.log('')
    }
}

function andandoFila2() {
    if (!fila.estaVazia2()) {
        const cliente = fila.dequeue2();

        console.log('Fila 2:')
        console.log(`Cliente sendo atendido: ${cliente.cliente} com ${cliente.produtos} items`);

        const tempo = cliente.produtos * 100;
        setTimeout(andandoFila2, tempo);
        console.log(`Tempo de atendimento: ${tempo / 1000} segundos`);

        console.log('');

    } else {
        console.log('Fila 2 Vazia!!');
        console.log('')
    }
}

andandoFila1();
andandoFila2();