class impressaoFila {
    #items = []; // array para armazenar elementos
    #inicio = 0; // indice do primeiro elemento
    #fim = 0; // indice do ultimo elemento

    enqueue(documento, pagina) {
        if (this.tamanho() >= 5) {
            console.log('Fila cheia, aguarde...');
            return;
        }
        this.#items[this.#fim] = {documento, pagina}; 
        // cada elemento e um documento com suas paginas 
        
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

module.exports = impressaoFila;
