class Bau {
    #tesouro = [];
    #tamanho = 0;

    guardarTesouro(elemento) {
        this.#tesouro[this.#tamanho] = elemento;
        this.#tamanho++;
    }

    retirarTesouro() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        const ultimo = this.#tesouro[this.#tamanho - 1];
        delete this.#tesouro[this.#tamanho - 1];
        this.#tamanho--;
        return ultimo;
    }

    olharTesouro() {
        return (this.#tesouro[this.#tamanho - 1])
    }

    estaVazio = () => this.#tamanho === 0;

}

module.exports = Bau;