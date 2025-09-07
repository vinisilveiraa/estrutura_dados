class tarefa {
    #tarefa = [] // define um array privado
    #i = 0 // define um contador privado

    adicionar(tarefa) {
        this.#tarefa[this.#i] = tarefa // adiciona a tarefa no array
        this.#i++ // incrementa o contador

        // this - instancia atual da classe
        // # - indica que a propriedade é privada
        // tarefa - nome do array privado
        // [this.#i] - posição do array onde a tarefa será adicionada
        // = tarefa - valor da tarefa que será adicionada
    }

    remover() {
        if (this.#i === 0) {
            return undefined // se não houver tarefas, retorna undefined 
        }

        const ultimaTarefa = this.#tarefa[this.#i - 1] // pega a última tarefa
        delete this.#tarefa[this.#i - 1] // remove a última tarefa

        this.#i-- // decrementa o contador
        return ultimaTarefa // retorna a última tarefa removida
    }

    listar() {
        console.table(this.#tarefa) // exibe a lista de tarefas em formato de tabela
    }
}

module.exports = tarefa // exporta a classe tarefa