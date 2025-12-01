
const Node = require("./Node.js");

class AVLTree {
    #root = undefined;

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
        if (!x) return y; // impedir rotação inválida
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
        if (!y) return x; // impedir rotação inválida
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

        // Proteção REAL contra ciclo
        if (this.#root.left === this.#root) this.#root.left = null;
        if (this.#root.right === this.#root) this.#root.right = null;
    }


    _insertNode(node, value) {
        if (!node) return new Node(value);

        if (value < node.value) {
            node.left = this._insertNode(node.left, value);
        }
        else if (value > node.value) {
            node.right = this._insertNode(node.right, value);
        }
        else {
            return node; // Valor duplicado não é inserido
        }

        this.updateHeight(node);
        const balance = this.getBalanceFactor(node);

        // Casos de desbalanceamento:
        // Esquerda-Esquerda
        if (balance > 1 && value < node.left.value)
            return this.rotateRight(node);

        // Direita-Direita
        if (balance < -1 && value > node.right.value)
            return this.rotateLeft(node);

        // Esquerda-Direita
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Direita-Esquerda
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
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

    buscar(value, node = this.#root) {
        if (!node) {
            return false; // Valor não encontrado
        }
        if (value === node.value) {
            return true; // Valor encontrado
        }
        return value < node.value
            ? this.buscar(value, node.left)
            : this.buscar(value, node.right);
    }

    getRoot() {
        return this.#root;
    }

}

module.exports = AVLTree;