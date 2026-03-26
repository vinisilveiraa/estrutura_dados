class Buscas {
    // Busca Sequencial
    static sequencial(arr, valorProcurado) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === valorProcurado) {
                return i;
            }
        }
        return -1;
    }

    // Busca Binária (para array ORDENADO)
    static binaria(arr, valorProcurado) {
        let inicio = 0;
        let fim = arr.length - 1;

        while (inicio <= fim) {
            let meio = Math.floor((inicio + fim) / 2);

            if (arr[meio] === valorProcurado) {
                return meio;
            } else if (arr[meio] < valorProcurado) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }

        return -1;
    }

    static interpolacao(arr, valorProcurado) {
        let inicio = 0;
        let fim = arr.length - 1;

        while (
            inicio <= fim &&
            valorProcurado >= arr[inicio] &&
            valorProcurado <= arr[fim]
        ) {
            if (inicio === fim) {
                return arr[inicio] === valorProcurado ? inicio : -1;
            }

            const pos = inicio + Math.floor(
                ((valorProcurado - arr[inicio]) * (fim - inicio)) /
                ((arr[fim] - arr[inicio]))
            );

            if (arr[pos] === valorProcurado) {
                return pos;
            }

            if (arr[pos] < valorProcurado) {
                inicio = pos + 1;
            } else {
                fim = pos - 1
            }
        }

        return -1;
    }
}

module.exports = Buscas;