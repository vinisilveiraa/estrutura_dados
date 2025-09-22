class pedidosFila {
    #items = []; // array para armazenar elementos
    #inicio = 0; // indice do primeiro elemento
    #fim = 0; // indice do ultimo elemento

    enqueue(numero, pedido) {
        this.#items[this.#fim] = { numero, pedido };
        this.#fim++;
    }

    dequeue() {
        if (this.estaVazia()) {
            return undefined;
        }

        const item = this.#items[this.#inicio]
        delete this.#items[this.#inicio]
        this.#inicio++

        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item;
    }

    estaVazia = () => this.#fim === this.#inicio;

    front() {
        if (this.estaVazia()) {
            return undefined;
        }

        return this.#items[this.#inicio];
    }

    limpar() {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }

    tamanho = () => this.#fim - this.#inicio;
}

module.exports = pedidosFila;
