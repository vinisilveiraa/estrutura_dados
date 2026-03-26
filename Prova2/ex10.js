const Sorters = require('./A15-Busca-Ordenacao/Sorters.js');
const Buscas = require('./A15-Busca-Ordenacao/Busca.js');
const AVLtree = require('./arvores-binarias/arvore-avl/ALVTree.js')

const avl = new AVLtree();
// vetor de 10.000.000 numeros aleatorios originalmente, reduzido para 100.000 para testes mais rapidos
const tamanho_vetor = 1000;
const tamanho_vetor2 = 100;

const dados = Array.from({ length: tamanho_vetor }, () => Math.floor(Math.random() * tamanho_vetor));
const buscas = Array.from({ length: tamanho_vetor2 }, () => Math.floor(Math.random() * tamanho_vetor));

console.log(" Tamanho do vetor Dados: ", tamanho_vetor);
console.log(" Tamanho do vetor Buscas: ", tamanho_vetor2);

console.log(" \n--------------- Estratégia 1: Ordenação e Busca Binária --------------- ");
console.time("estrategia 1-a");
Sorters.mergeSort(dados);
console.timeEnd("estrategia 1-a");

console.time("estrategia 1-b");
for(i = 0; i < buscas.length; i++) {
    Buscas.binaria(dados, buscas[i])
}
console.timeEnd("estrategia 1-b");

console.log(" \n--------------- Estratégia 2: Árvore AVL --------------- ");

console.time("estrategia 2-a");
for(i = 0; i < dados.length; i++) {
    avl.insert(dados[i])
}
console.timeEnd("estrategia 2-a");

console.time("estrategia 2-b");
for(i = 0; i < buscas.length; i++) {
    avl.search(dados, buscas[i])
}
tempo = console.timeEnd("estrategia 2-b");

console.log(" \n--------------- Resultados: --------------- ");
console.log("");
console.log("RESULTADOS REDUZUDOS A 1000 e 100");
console.log('Estrategia 1 EM MEDIA = 6.6ms');
console.log('Estrategia 2 EM MEDIA = 40.2ms');
console.log("");
console.log("Estrategia 1 é indiscutivelmente mais eficiente pois tem menos trabalho em organizar e buscar, sao algoritmos ja proprio para esse tipo de trabalho");
console.log("AVLtree tem muito trabalho em se auto organizar e definir oq conecta com oq, mas tambem tem o fator de ser muito bem organizado com hierarquias bem definidas");

