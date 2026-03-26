const BinaryTree = require('./arvores-binarias/arvore-binaria/BinaryTree.js');
const AVLtree = require('./arvores-binarias/arvore-avl/ALVTree.js');

const tree = new BinaryTree();
const avltree = new AVLtree();


function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const size = 20000;

console.time("timerBinaryTree");
for (let i = 0; i < size; i++) 
{
    tree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerBinaryTree");


console.time("timerAVLTree");
for (let i = 0; i < size; i++) 
{
    avltree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerAVLTree");

console.log('')
console.log('==== Quais Aplicacoes compensam pagar o preco extre de uma insercao na AVL TREE ====')
console.log('')
console.log('Qualquer aplicação que exige respostas rapidas como:')
console.log('Jogos e sistemas onde é importante manter resposta rápida sob inserções frequentes')
console.log('Indexação de dados (banco de dados, memória).')