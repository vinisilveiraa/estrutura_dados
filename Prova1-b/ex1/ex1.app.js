const Fila = require('./ex1.class.js');

const Impressora = new Fila();

Impressora.enqueue('Relatorio.pdf');
Impressora.enqueue('CertidaoNascimento.pdf');
Impressora.enqueue('Atestado.pdf');
Impressora.enqueue('Escritura.pdf');
Impressora.enqueue('Contrato.pdf');
console.log('')

function impressao() {
    for(let i = 0; i < 3; i++) {
        itemImprimido = Impressora.dequeue();
        
        console.log(`- Documento sendo impresso: ${itemImprimido}, item ${i+1}/3`)
    }   
    console.log(`- Ainda tem: ${Impressora.tamanho()} itens restantes. Proximo item: ${Impressora.front()}`);
}

impressao();
console.log('')