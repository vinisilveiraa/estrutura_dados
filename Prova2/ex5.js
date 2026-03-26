const Grafo = require("./grafos/grafos1/Grafo.js");
const grafo = new Grafo();

grafo.adicionarVertice('Alice');
grafo.adicionarVertice('Bruno');
grafo.adicionarVertice('Carlos');
grafo.adicionarVertice('Diana');

grafo.adicionarAresta('Alice', 'Bruno');
grafo.adicionarAresta('Bruno', 'Carlos');
grafo.adicionarAresta('Carlos', 'Diana');
grafo.adicionarAresta('Alice', 'Diana');

console.log('===== Amizades: ======');
grafo.imprimirGrafo();


console.log('');
console.log('===== Amizades desfeitas: ======');
grafo.removerAresta('Carlos', 'Diana');
grafo.imprimirGrafo();