const Grafo = require("./grafos/grafos1/Grafo");
const grafo = new Grafo();
// GRAFO COM BFS

grafo.adicionarVertice('Jau')
grafo.adicionarVertice('Bauru')
grafo.adicionarVertice('Assis')

grafo.adicionarAresta('Jau', 'Bauru')
grafo.adicionarAresta('Bauru', 'Assis')
grafo.adicionarAresta('Assis', 'Jau')

grafo.bfs();
 