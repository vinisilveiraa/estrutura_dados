const GrafoPonderado = require("./grafosPonderado");

const grafo = new GrafoPonderado();

grafo.adicionarAresta('A', 'B', 2)
grafo.adicionarAresta('A', 'C', 5)
grafo.adicionarAresta('B', 'C', 1)
grafo.adicionarAresta('B', 'D', 4)
grafo.adicionarAresta('C', 'D', 2)

grafo.imprimirGrafo();
grafo.imprimirMatrizAdjacencia();
grafo.dfs('A');
grafo.bfs('A');
grafo.dijkstra('A');


// dfs - Depth-First Search (Busca em Profundidade)
// Vai o mais fundo possível no grafo antes de voltar.

// bfs - Breadth-First Search (Busca em Largura)
// Explora o grafo em camadas, visitando primeiro tudo que está mais perto do ponto inicial.

// dijkstra - Algoritmo de Dijkstra
// Encontra o caminho mais curto de um vértice para todos os outros em um grafo ponderado.