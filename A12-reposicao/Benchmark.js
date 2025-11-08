
// Importando as classes necessárias para o benchmark
const AVL = require('../A11-arvorebinaria2/AVL.js');
const BinaryTree = require('../A10-arvorebinaria/BinaryTree.js');
const LinkedList = require('../A7-ListaEncadeada/dinamicamente.js');
const DoublyLinkedList = require('../A7-ListaEncadeada/duplamente.js');
const Fila = require('../A5-pilhas+filas/Fila.js');
const Pilha = require('../A5-pilhas+filas/Pilha.js');
const Array = require('../A3-arrays/MeuArray.js');

// Instanciando as classes
const avl = new AVL();
const tree = new BinaryTree();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();
const array = new Array();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 1000000;
console.log(`Inserindo ${size} elementos em cada estrutura...`);
console.log("\n=== Benchmark ===");


// testando array
console.time("timerArray");
for (let i = 0; i < size; i++) {
    array.adicionar(getRandomIntRange(i, size));
}
console.timeEnd("timerArray");

// Testando a Fila
console.time("timerFila");
for (let i = 0; i < size; i++) {
    queue.enqueue(getRandomIntRange(i, size));
}
console.timeEnd("timerFila");


// Testando a Pilha
console.time("timerPilha");
for (let i = 0; i < size; i++) {
    stack.adicionar(getRandomIntRange(i, size));
}
console.timeEnd("timerPilha");



// Testando a LinkedList
console.time("timerLinkedList");
for (let i = 0; i < size; i++) {
    list.insertBegginning(getRandomIntRange(i, size));
}
console.timeEnd("timerLinkedList");


// Testando a DoublyLinkedList
console.time("timerDoublyLinkedList");
for (let i = 0; i < size; i++) {
    doublyList.append(getRandomIntRange(i, size));
}
console.timeEnd("timerDoublyLinkedList");


// Testando a BinaryTree
console.time("timerBinaryTree");
for (let i = 0; i < size; i++) {
    tree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerBinaryTree");

// Testando a AVL
console.time("timerAVL");
for (let i = 0; i < size; i++) {
    avl.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerAVL");