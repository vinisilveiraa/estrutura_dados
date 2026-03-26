const GrafoPonderado = require("./GrafoPonderado");

// Exemplo de uso
const grafo = new GrafoPonderado();
grafo.adicionarAresta('A', 'B', 2);
grafo.adicionarAresta('A', 'C', 5);
grafo.adicionarAresta('B', 'C', 1);
grafo.adicionarAresta('B', 'D', 4);
grafo.adicionarAresta('C', 'D', 2);

grafo.imprimirGrafo();

grafo.imprimirMatrizAdjacencia();
// grafo.dfs('A');
// grafo.bfs('A');
// grafo.dijkstra('A');
// grafo.imprimirGrafo();
