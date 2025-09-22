class fila {
    #items = []; // array para armazenar elementos
    #inicio = 0; // indice do primeiro elemento
    #fim = 0; // indice do ultimo elemento
    
    // ! UMA FILA E BASEADA EM *FIFO* (first in - first out)
    // entra: A -> B -> C
    // sai: A -> B -> C

    enqueue(elemento) {
        this.#items[this.#fim] = elemento;
        // guarda o elemento na posicao #fim dentro da lista #item
        
        this.#fim++;
    }
    
    dequeue() {
        if (this.estaVazia()) {
            return undefined;
        }
        
        const item = this.#items[this.#inicio]
        // guarda o deletado pra exibir depois
        
        delete this.#items[this.#inicio] // apaga o 1 numero 
        this.#inicio++ // ! incrementa, 
        
        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
            // se forem iguais vai resetar a fila
        }
        
        return item;
        // exibe o item deletado
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
    
    // ? PQ NAO USAR APENAS O this.#fim ?
    // nao se assume que a fila vai comecar do 0, 
    // toda vez que o primeiro e atendido (como em uma fila normal) esse numero vai incrementar
}

module.exports = fila;