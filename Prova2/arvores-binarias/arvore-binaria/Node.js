
// Classe Node para representar um nó na árvore binária
class Node {
  constructor(value) {
    this.value = value; // Valor armazenado no nó
    this.left = null; // Referência para o nó filho à esquerda
    this.right = null; // Referência para o nó filho à direita
  }
}

module.exports = Node;