
// Importando as classes necessárias para o benchmark
const BinaryTree = require('./BinaryTree.js');
const LinkedList = require('../A7-ListaEncadeada/dinamicamente.js');
const DoublyLinkedList = require('../A7-ListaEncadeada/duplamente.js');
const Fila = require('../A5-pilhas+filas/Fila.js');
const Pilha = require('../A5-pilhas+filas/Pilha.js');



// Instanciando as classes
const tree = new BinaryTree();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const size = 10000000;
posicao_aleatoria = getRandomIntRange(1, size);


// Testando a Fila
console.time("timerFila");
for (let i = 0; i < size; i++) {
    queue.enqueue(posicao_aleatoria);
}
console.timeEnd("timerFila");


// Testando a Pilha
console.time("timerPilha");
for (let i = 0; i < size; i++) {
    stack.adicionar(posicao_aleatoria);
}
console.timeEnd("timerPilha");



// Testando a LinkedList
console.time("timerLinkedList");
for (let i = 0; i < size; i++) {
    list.insertBegginning(posicao_aleatoria);
}
console.timeEnd("timerLinkedList");


// Testando a DoublyLinkedList
console.time("timerDoublyLinkedList");
for (let i = 0; i < size; i++) {
    doublyList.append(posicao_aleatoria);
}
console.timeEnd("timerDoublyLinkedList");


// Testando a BinaryTree
console.time("timerBinaryTree");
for (let i = 0; i < size; i++) {
    tree.insert(posicao_aleatoria);
}
console.timeEnd("timerBinaryTree");