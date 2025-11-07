class GrafoPonderado {
    constructor() {
        // conjunto de vertices unicos
        this.vertices = new Set();

        // mapa onde cada vertice aponta para uma lista de objetos: {vertice, peso}
        this.adjacencia = new Map();
    }

    // adiciona um novo vertice ao grafo. se ja existir, nada e feito.
    // tambem inicializa sua lista de adjacencia.
    adicionarVertice(v) {
        // garante que o vertice esta no conjunto
        this.vertices.add(v);
        if (!this.adjacencia.has(v)) {

            // inicializa lista de vizinhos se ainda nao existir
            this.adjacencia.set(v, [])
        }
    }

    // adiciona uma aersta ponderada entre dois vertices.
    // cria os vertices caso ainda nao existam.
    // por padrao, e um grafo direcionado

    adicionarAresta(origem, destino, peso) {
        if (!this.adjacencia.has(origem)) this.adicionarVertice(origem);
        if (!this.adjacencia.has(destino)) this.adicionarVertice(destino);

        this.adjacencia.get(origem).push({ vertice: destino, peso })

        // se o grafo for nao-direcionado, descomente a linha abaixo:
        // grafos direcionados cria a aresta no sentido oposto (destino → origem).

        // this.adjacencia.get(destino).push({ vertice: origem, peso })
    }

    imprimirGrafo() {
        for (const [v, vizinhos] of this.adjacencia.entries()) {
            const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(', ');
            console.log(`${v} -> ${lista}`)
        }
    }

    // gera e imprime a matriz de adjacencia do grafo
    // usa infinity para representar ausencia de aresta
    imprimirMatrizAdjacencia() {
        const vertices = Array.from(this.vertices);
        const n = vertices.length;
        const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

        vertices.forEach((v, i) => {
            matriz[i][i] = 0; // distancia para si mesmo = 0

            for (const vizinho of this.adjacencia.get(v)) {
                const j = vertices.indexOf(vizinho.vertice);
                matriz[i][j] = vizinho.peso
            }
        });

        console.log('Matriz de Adjacencia (valores INFINITOS(∞) representam ausencia de aresta):')
        console.log(' ', vertices.join(' '));
        matriz.forEach((linha, i) => {
            console.log(vertices[i], linha.map(x => x === Infinity ? '∞' : x).join(' '))
        })
    }

    // Busca em Profundidade (Depth-First Search)
    // Realiza uma busca em profundidade, visitando
    // o vértice inicial e seus vizinhos recursivamente
    // até esgotar os caminhos.
    dfs(inicio) {
        const visitados = new Set();
        const resultado = [];

        const visitar = (v) => {
            visitados.add(v);
            resultado.push(v);

            for (const vizinho of this.adjacencia.get(v)) {
                if (!visitados.has(vizinho.vertice)) {
                    visitar(vizinho.vertice);
                }
            }
        };

        visitar(inicio);
        console.log('DFS:', resultado.join(' -> '));
    }

    // Busca em Largura (Breadth-First Search)
    // Realiza uma busca em largura, explorando
    // primeiro os vizinhos mais próximos, usando uma fila.
    bfs(inicio) {
        const visitados = new Set();
        const fila = [inicio];
        const resultado = [];

        visitados.add(inicio);

        while (fila.length > 0) {
            const atual = fila.shift();
            resultado.push(atual);

            for (const vizinho of this.adjacencia.get(atual)) {
                if (!visitados.has(vizinho.vertice)) {
                    visitados.add(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        }

        console.log('BFS:', resultado.join(' -> '));
    }

    dijkstra(inicio) {
        // algoritmo de  dijkstra para encontrar o caminho mais curto
        // calcula as menores distancias entre o vertice inicial e todos os demais, com base no peso das arestas
        // usa a abordagem classica de dijkstra
        const distancias = {};
        const anteriores = {};
        const naoVisitados = new Set(this.vertices);

        for (const v of this.vertices) {
            distancias[v] = Infinity;
            anteriores[v] = null;
        }
        distancias[inicio] = 0;

        while (naoVisitados.size > 0) {
            // encontra o vertice nao visitado com a menor distancia conhecida 
            const atual = [...naoVisitados].reduce((a, b) =>
                distancias[a] < distancias[b] ? a : b
            );
            naoVisitados.delete(atual);

            // atualiza distancias para vizinhos
            for (const vizinho of this.adjacencia.get(atual)) {
                const alt = distancias[atual] + vizinho.peso;
                if (alt < distancias[vizinho.vertice]) {
                    distancias[vizinho.vertice] = alt;
                    anteriores[vizinho.vertice] = atual;
                }
            }
        }

        console.log(`Menores distancias a partir de ${inicio}:`);
        for (const v of this.vertices) {
            console.log(`${v}: ${distancias[v]}`)
        }
    } // fecha dijkstra
}// fecha grafop

module.exports = GrafoPonderado;