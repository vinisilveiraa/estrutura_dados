
const BinaryTree = require("./BinaryTree.js");

const binaryTree = new BinaryTree();

// Exemplo de uso da Árvore Binária
binaryTree.insert(15);
binaryTree.insert(10);
binaryTree.insert(20);
binaryTree.insert(8);
binaryTree.insert(12);
binaryTree.insert(18);
binaryTree.insert(25);

console.log("\nPercurso em-ordem:");
binaryTree.inOrder();

console.log("\nPercurso pré-ordem:");
binaryTree.preOrder();

console.log("\nPercurso pós-ordem:");
binaryTree.postOrder();

console.log("Busca valor 18:");
console.log(binaryTree.search(18) ? "Valor encontrado!" : "Valor não encontrado!")

console.log("Remover valor 10:");
binaryTree.remove(10);
binaryTree.inOrder();