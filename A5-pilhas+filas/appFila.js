
const Fila = require("./Fila.js");

const fila = new Fila();

fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
fila.enqueue("Cliente 3");

console.log(fila.front()); // Saída: "Cliente 1"
console.log(fila.dequeue()); // Saída: "Cliente 1"
console.log(fila.dequeue()); // Saída: "Cliente 2"

fila.enqueue("Cliente 4");

// Saída: 2 (Cliente 3 e Cliente 4 ainda estão na fila)
console.log(fila.tamanho());
console.log(fila.front()) // Saída: "Cliente 3"

fila.limpar();

// Saída: true (o método limpar() foi chamado antes)
console.log(fila.estaVazia());