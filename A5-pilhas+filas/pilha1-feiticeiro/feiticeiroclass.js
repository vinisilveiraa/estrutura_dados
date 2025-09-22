class Organizador {
    #feitico = [];
    #tamanho = 0;

    // ! UMA FILA E BASEADA EM *LILO* (last in - last out)
    // entra: A -> B -> C
    // sai: C -> B -> A (invertido)
    // * pense em uma pilha de pratos, vc so consegue pegar o prato de baixo antes de pegar todos os outros em cima

    addFeitico(feitico) {
        this.#feitico[this.#tamanho] = feitico;
        // this: refere-se à instância atual da classe
        // #feitico: é um array privado (#)
        // [this.#tamanho]: acessa a posição #tamanho dentro do array #feitico
        // = feitico: atribui o valor da variável feitico à posição indicada no array
        this.#tamanho++;
    }

    removeFeitico() {
        if (this.#tamanho === 0) {
            return undefined;
        }
        //guarda o item do topo
        const ultimoFeitico = this.#feitico[this.#tamanho - 1]

        // remove ele
        delete this.#feitico[this.#tamanho - 1];
        // diminui o tamanho
        this.#tamanho--;

        // retorna o item removido
        return ultimoFeitico;
    }

    showFeiticoTopo() {

        if (this.#tamanho === 0) {
            console.log("A pilha de feiticos esta vazia!");
        } else {   
            console.log("O feitico no topo e: ", this.#feitico[this.#tamanho - 1]);
        }
    }
}

module.exports = Organizador;