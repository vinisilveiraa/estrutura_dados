
class Node {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
    this.height = 1; // Todo nó começa com altura 1
  }
}

module.exports = Node;