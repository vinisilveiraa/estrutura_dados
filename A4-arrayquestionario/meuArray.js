class meuArray {
    constructor() {
        this.array = [];
        this.i = 0;
    }

    adicionar(elemento) {
        this.array[this.i] = elemento;
        this.i++;
    }

    remover() {
        if (this.i === 0) {
            return undefined;
        }

        const ultimoElemento = this.array[this.i - 1];
        delete this.array[this.i - 1];
        this.i--;

        return ultimoElemento;
    }

    tamanho() {
        console.table(this.array);
    }

    tamanhoFinal() {
        console.log(this.i);
    }

    mostrar(indice) {
        if (indice < 0 || indice >= this.i) {
            return undefined;
        }

        console.log(this.array[1]);
    }
}

module.exports = meuArray;