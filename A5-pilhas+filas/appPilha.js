
const Pilha = require("./Pilha.js");

const pilha = new Pilha();

pilha.adicionar("A");
pilha.adicionar(20);
pilha.adicionar(30);

// Saída: 30 (elemento no topo)
console.log(pilha.topo());

// Saída: 30 (remove o elemento do topo)
console.log(pilha.remover());

// Saída: 20 (agora o topo é 20)
console.log(pilha.topo());

// Saída: 2 (dois elementos restantes)
console.log(pilha.tamanhoPilha());

pilha.limpar();

// Saída: true (o método limpar() foi chamado antes)
console.log(pilha.estaVazia());