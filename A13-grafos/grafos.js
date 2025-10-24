class Grafo {
    constructor() {
        // estrutura para armazenar os vertices e suas conexoes
        this.adjacencia = {};

        // placamae.adj = [processador, gpu, ram]
        // array conta quem esta conectado a aquele vertice
        // cada vertice tem seu array de conexoes
    }

    // adiciona um novo vertice ao grafo
    adicionarVertice(vertice) {
        if (!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }
    
    // adiciona uma aresta entre dois vertices (não dirigido)
    adicionarAresta(vertice1, vertice2) {
        // se os vertices nao existem, sao adicionados ao grafo
        if (!this.adjacencia[vertice1]) {
            this.adicionarVertice(vertice1);
        }
        if (!this.adjacencia[vertice2]) {
            this.adicionarVertice(vertice2);
        }

        // adiciona vertice 2 a lista de adjacencia de vertice1
        // adiciona vertice 1 a lista de adjacencia de vertice2
        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }
    
    // remove uma aresta entre dois vertices
    removerAresta(vertice1, vertice2) {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2)
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1)
    }
    
    // remove uma vertice e suas conexoes
    removerVertice(vertice) {
        // ? - NullSafeOperator 
        // ?.lenght = se tiver lenght retorna true, se nao retorna falso
        while (this.adjacencia[vertice]?.length) {
            // pop remove do array
            const adjacencia = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacencia);
        }
        // deleta da memoria
        delete this.adjacencia[vertice];
    }

    // exibe o grafo
    imprimirGrafo() {
        for (let vertice in this.adjacencia) {
            console.log(`${vertice} ->: ${this.adjacencia[vertice].join(', ')}`)
            // join separa os array
        }
    }
} 

module.exports = Grafo;