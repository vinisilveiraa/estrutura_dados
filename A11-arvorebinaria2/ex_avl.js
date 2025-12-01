const AVLtree = require('./AVL.js');


console.log("=== EX1 - Inserção e Balanceamento (LL) ===");
const avl = new AVLtree();

avl.insert(30);
avl.inOrder();
console.log("FB(30) =", avl.getBalanceFactor(avl.getRoot()));
console.log("------");

avl.insert(20);
avl.inOrder();
console.log("FB(20) =", avl.getBalanceFactor(avl.getRoot().left));
console.log("FB(30) =", avl.getBalanceFactor(avl.getRoot()));
console.log("------");

avl.insert(10);
avl.inOrder();
console.log("FB(10) =", avl.getBalanceFactor(avl.getRoot().left.left));
console.log("FB(20) =", avl.getBalanceFactor(avl.getRoot().left));
console.log("FB(30) =", avl.getBalanceFactor(avl.getRoot()));
console.log("------");




console.log("\n=== EX2 - Rotações Simples e Duplas (LR) ===");

const avl2 = new AVLtree();

avl2.insert(20);
console.log("Inseriu 20");
avl2.inOrder();
console.log("FB(20) =", avl2.getBalanceFactor(avl2.getRoot()));
console.log("------");

avl2.insert(10);
console.log("Inseriu 10");
avl2.inOrder();
console.log("FB(10) =", avl2.getBalanceFactor(avl2.getRoot().left));
console.log("FB(20) =", avl2.getBalanceFactor(avl2.getRoot()));
console.log("------");

avl2.insert(30);
console.log("Inseriu 30");
avl2.inOrder();
console.log("FB(30) =", avl2.getBalanceFactor(avl2.getRoot().right));
console.log("FB(20) =", avl2.getBalanceFactor(avl2.getRoot()));
console.log("------");

avl2.insert(25);
console.log("Inseriu 25");
avl2.inOrder();
console.log("FB(25) =", avl2.getBalanceFactor(avl2.getRoot().right.left));
console.log("FB(30) =", avl2.getBalanceFactor(avl2.getRoot().right));
console.log("FB(20) =", avl2.getBalanceFactor(avl2.getRoot()));
console.log("------");

avl2.insert(40);
console.log("Inseriu 40");
avl2.inOrder();
console.log("FB(40) =", avl2.getBalanceFactor(avl2.getRoot().right.right));
console.log("FB(30) =", avl2.getBalanceFactor(avl2.getRoot().right));
console.log("FB(20) =", avl2.getBalanceFactor(avl2.getRoot()));
console.log("------");

avl2.insert(22);
console.log("Inseriu 22 → Caso LR detectado → Aplicando Rotação Dupla (LR)");
avl2.inOrder();
console.log("FB(22) =", avl2.getBalanceFactor(avl2.getRoot().left.right));
console.log("FB(25) =", avl2.getBalanceFactor(avl2.getRoot().left));
console.log("FB(20) =", avl2.getBalanceFactor(avl2.getRoot()));
console.log("------");

console.log("Árvore final balanceada (in-order):");
avl2.inOrder();
console.log("=======");
