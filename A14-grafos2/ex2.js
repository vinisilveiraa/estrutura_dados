const grafoPonderado = require('./grafosPonderado.js');

const grafo = new grafoPonderado();


// Um trem precisa cruzar uma rede ferroviária entre cidades com diferentes  tempos de viagem. Construa o grafo a seguir e responda:

// Conexões ferroviárias:
// – São Paulo → Campinas (1)
// – Campinas → Curitiba (4)
// – São Paulo → Curitiba (2)
// – Curitiba → Florianópolis (3)
// – Florianópolis → Porto Alegre (2)

// Desafios:

// – Qual a menor distância de São Paulo até Porto Alegre?
// R: 7 minimos, via São Paulo -> Curitiba -> Florianópolis -> Porto Alegre

// – Mostre os percursos em DFS e BFS a partir de São Paulo.



grafo.adicionarVertice('Sao Paulo');
grafo.adicionarVertice('Campinas');
grafo.adicionarVertice('Curitiba');
grafo.adicionarVertice('Florianopolis');
grafo.adicionarVertice('Porto Alegre');

grafo.adicionarAresta('Sao Paulo', 'Campinas', 1);
grafo.adicionarAresta('Campinas', 'Curitiba', 4);
grafo.adicionarAresta('Sao Paulo', 'Curitiba', 2);
grafo.adicionarAresta('Curitiba', 'Florianopolis', 3);
grafo.adicionarAresta('Florianopolis', 'Porto Alegre', 2);

console.log('==== Grafo ponderado: ====');

grafo.imprimirGrafo();
console.log('');
// infelizmente quebra a ordem de exibição
grafo.imprimirMatrizAdjacencia();

console.log('');
console.log('==== Buscas no grafo ponderado: ====');

grafo.dijkstra('Sao Paulo');

grafo.dfs('Sao Paulo');
grafo.bfs('Sao Paulo');

