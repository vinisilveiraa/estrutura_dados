const produtos = {
    1: {
        nome: 'produto1',
        preco: 59.99
    }
}

function addProduto(id, nome, preco) {
    produtos[id] = {
        nome: nome,
        preco: preco
    }
}

addProduto(2, 'produto2', 49.99)
addProduto(3, 'produto3', 82.49)

// Object.keys(produtos).forEach(codigo => {
//     console.log(
//         '===============', "\n",
//         'Codigo:', codigo, "\n",
//         'Nome:', produtos[codigo].nome, "\n",
//         'Preço:', produtos[codigo].preco
//     )
// });

console.log('')

console.log('Produtos acima de 50 reais: ')
Object.keys(produtos).forEach(codigo => {
    if (produtos[codigo].preco >= 50) {
        console.log(
            'Codigo:', codigo, "\n",
            'Nome:', produtos[codigo].nome, "\n",
            'Preço:', produtos[codigo].preco)
    }
})