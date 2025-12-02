const grafoPonderado = require('./grafosPonderado.js');

const grafo = new grafoPonderado();


// Na Cidade dos Gnomos, as ruas conectam casas mágicas com diferentes distâncias encantadas (pesos).

// – A → B (3)
// – A → C (2)
// – B → D (4)
// – C → D (1)
// – D → E (5)

// Desafios:

// – Imprima a lista de adjacência.
// – Imprima a matriz de adjacência.
// – Use DFS e BFS a partir da Casa A.
// – Use Dijkstra a partir da Casa A para saber o caminho mais rápido até a Casa E.

grafo.adicionarVertice('A');
grafo.adicionarVertice('B');
grafo.adicionarVertice('C');
grafo.adicionarVertice('D');
grafo.adicionarVertice('E');

grafo.adicionarAresta('A', 'B', 3);
grafo.adicionarAresta('A', 'C', 2);
grafo.adicionarAresta('B', 'D', 4);
grafo.adicionarAresta('C', 'D', 1);
grafo.adicionarAresta('D', 'E', 5);

console.log('==== Grafo ponderado: ====');

grafo.imprimirGrafo();
console.log('');
grafo.imprimirMatrizAdjacencia();

console.log('');
console.log('==== Buscas no grafo ponderado: ====');


grafo.dfs('A');

grafo.bfs('A');

grafo.dijkstra('A');