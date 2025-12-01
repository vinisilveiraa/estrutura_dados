const Grafo = require('./grafos.js');

const meuGrafo = new Grafo();

// 2) Adicione pesos às arestas no grafo.
// –Implemente o algoritmo de busca em largura (BFS).
// –Crie um grafo ponderado e calcule o menor caminho entre dois vértices.

meuGrafo.adicionarVertice('1');
meuGrafo.adicionarVertice('4');
meuGrafo.adicionarVertice('2');
meuGrafo.adicionarVertice('3');

meuGrafo.adicionarAresta('1', '2', 5);
meuGrafo.adicionarAresta('1', '3', 10);
meuGrafo.adicionarAresta('2', '4', 2);

meuGrafo.imprimirGrafo();
console.log('=====================')

meuGrafo.buscaEmLargura('1');
console.log('=====================')

meuGrafo.menorCaminho('1', '4');
meuGrafo.menorCaminho('1', '3');
console.log('=====================')

meuGrafo.removerVertice('2');
meuGrafo.imprimirGrafo();
console.log('=====================')

meuGrafo.buscaEmLargura('1');
console.log('=====================')
meuGrafo.menorCaminho('1', '4');
meuGrafo.menorCaminho('1', '3');
