class GrafoPonderado {

    // METODO CONSTRUTOR
    constructor() {
        // conjunto de vertices unico
        this.vertices = new Set();

        // mapa onde cada vertice aponta para uma lista de objetos: {vertice, peso}
        this.adjacencia = new Map();
    }


    // ADICIONAR VERTICE
    // adiciona um novo vertice ao grafo. Se ja existir nada é feito
    // tambem inicializar sua lista de adjacencia
    adicionarVertice(v) {
        // garante que o vertice esta no conjunto
        this.vertices.add(v);
        if (!this.adjacencia.has(v)) {
            // inicializa a lista de vizinhos se ainda não existir
            this.adjacencia.set(v, []);
        }
    }

    // ADICIONAR ARESTA
    // adiciona uma aresta ponderada entre dois vertices
    // cria os vertices caso ainda não existam. Por padrao,
    // é um grafo direcionado
    adicionarAresta(origem, destino, peso) {
        if (!this.adjacencia.has(origem)) {
            this.adicionarVertice(origem);
        }
        if (!this.adjacencia.has(destino)) {
            this.adicionarVertice(destino);
        }

        this.adjacencia.get(origem).push({ vertice: destino, peso });

        // se o grafo for não direcionado, descomente a linha abaixo:
        // this.adjacencia.get(destino).push({vertice: origem, peso});
    }

    // IMPRIMIR GRAFO visualização
    // mostra a representação do grafo como lista de adjacencia
    imprimirGrafo() {
        for (const [v, vizinhos] of this.adjacencia.entries()) {
            const lista = vizinhos.map(obj => `${obj.vertice}(${obj.peso})`).join(", ");
            console.log(`${v} -> ${lista}`)
        }
    }

    // IMPLEMENTAÇÃO DA MATRIZ DE ADJACENCIA
    // gera e imprimi a matriz de adjacencia do grafo
    // Usa infinty para representar ausencia de aresta
    imprimirMatrizAdjacencia() {
        const vertices = Array.from(this.vertices);
        const n = vertices.length;
        const matriz = Array.from({ length: n }, () => Array(n).fill(Infinity));

        vertices.forEach((v, i) => {
            matriz[i][i] = 0; // distancia para si mesmo = 0
            for (const vizinho of this.adjacencia.get(v)) {
                const j = vertices.indexOf(vizinho.vertice);
                matriz[i][j] = vizinho.peso;
            }
        });

        console.log('Matriz de adjacencia (valores = representam ausencia de aresta):');
        console.log(' ', vertices.join(' '));
        matriz.forEach((linha, i) => {
            console.log(vertices[i], linha.map(x => x === Infinity ? '°°' : x).join(' '));
        });
    }

    // BUSCA EM PROFUNDIDADE (Depth-First Search)
    // Realiza uma busca em profundidade, visitando
    // o vertice inicial e seus vizinhos recursivamente
    // ate esgotar os caminhos
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

    // BUSCA EM LARGURA (Breadth-First Search)
    // busca em largura (Breadth-first Search)
    // realiza uma busca em largura explorando
    // primeiro os vizinhos mais proximos, usando uma fila
    bfs(inicio){
        const visitados = new Set();
        const fila = [inicio];
        const resultado = [];

        visitados.add(inicio);

        while (fila.length > 0){
            const atual = fila.shift();
            resultado.push(atual);

            for (const vizinho of this.adjacencia.get(atual)){
                if(!visitados.has(vizinho.vertice)){
                    visitados.add(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        }

        console.log('BFS:', resultado.join(' -> '));
    }

    // IMPLEMENTAÇÃO DO ALGORITIMO DE DUKSTRA
    // Algoritimo de dukstra para encontrar o caminho mais curto
    // calcula as menores distancias entre o vertice inicial
    // e todos os demais, com base nos pesos das arestas
    // usa a abordagem classica de dukstra
    dijkstra(inicio){
        const distancias = [];
        const anteriores = [];
        const naoVisitados = new Set(this.vertices);

        for(const v of this.vertices){
            distancias[v] = Infinity;
            anteriores[v] = null;
        }
        distancias[inicio] = 0;

        while(naoVisitados.size > 0){
            // encontra o vertice não visitado com a menor distancia conhecida
            const atual = [...naoVisitados].reduce((a, b) => distancias[a] < distancias[b] ? a : b  
            );
            naoVisitados.delete(atual);

            // atualiza distancia para visitados
            for(const vizinho of this.adjacencia.get(atual)){
                const alt = distancias[atual] + vizinho.peso;
                if(alt < distancias[vizinho.vertice]){
                    distancias[vizinho.vertice] = alt;
                    anteriores[vizinho.vertice] = atual;
                }
            }
        }
        // IMPLEMENTAÇÃO DO ALGORITIMO DE DIJKSTRA FINAL
    
        // exibe o resultado
        console.log(`Menores distancias a partir de ${inicio}`);
    
        for(const v of this.vertices){
            console.log(`${v}: ${distancias[v]}`);
        }
    }
}

// Exporta a classe para uso em outros modulos
module.exports = GrafoPonderado;
