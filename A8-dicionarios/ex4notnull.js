const produtos = {
    101: { nome: "Arroz", preco: 5.5 },
    102: null,
    103: { nome: "Macarrão", preco: 4.0 },
    104: undefined,
    105: { nome: "Açúcar", preco: null },
    106: { nome: "Café", preco: undefined },
    107: { nome: null, preco: 3.0 }
};

function removerNulos(produtos) {
    for (let codigo in produtos) {
        let produto = produtos[codigo]

        // checa por codigos undefined
        if (produto == null) {
            console.log('Erro no produto:', codigo, ' - elementos faltando!')
            delete produtos[codigo]
            continue
        }

        // checa por itens undefined
        for (let item in produtos[codigo]) {
            if (produto[item] == null) {
                console.log('Erro no produto:', codigo, '- nome/preco faltando!')
                delete produtos[codigo]
            }
        }
    }
}   

console.log('Antes:', produtos)
console.log('')

removerNulos(produtos)

console.log('')
console.log('Depois:', produtos)