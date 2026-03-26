const BinaryTree = require("./arvores-binarias/arvore-binaria/BinaryTree");

const binaryTree = new BinaryTree();

// Exemplo de uso da Árvore Binária
binaryTree.insert(50);
binaryTree.insert(30);
binaryTree.insert(70);
binaryTree.insert(20);
binaryTree.insert(40);
binaryTree.insert(60);
binaryTree.insert(80);

console.log("\nPercurso pré-ordem:");
binaryTree.preOrder();

console.log("Percurso 'pre-order' reflete a estrutura da arvore");