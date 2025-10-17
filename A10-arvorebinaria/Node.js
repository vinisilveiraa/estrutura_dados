
// Classe Node para representar um nó na árvore binária
class Node {
  constructor(value) {
    this.value = value; // Valor armazenado no nó
    this.left = undefined; // Referência para o nó filho à esquerda
    this.right = undefined; // Referência para o nó filho à direita
  }
}

module.exports = Node;