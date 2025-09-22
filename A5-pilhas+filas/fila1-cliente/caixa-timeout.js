const fila = require ('./fila.class.js')

const caixa = new fila()

caixa.enqueue('Cliente 1');
caixa.enqueue('Cliente 2');
caixa.enqueue('Cliente 3');

console.log("Fila inicial:");
console.log(caixa.front());

function atenderCliente() {
    if(!caixa.estaVazia()) {
        const cliente = caixa.dequeue();
        console.log(`Atendendo ${cliente}`)
        console.log(`Fila agora tem: ${caixa.tamanho()} clientes`)
    
        setTimeout(atenderCliente, 2000); //repete o ciclo
    } else {
        console.log('')
        console.log("Fila vazia!") // quando acabar
    }
}

setTimeout(atenderCliente, 2000)