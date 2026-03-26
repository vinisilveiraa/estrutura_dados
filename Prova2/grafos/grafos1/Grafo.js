class Grafo {
    constructor() {
        // Estrutura para armazenar os vertices e suas conexões
        this.adjacencia = [];
    }

    // adiciona um novo vertice ao grafo
    adicionarVertice(vertice) {
        if (!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }

    // adiciona uma aresta entre dois vertices(não dirigido)
    adicionarAresta(vertice1, vertice2) {
        if (!this.adjacencia[vertice1]) {
            this.adicionarVertice(vertice1);
        }
        if (!this.adjacencia[vertice2]) {
            this.adicionarVertice(vertice2)
        }
        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    // remove uma aresta entre dois vertices
    removerAresta(vertice1, vertice2) {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);

        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
    }

    // remove um vertice e suas conexões
    removerVertice(vertice) {
        while (this.adjacencia[vertice]?.length) {
            const adjacente = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacente);
        }
        delete this.adjacencia[vertice];
    }

    // exibe o grafo
    imprimirGrafo() {
        for (let vertice in this.adjacencia) {
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(", ")}`);
        }
    }

    bfs(inicio) {
        const visitado = new Set();
        const fila = [inicio];
        visitado.add(inicio);

        const ordem = [];

        while (fila.length) {
            const atual = fila.shift();
            ordem.push(atual);

            for (let destino in this.adjacencia[atual]) {
                if (!visitado.has(destino)) {
                    visitado.add(destino);
                    fila.push(destino);
                }
            }
        }

        console.log("BFS:", ordem.join(" -> "));
        return ordem;
    }

}// fecha a classe grafo

module.exports = Grafo;