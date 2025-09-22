const brinquedoFila = require("./brinquedo.class.js");

const fila = new brinquedoFila();

fila.enqueue('Passageiro 1')
fila.enqueue('Passageiro 2')
fila.enqueue('Passageiro 3')
fila.enqueue('Passageiro 4')

function brinquedoTempo() {
    if(!fila.estaVazia()) {
        const passageiro = fila.dequeue();
        console.log(`Passageiro atual: ${passageiro}`)
    
        setTimeout(brinquedoTempo, 1000); //repete o ciclo
    } else {
        console.log('')
        console.log("Fila vazia!") // quando acabar
    }
}

setTimeout(brinquedoTempo, 1000)