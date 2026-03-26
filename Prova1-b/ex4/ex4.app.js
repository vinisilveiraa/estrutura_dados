const MeuArray = {
    '01id': {
        nome: 'roberto',
        departamento: 'vendas'
    },
    '02id': {
        nome: 'joao',
        departamento: 'compras'
    },
    '03id': {
        nome: 'vania',
        departamento: 'atendimento'
    },
    '04id': {
        nome: 'julia',
        departamento: 'rh'
    },
    '05id': {
        nome: 'alex',
        departamento: 'estoque'
    }
}

function mostrarFuncionarios() {
    Object.keys(MeuArray).forEach(chave => {
        console.log(`ID: ${chave} // Nome ${MeuArray[chave].nome} // ${MeuArray[chave].departamento}`)
        console.log('')
    }
    )
}

function buscarID(id) {
    Object.keys(MeuArray).forEach(chave => {
        if (id == chave) {
            return console.log(`ID: ${chave} // Nome ${MeuArray[chave].nome} // ${MeuArray[chave].departamento}`)
        }
    })
}
// buscarID('04id');

const mapa = new Map([
    ["01id", {"nome":"roberto", "setor":"vendas"}],
    ["02id", {"nome":"joao", "setor":"compras"}],
    ["03id", {"nome":"vania", "setor":"atendimento"}],
    ["04id", {"nome":"julia", "setor":"rh"}],
    ["05id", {"nome":"alex", "setor":"estoque"}]
]);

function buscarIDmap(id) {
    if (mapa.has(id)) {
        console.log(mapa.get(id));
    }
}

buscarIDmap('01id')
