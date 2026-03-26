class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
    }
}

// OS NOS PRECISAM SEMPRE APONTAR PARA TRAS E FRENTE DELES
// um novo NODE(nó) so e inserido se alguem tiver apontado pra ele

class ListaDuplamenteEncadeada {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    // insere no final
    append(value) {
        const newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode; // faz a tail apontar pra ele
            newNode.prev = this.#tail; // aponta para tail
            this.#tail = newNode; // node vira nova tail
        }
        this.#length++;
    }

    // insere no inicio
    preppend(value) {
        const newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head; // novo node aponta pra head
            this.#head.prev = newNode; // head aponta pro novo node
            this.#head = newNode; // head vira novo node
        }
        this.#length++;
    }

    removeLast() {
        if (this.#tail === undefined) return undefined;

        const removedNode = this.#tail; // armazena pra mostrar dps
        if (this.#tail === this.#head) {
            // caso a tail e a head forem iguais quer dizer que a lista so tem 1 item
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            this.#tail = this.#tail.prev; // a tail vira seu anterior
            this.#tail.next = undefined; // para de apontar pra tail antiga
            this.#length--;
        }
        return removedNode.value;
    }

    removeFirst() {
        if (this.#head === undefined) return undefined;

        const removedNode = this.#head;
        if (this.#tail === this.#head) {
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            this.#head = this.#head.next;
            this.#head.prev = undefined;
            this.#length--;
        }
        return removedNode.value;
    }

    // percorre a lista do inicio ao fim
    traverse() {
        if (this.isEmpty()) {
            console.log("A lista esta vazia");
            return;
        }
        let current = this.#head
        while (current) {
            // enquanto current for true (nao undefined)
            console.log(current.value);
            current = current.next;
        }
    }

    traverseReverse() {
        if (this.isEmpty()) {
            console.log("A lista esta vazia");
            return;
        }
        let current = this.#tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    insertAt(value, index) {
        if (index < 0 || index > this.#length) return undefined;

        const newNode = new Node(value);

        if (index === 0) {
            this.preppend(value);
            return;
        }
        if (index === this.#length) {
            this.append(value);
            return;
        }

        let current = this.#head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        newNode.prev = previous;
        previous.next = newNode;
        current.prev = newNode;

        this.#length++;
    }

    find(value) {
        let current = this.#head;
        let index = 0;

        while (current) {
            if (current.value === value) return index;

            current = current.next;
            index++;
        }
        return -1;
    }

    removeAt(index) {
        if (index < 0 || index >= this.#length) return undefined;

        if (index === 0) return this.removeFirst();
        if (index === this.#length - 1) return this.removeLast();

        let current = this.#head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.prev.next = current.next;
        // o proximo do anterior recebe o proximo
        current.next.prev = current.prev;
        // anterior do proximo recebe o anterior

        this.#length--;
        return current.value;
    }

    size = () => this.#length;
    isEmpty = () => this.#length === 0;

    toString() {
        let current = this.#head;
        let list = '';
        while (current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined')
    }
}

module.exports = ListaDuplamenteEncadeada