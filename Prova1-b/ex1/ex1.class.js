class Fila {
    #items = []; 
    #inicio = 0; 
    #fim = 0;

    enqueue(elemento) {
        this.#items[this.#fim] = elemento;
        this.#fim++;
    }

    dequeue() {
        if (this.estaVazia()) {
            return undefined;
        }
        
        const item = this.#items[this.#inicio];
        // guarda o deletado pra exibir depois
        
        delete this.#items[this.#inicio];
        this.#inicio++;
        
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

module.exports = Fila;