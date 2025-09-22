class mercadoFila {
    #fila1 = [];
    #inicio1 = 0;
    #fim1 = 0;

    #fila2 = [];
    #inicio2 = 0;
    #fim2 = 0;

    enqueue(cliente, produtos) {
        const tamanho2 = this.#fim2 - this.#inicio2;
        const tamanho1 = this.#fim1 - this.#inicio1;

        if (tamanho1 <= tamanho2) {
            // se a fila 1 for menor ou igual a fila 2 adiciona aqui
            this.#fila1[this.#fim1] = { cliente, produtos };
            this.#fim1++;
            console.log(`${cliente} entrou na fila 1.`);

        } else {
            this.#fila2[this.#fim2] = { cliente, produtos };
            this.#fim2++;
            console.log(`${cliente} entrou na fila 2.`);
            console.log('')
        }
    }

    dequeue1() {
        if (this.estaVazia1()) {
            return undefined;
        }

        const item = this.#fila1[this.#inicio1]
        delete this.#fila1[this.#inicio1]
        this.#inicio1++

        if (this.#inicio1 === this.#fim1) {
            this.#inicio1 = 0;
            this.#fim1 = 0;
        }

        return item;
    }

    dequeue2() {
        if (this.estaVazia2()) {
            return undefined;
        }

        const item = this.#fila2[this.#inicio2]
        delete this.#fila2[this.#inicio2]
        this.#inicio2++

        if (this.#inicio2 === this.#fim2) {
            this.#inicio2 = 0;
            this.#fim2 = 0;
        }

        return item;
    }

    estaVazia1 = () => this.#fim1 === this.#inicio1;
    estaVazia2 = () => this.#fim2 === this.#inicio2;


    tamanhototal() {
        const tamanho2 = this.#fim2 - this.#inicio2;
        const tamanho1 = this.#fim1 - this.#inicio1;

        return tamanho1 + tamanho2;
    }

    front1() {
        if (this.estaVazia()) {
            return undefined;
        }

        return this.#fila1[this.#inicio1];
    }
    front2() {
        if (this.estaVazia()) {
            return undefined;
        }

        return this.#fila2[this.#inicio2];
    }

    limpar() {
        this.#fila1 = [];
        this.#inicio1 = 0;
        this.#fim1 = 0;

        this.#fila2 = [];
        this.#inicio2 = 0;
        this.#fim2 = 0;

    }

}

module.exports = mercadoFila;
