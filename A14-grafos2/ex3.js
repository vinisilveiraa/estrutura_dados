const grafoPonderado = require('./grafosPonderado.js');

const grafo = new grafoPonderado();

// Um entregador de sucos precisa traçar a melhor rota entre lojas para entregar os pedidos rapidamente. Use Dijkstra para descobrir o menor tempo de entrega de sucos de Loja A até Loja F.

// Rotas:
// – A → B (1)
// – A → C (4)
// – B → D (2)
// – C → D (1)
// – D → E (3)
// – E → F (2)

// Desafios:

// – Liste os caminhos visitados em DFS e BFS a partir de A.
// – Qual a menor distância de A até F? 
// R: 8 minimos, via A -> B -> D -> E -> F

grafo.adicionarVertice('A');
grafo.adicionarVertice('B');
grafo.adicionarVertice('C');
grafo.adicionarVertice('D');
grafo.adicionarVertice('E');
grafo.adicionarVertice('F');

grafo.adicionarAresta('A', 'B', 1);
grafo.adicionarAresta('A', 'C', 4);
grafo.adicionarAresta('B', 'D', 2);
grafo.adicionarAresta('C', 'D', 1);
grafo.adicionarAresta('D', 'E', 3);
grafo.adicionarAresta('E', 'F', 2);

console.log('==== Grafo ponderado: ====');

grafo.imprimirGrafo();
console.log('');
grafo.imprimirMatrizAdjacencia();

console.log('');
console.log('==== Buscas no grafo ponderado: ====');

grafo.dfs('A');
grafo.bfs('A');

grafo.dijkstra('A');