const Grafo = require('./grafos.js');

const meuGrafo = new Grafo();

meuGrafo.adicionarVertice('Processador');
meuGrafo.adicionarVertice('Memoria RAM');
meuGrafo.adicionarVertice('Placa Mae');
meuGrafo.adicionarVertice('Fonte');
meuGrafo.adicionarVertice('GPU');
meuGrafo.adicionarVertice('SSD');
meuGrafo.adicionarVertice('CPU FAN');

meuGrafo.adicionarAresta('Processador', 'Memoria RAM')
meuGrafo.adicionarAresta('Processador', 'Placa Mae')
meuGrafo.adicionarAresta('Processador', 'CPU FAN')

meuGrafo.adicionarAresta('Placa Mae', 'Memoria RAM')
meuGrafo.adicionarAresta('Placa Mae', 'Fonte')
meuGrafo.adicionarAresta('Placa Mae', 'GPU')
meuGrafo.adicionarAresta('Placa Mae', 'SSD')
meuGrafo.adicionarAresta('Placa Mae', 'CPU FAN')

console.log('===================================================')
meuGrafo.imprimirGrafo();
console.log('===================================================')