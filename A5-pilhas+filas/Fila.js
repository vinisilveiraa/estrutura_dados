
class Fila {
  // Usamos uma lista para armazenar os itens
  #itens = [];

  // Representa o índice do início da fila
  #inicio = 0;

  // Representa o índice do fim da fila
  #fim = 0;

  // Adiciona um elemento ao final da fila (enqueue)
  enqueue(elemento) {
    // Coloca o elemento no fim da fila
    this.#itens[this.#fim] = elemento;

    // Incrementa o índice do fim da fila
    this.#fim++;

    // console.table(this.#itens);
  }

  // Remove e retorna o primeiro elemento da fila (dequeue)
  dequeue() {
    // Se a fila estiver vazia, retorna undefined
    if (this.estaVazia()) {
      return undefined;
    }

    // Obtém o primeiro elemento
    const item = this.#itens[this.#inicio];

    // Remove o item do início da fila
    delete this.#itens[this.#inicio];

    // Move o índice do início para o próximo item
    this.#inicio++;

    console.table(this.#itens);
    return item; // Retorna o item removido
  }

  // Retorna o primeiro elemento da fila sem removê-lo (peek)
  front() {
    // Se a fila estiver vazia, retorna undefined
    if (this.estaVazia()) {
      return undefined;
    }

    // Retorna o primeiro elemento
    return this.#itens[this.#inicio];
  }

  // Limpa a fila
  limpar() {
    this.#itens = [];
    this.#inicio = 0;
    this.#fim = 0;
  }

  // Verifica se a fila está vazia
  // Verifica se os índices estão iguais com arrow function
  estaVazia = () => this.#fim === this.#inicio;

  // Retorna o tamanho da fila
  // Calcula a diferença entre fim e início
  tamanho = () => this.#fim - this.#inicio;
}

module.exports = Fila;