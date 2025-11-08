
class MeuArray {
  // Usamos uma lista para armazenar os itens do array
  #itens = []

  // Mantemos o controle do tamanho do array
  #tamanho = 0
  
  // Adiciona um elemento no final do array
  adicionar(elemento) {
    // Insere o elemento na posição atual do tamanho
    this.#itens[this.#tamanho] = elemento

    // Incrementa o tamanho
    this.#tamanho++
  }

  // Remove o último elemento do array
  remover() {
    // Se o array estiver vazio, não há o que remover
    if (this.#tamanho === 0) {
      return undefined
    }
    
    // Armazena o último item
    const ultimoItem = this.#itens[this.#tamanho - 1]

    // Remove o último item do array
    delete this.#itens[this.#tamanho - 1]

    // Decrementa o tamanho
    this.#tamanho--

    return ultimoItem // Retorna o item removido
  }

  // Acessa o elemento em um índice específico
  obterElemento(indice) {
    if (indice < 0 || indice >= this.#tamanho) {
      // Se o índice estiver fora do alcance retorna undefined
      return undefined
    }

    // Retorna o item no índice solicitado
    return this.#itens[indice]
  }

  // Mostra os itens do array em um console.table()
  mostrarItens() {
    console.table(this.#itens)
  }

  // Retorna o tamanho do array
  tamanhoArray() {
    // Retorna o valor do tamanho atual do array
    return this.#tamanho
  }

  // Remove todos os elementos do array
  limpar() {
    // Limpa o objeto
    this.#itens = []

    // Reinicializa o tamanho
    this.#tamanho = 0
  }

  // Edita o elemento em um índice específico
  editar(indice, novoValor) {
    if (indice < 0 || indice >= this.#tamanho) {
      // Se o índice estiver fora do alcance retorna undefined
      return undefined
    }
    
    // Armazena o item editado
    const itemEditado = this.#itens[indice]

    // Atribui o novo valor
    this.#itens[indice] = novoValor

    return itemEditado // Retorna o item editado
  }

  obterIndice(elemento) {
    // Percorre o array
    for (let i = 0; i <= this.#tamanho; i++) {
      // Verifica se o item é igual ao parâmetro
      if (this.#itens[i] === elemento) {
        return i
      }
    }
  }
}

module.exports = MeuArray