const BinaryTree = require("./arvores-binarias/arvore-binaria/BinaryTree.js");
const AVLtree = require('./arvores-binarias/arvore-avl/ALVTree.js');

const binaryTree = new BinaryTree();
const avl = new AVLtree();

binaryTree.insert(10);
binaryTree.insert(20);
binaryTree.insert(30);
binaryTree.insert(40);
binaryTree.insert(50);
binaryTree.insert(60);
avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(60);

console.log('BinaryTree root:', binaryTree.getRoot().value);
console.log('AVLTree root:', avl.getRoot().value);

console.log('A AVLtree se mantem sempre equilibrada, garantindo que as operações básicas tenham complexidade O(log n) sendo superior a Binarytree')