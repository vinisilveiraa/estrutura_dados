const Grafo = require("./Grafo.js");
const grafo = new Grafo();

grafo.adicionarVertice('A');
grafo.adicionarAresta('A', 'B');
grafo.adicionarAresta('A', 'C');
grafo.adicionarAresta('B', 'D');
grafo.imprimirGrafo();