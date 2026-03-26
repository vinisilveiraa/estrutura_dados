class Pilha {
    #items = [];
    #tamanho = 0;
    #meuArray = [];
    #tamanhoB = 0;

    
    // MEU ARRAY
    adicionar(nome, comando) {
        this.#meuArray[this.#tamanhoB] = { nome, comando };
        this.#tamanhoB++
        
        return this.#meuArray[this.#tamanhoB] = { nome, comando };
    }
    // MEU ARRAY
    remover() {
        if (this.#tamanhoB === 0) {
            return undefined;
        }
        
        const ultimo = this.#meuArray[this.#tamanhoB - 1];
        delete this.#meuArray[this.#tamanhoB - 1];
        this.#tamanhoB--;

       console.log("O atalho removido foi " + ultimo["nome"] + " (" + ultimo["comando"] + ")")
    }
    
    // MEU ARRAY
    verItems() {
        for (let i = 0; i < this.#tamanhoB; i++) {
            console.log(this.#meuArray[i])
        }
    }

    restantes() {
        return this.#tamanhoB
    }
    
    
    guardarItem(elemento) {
        this.#items[this.#tamanho] = elemento;
        this.#tamanho++;
    }
    
    retirarItem() {
        if (this.#tamanho === 0) {
            return undefined;
        }
        
        const ultimo = this.#items[this.#tamanho - 1];
        delete this.#items[this.#tamanho - 1];
        this.#tamanho--;
        return ultimo;
    }
    
    olharItem() {
        return (this.#items[this.#tamanho - 1])
    }
    
    estaVazio = () => this.#tamanho === 0;
    
}

module.exports = Pilha;