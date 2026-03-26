class Sorter {
    /*
     * Bubble Sort
     */
    static bubbleSort(arr) {
        const array = [...arr]; // copia para não alterar o original
        let n = array.length; // tamanho do array
        let trocou;

        // repeticao dentro do outro = +custo de processamento
        do {
            trocou = false;
            for (let i = 0; i < n - 1; i++) {
                if (array[i] > array[i + 1]) {
                    [array[i], array[i + 1]] = [array[i + 1], array[i]]; // troca os elementos
                    trocou = true;
                }
            }
            n--;
        } while (trocou); // enquanto trocou for falsa, repete

        return array;
    }


    /*
     * Quick Sort
     */
    static quickSort(arr) {
        if (arr.length <= 1) return arr; // se for menor ou igual a um, nao tem oq ordernar

        const pivot = arr[arr.length - 1]; // ultimo elemento
        const menores = [];
        const maiores = [];

        // so uma est de repeticao
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                // se for menor que o pivot adiciona no array de menores
                menores.push(arr[i]);
            } else {
                // se nao, adiciona no array de maiores
                maiores.push(arr[i]);
            }
        }

        // metodo recursivo (se chama)
        return [...Sorter.quickSort(menores), pivot, ...Sorter.quickSort(maiores)];
        // retorna o mesmo metodo, fazendo o mesmo processo para os outros arrays que agora estao inseridos em um array so

        // usa o primeiro if para retornar caso o array estiver correto
        // ! gif nao pega o pivot como ultimo elemento
    }


    /*
 * Merge Sort
 */
    static mergeSort(arr) {
        if (arr.length <= 1) return arr;

        const meio = Math.floor(arr.length / 2); // corta no meio (arrendonda pra baixo)
        // recursiva
        const esquerda = Sorter.mergeSort(arr.slice(0, meio));
        const direita = Sorter.mergeSort(arr.slice(meio));

        return Sorter.merge(esquerda, direita);
    }

    static merge(esquerda, direita) {
        const resultado = [];
        let i = 0, j = 0;

        // apenas o while
        // se tamanho da esequerda for menor que 0 e se j for menor que tamanho da direita
        while (i < esquerda.length && j < direita.length) {
            // se tamanho esquerda menor que tamanho direita
            if (esquerda[i] < direita[j]) {
                // vetor esquerda cresce
                resultado.push(esquerda[i++]);
            } else {
                // senao, vetor direita cresce
                resultado.push(direita[j++]);
            }
        }

        return resultado
            .concat(esquerda.slice(i))
            .concat(direita.slice(j));
    }
}

module.exports = Sorter;


// mal sinais de um sort nao eficiente / demorado
// 1. loop dentro do outro
// 2. metodo recursivo (se auto chama)
