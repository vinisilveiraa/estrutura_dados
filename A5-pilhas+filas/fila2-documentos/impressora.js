const impressaoFila = require("./impressao.class");

const impressora = new impressaoFila();

impressora.enqueue('Doc 1', 3);
impressora.enqueue('Doc 2', 5);
impressora.enqueue('Doc 3', 6);
impressora.enqueue('Doc 4', 2);
impressora.enqueue('Doc 5', 2);
impressora.enqueue('Doc 6', 2); // fila cheia
 

// console.log(impressora.front()); // * Doc 1

function imprimir() {
    const doc = impressora.dequeue();

    if (doc !== undefined) {
        console.log(`Imprimindo ${doc.documento} com ${doc.pagina} páginas`);
        console.log('. . .');
        setTimeout(imprimir, (doc.pagina * 500)); // imprime 1 pagina a cada 0.5s
    } else {
        console.log('Nenhum documento para imprimir');
    }
}
imprimir();



