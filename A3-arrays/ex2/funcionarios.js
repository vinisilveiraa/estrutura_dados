class Funcionarios {

    constructor() {
        this.funcionarios = []
        this.i = 0

        // i - contador, define a posição do array onde o próximo funcionário será adicionado
        // this.i - 1 - posição do array onde o último funcionário está, pega o tamanho do array e subtrai 1 
    }

    adicionar(funcionario) {
        this.funcionarios[this.i] = funcionario
        this.i++ 
    }

    remover() {
        if (this.i === 0) {
            return undefined
        }
        
        const ultimoFuncionario = this.funcionarios[this.i - 1]

        delete this.funcionarios[this.i - 1]
        this.i--
        
        return ultimoFuncionario
    }

    obterElemento(indice) {
        if (indice < 0 || indice >= this.i) {
            return undefined
        }
        return this.funcionarios[indice]
    } // retorna o funcionário no índice especificado

    limpar() {
        this.funcionarios = []
        this.i = 0
    } // reseta o array e o contador

    listar() {
        console.table(this.funcionarios)
    }
}

module.exports = Funcionarios