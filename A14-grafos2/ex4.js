const grafoPonderado = require('./grafosPonderado.js');

const grafo = new grafoPonderado();

// Um mago precisa viajar por reinos para encontrar o pergaminho sagrado no Reino Z. O grafo representa portais mágicos com o custo de energia (peso) para usá-los.

// Portais mágicos:
// – X → Y (6)
// – X → W (2)
// – W → Y (2)
// – Y → Z (3)
// – W → Z (7)

// Objetivos:

// – Mostre a matriz de adjacência.
// – Calcule o caminho com menor custo de energia de X até Z.
// R : 7 unidades, via X -> W -> Y -> Z
// – Compare os caminhos encontrados em DFS e BFS a partir de X.

grafo.adicionarVertice('X');
grafo.adicionarVertice('Y');
grafo.adicionarVertice('W');
grafo.adicionarVertice('Z');

grafo.adicionarAresta('X', 'Y', 6);
grafo.adicionarAresta('X', 'W', 2);
grafo.adicionarAresta('W', 'Y', 2);
grafo.adicionarAresta('Y', 'Z', 3);
grafo.adicionarAresta('W', 'Z', 7);

console.log('==== Grafo ponderado: ====');

grafo.imprimirGrafo();
console.log('');
grafo.imprimirMatrizAdjacencia();

console.log('');
console.log('==== Buscas no grafo ponderado: ====');

grafo.dijkstra('X');

grafo.dfs('X');
grafo.bfs('X');