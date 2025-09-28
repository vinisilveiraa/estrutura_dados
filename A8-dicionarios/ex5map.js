function contaPalavras(frase) {
    const mapa = new Map([])
    const palavras = frase.split(" ") // separa por espacos

    palavras.forEach(palavra => {
        const p = palavra.replace(/[.,!?]/g, "").toLowerCase();
        // replace(/[.,!?]/g, "") remove pontuacoes etc replacando ela com "" vazio
        // tolowercase deixa tudo minusculo

        if (mapa.has(p)) {
            // se o mapa ja tiver a palavra
            mapa.set(p, mapa.get(p) + 1);
            // mapa incrementa
            // set(p, mapa.get(p) + 1)
            // set(valor, novovalor)

            // mapa.get(p) pega o numero de vezes que a palavra apareceu
            // ou seja, novovalor vai ser o total+1, atualizando p
        } else {
            mapa.set(p, 1)
            // define como 1 
            // set(valor, novovalor)
        }
    })
    return mapa
}

const fraseLegal = 'tres pratos de trigo para tres tigres tristes, tigres gostam de trigo em pratos finos'

console.log(contaPalavras(fraseLegal))

// 