const fraseLegal = 'Tres Pratos De Trigo Para Tres Tigres Tristes, Tigres Gostam De Trigo Em Pratos Finos!'

function contaLetras(frase) {
    const mapa = new Map([]);
    const letra = frase.replace(/[ .,!?]/g, ""); // tudo dentro do [] e excluido
    const letras = letra.split("");

    letras.forEach(l => {
        if (mapa.has(l)) {
            mapa.set(l, mapa.get(l) + 1)
            // set subtitui (valor, valornovo)
        } else {
            mapa.set(l, 1);
        }
    });
    return mapa
}

console.log(contaLetras(fraseLegal))