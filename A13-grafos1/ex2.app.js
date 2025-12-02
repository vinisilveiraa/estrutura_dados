const Grafo_peso = require('./grafo_compeso');

const meuGrafo = new Grafo_peso();

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
console.log('=====================');

meuGrafo.bfs('1');
console.log('=====================');

// menor caminho entre 1 e 4
const resultado = meuGrafo.menorCaminho('1', '4');
console.log("Menor caminho 1 → 4:", resultado.caminho.join(" -> "));
console.log("Custo total:", resultado.distancia);
