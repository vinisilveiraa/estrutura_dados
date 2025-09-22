const pedido = require('./pedidos.class.js');

const fila = new pedido();

function novoPedido(numero, pedido) {
    fila.enqueue(numero, pedido);
    console.log(`Novo pedido adicionado: ${numero} - ${pedido}`);
}

novoPedido(1, 'Hamburguer')
novoPedido(2, 'Pizza')
novoPedido(3, 'Salada')

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

    // explicacao gemini
    //  Math.random() gera um número, digamos 0.75.
    //  max - min + 1 é 10 - 5 + 1, que resulta em 6.
    //  A multiplicação 0.75 * 6 resulta em 4.5.
    //  Math.floor(4.5) arredonda para 4.
    //  Finalmente, 4 + min(4 + 5) resulta em 9.
}

function preparandoPedido() {
    if (fila.estaVazia()) {
        console.log('Nenhum pedido para preparar.');
        return;
    }
    const pedidoPreparado = fila.dequeue();
    console.log(`Pedido ${pedidoPreparado.numero} - ${pedidoPreparado.pedido} está sendo preparado.`);

    const tempo = numeroAleatorio(500, 2500)
    
    setTimeout(preparandoPedido, tempo)
    console.log(`Tempo total: ${tempo}`)
}

preparandoPedido();