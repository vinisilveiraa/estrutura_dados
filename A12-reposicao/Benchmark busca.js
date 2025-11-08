// Importando as classes necessárias para o benchmark
const AVL = require('../A11-arvorebinaria2/AVL.js');
const BinaryTree = require('../A10-arvorebinaria/BinaryTree.js');
const LinkedList = require('../A7-ListaEncadeada/dinamicamente.js');
const DoublyLinkedList = require('../A7-ListaEncadeada/duplamente.js');
const Fila = require('../A5-pilhas+filas/Fila.js');
const Pilha = require('../A5-pilhas+filas/Pilha.js');
const MeuArray = require('../A3-arrays/MeuArray.js');

// Instanciando as classes
const avl = new AVL();
const tree = new BinaryTree();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();
const array = new MeuArray();

// Função auxiliar para gerar números aleatórios
function getRandomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// === CONFIGURAÇÃO DO TESTE ===
const size = 10000;   // quantidade de elementos inseridos
const buscas = 10000; // quantidade de buscas realizadas

console.log(`Inserindo ${size} elementos em cada estrutura...`);

// === PREENCHENDO AS ESTRUTURAS ===
for (let i = 0; i < size; i++) {
    const valor = i; // pode usar números sequenciais
    array.adicionar(valor);
    queue.enqueue(valor);
    stack.adicionar(valor);
    list.insertBegginning(valor);
    doublyList.append(valor);
    tree.insert(valor);
    avl.insert(valor);
}

// Gerando valores aleatórios que serão buscados
const valoresBusca = Array.from({ length: buscas }, () => getRandomIntRange(0, size - 1));

// === FUNÇÃO DE BENCHMARK ===
function benchmarkBusca(label, func) {
    console.time(label);
    func();
    console.timeEnd(label);
}

// === EXECUTANDO BENCHMARKS ===
console.log("\n=== Benchmark de Busca ===");

benchmarkBusca("buscaArray", () => {
    for (let valor of valoresBusca) array.obterElemento(valor);
});

benchmarkBusca("buscaFila", () => {
    for (let valor of valoresBusca) queue.buscar(valor);
});

benchmarkBusca("buscaPilha", () => {
    for (let valor of valoresBusca) stack.buscar(valor);
});

benchmarkBusca("buscaLinkedList", () => {
    for (let valor of valoresBusca) list.find(valor);
});

benchmarkBusca("buscaDoublyLinkedList", () => {
    for (let valor of valoresBusca) doublyList.find(valor);
});

benchmarkBusca("buscaBinaryTree", () => {
    for (let valor of valoresBusca) tree.search(valor);
});

benchmarkBusca("buscaAVL", () => {
    for (let valor of valoresBusca) avl.buscar(valor);
});
