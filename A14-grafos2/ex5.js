const grafoPonderado = require('./grafosPonderado.js');

const grafo = new grafoPonderado();

// Um personagem está em um labirinto com túneis de diferentes dificuldades (pesos). Ele precisa encontrar o caminho mais fácil até a saída.

// Túneis do labirinto:
// – Entrada → A (2)
// – A → B (2)
// – B → Saída (1)
// – Entrada → C (5)
// – C → Saída (1)

// Tarefas:
// – Modele esse labirinto como um grafo.
// – Use dijkstra('Entrada') para descobrir a melhor rota até 'Saída'.
// R: 5 unidades, via Entrada -> A -> B -> Saída
// – Compare com os caminhos encontrados por DFS e BFS.

grafo.adicionarVertice('Entrada');
grafo.adicionarVertice('A');
grafo.adicionarVertice('B');
grafo.adicionarVertice('C');
grafo.adicionarVertice('Saída');

grafo.adicionarAresta('Entrada', 'A', 2);
grafo.adicionarAresta('A', 'B', 2);
grafo.adicionarAresta('B', 'Saída', 1);
grafo.adicionarAresta('Entrada', 'C', 5);
grafo.adicionarAresta('C', 'Saída', 1);

console.log('==== Grafo ponderado: ====');
grafo.imprimirGrafo();
console.log('');
grafo.imprimirMatrizAdjacencia();

console.log('');
console.log('==== Buscas no grafo ponderado: ====');

grafo.dijkstra('Entrada');

grafo.dfs('Entrada');
grafo.bfs('Entrada');