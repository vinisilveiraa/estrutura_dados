const Node = require("./Node.js");

class AVLTree {
    #root = null;

    // Função utilitária para obter a altura de um nó
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Calcula o fator de balanceamento de um nó
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Atualiza a altura de um nó
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    // Rotação simples à direita
    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Rotação simples à esquerda
    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Inserção com balanceamento AVL
    insert(value) {
        this.#root = this._insertNode(this.#root, value);
    }

    _insertNode(node, value) {
        if (!node) return new Node(value);

        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        } else {
            return node; // Valor duplicado não é inserido
        }

        this.updateHeight(node);
        const balance = this.getBalanceFactor(node);

        // Casos de desbalanceamento:
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node); // Esquerda-Esquerda
        }
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node); // Direita-Direita
        }
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node); // Esquerda-Direita
        }
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node); // Direita-Esquerda
        }

        return node;
    }

    // Exibir percuso in-order (opcional)
    inOrder(node = this.#root) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Método para buscar um valor na árvore
    search(value) {
        return this._searchNode(this.#root, value); // Inicia a busca a partir da raiz
    }

    // Método auxiliar para realizar a busca recursivamente
    _searchNode(node, value) {
        if (node === null) return false; // Se o nó atual é null, o valor não está na árvore

        if (value === node.value) {
            // Se o valor é encontrado retorna true
            return true;
        } else if (value < node.value) {
            // Se o valor procurado é menor, continua a busca na subárvore esquerda
            return this._searchNode(node.left, value);
        } else {
            // Se o valor procurado é maior, continua a busca na subárvore direita
            return this._searchNode(node.right, value);
        }
    }

    getRoot() {
        return this.#root;
    }
}

module.exports = AVLTree;