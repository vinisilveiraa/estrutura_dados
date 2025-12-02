class Grafo_peso {
    constructor() {
        this.adjacencia = {};
    }

    adicionarVertice(vertice) {
        if (!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }

    // agora recebe peso
    adicionarAresta(v1, v2, peso = 1) {
        this.adicionarVertice(v1);
        this.adicionarVertice(v2);

        this.adjacencia[v1].push({ destino: v2, peso });
        this.adjacencia[v2].push({ destino: v1, peso });
    }

    imprimirGrafo() {
        for (let v in this.adjacencia) {
            const lista = this.adjacencia[v]
                .map(a => `${a.destino} (peso ${a.peso})`)
                .join(", ");
            console.log(`${v} -> ${lista}`);
        }
    }

    // BFS para grafos ponderados (só ignora os pesos)
    bfs(inicio) {
        const visitado = new Set();
        const fila = [inicio];
        visitado.add(inicio);

        const ordem = [];

        while (fila.length) {
            const atual = fila.shift();
            ordem.push(atual);

            for (let { destino } of this.adjacencia[atual]) {
                if (!visitado.has(destino)) {
                    visitado.add(destino);
                    fila.push(destino);
                }
            }
        }

        console.log("BFS:", ordem.join(" -> "));
        return ordem;
    }

    // MENOR CAMINHO em grafo ponderado -> algoritmo de DIJKSTRA
    menorCaminho(inicio, fim) {
        const dist = {};
        const anterior = {};
        const visitado = new Set();

        // inicializa
        for (let v in this.adjacencia) {
            dist[v] = Infinity;
            anterior[v] = null;
        }
        dist[inicio] = 0;

        while (true) {
            // pega o vértice não visitado com menor distância
            let atual = null;

            for (let v in dist) {
                if (!visitado.has(v)) {
                    if (atual === null || dist[v] < dist[atual]) {
                        atual = v;
                    }
                }
            }

            if (atual === null) break;
            visitado.add(atual);

            // relaxamento das arestas
            for (let { destino, peso } of this.adjacencia[atual]) {
                let novaDist = dist[atual] + peso;

                if (novaDist < dist[destino]) {
                    dist[destino] = novaDist;
                    anterior[destino] = atual;
                }
            }
        }

        // reconstrói o caminho
        const caminho = [];
        let atual = fim;

        while (atual) {
            caminho.push(atual);
            atual = anterior[atual];
        }

        return {
            distancia: dist[fim],
            caminho: caminho.reverse()
        };
    }
}

module.exports = Grafo_peso;
