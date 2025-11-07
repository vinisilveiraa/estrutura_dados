const Grafo = require('./grafos.js');

const meuGrafo = new Grafo();

meuGrafo.adicionarVertice('1');
meuGrafo.adicionarVertice('4');
meuGrafo.adicionarVertice('2');
meuGrafo.adicionarVertice('3');

meuGrafo.adicionarAresta('1', '2');
meuGrafo.adicionarAresta('1', '3');
meuGrafo.adicionarAresta('2', '4');

meuGrafo.imprimirGrafo();

console.log('=====================')

meuGrafo.removerVertice('2');
meuGrafo.imprimirGrafo();