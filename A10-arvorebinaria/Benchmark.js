
// Importando as classes necessárias para o benchmark
const BinaryTree = require('./BinaryTree.js');
const LinkedList = require('../Aula 06 - LinkedList/LinkedList.js');
const DoublyLinkedList = require('../Aula 07 - DoubleLinkedList/DoublyLinkedList.js');
const Fila = require('../Aula 05 - Filas/Fila.js');
const Pilha = require('../Aula 04 - Pilhas/Pilha.js');





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

// Tamanho do teste
const size = 10000000;

// Testando a Fila
console.time("timerFila");
for (let i = 0; i < size; i++) 
{
    queue.enqueue(getRandomIntRange(i, size));
}
console.timeEnd("timerFila");


// Testando a Pilha
console.time("timerPilha");
for (let i = 0; i < size; i++) 
{
    stack.adicionar(getRandomIntRange(i, size));
}
console.timeEnd("timerPilha");



// Testando a LinkedList
console.time("timerLinkedList");
for (let i = 0; i < size; i++) 
{
    list.insertAtBeginning(getRandomIntRange(i, size));
}
console.timeEnd("timerLinkedList");


// Testando a DoublyLinkedList
console.time("timerDoublyLinkedList");
for (let i = 0; i < size; i++) 
{
    doublyList.append(getRandomIntRange(i, size));
}
console.timeEnd("timerDoublyLinkedList");


// Testando a BinaryTree
console.time("timerBinaryTree");
for (let i = 0; i < size; i++) 
{
    tree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerBinaryTree");