const fila = require ('./fila.class.js')

const caixa = new fila();

caixa.enqueue('Cliente 1');
caixa.enqueue('Cliente 2');
caixa.enqueue('Cliente 3');

console.log(caixa.front()); // * Cliente 1

console.log(`Removido: ${caixa.dequeue()}`);
console.log(`Removido: ${caixa.dequeue()}`);

console.log(caixa.front()); // * Cliente 3

caixa.enqueue('Cliente 4');

console.log(`Tamanho da Fila: ${caixa.tamanho()}`);

console.log(`Removido: ${caixa.dequeue()}`);
console.log(`Removido: ${caixa.dequeue()}`);

console.log(`Tamanho da Fila: ${caixa.tamanho()}`); // zero
console.log(caixa.front()); // undefined 
