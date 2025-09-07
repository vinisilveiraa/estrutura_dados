const funcionario = require('./funcionarios.js')

const funcionarios = new funcionario()

funcionarios.adicionar('João')
funcionarios.adicionar('Maria')
funcionarios.adicionar('Ana')
funcionarios.adicionar('Pedro')
funcionarios.listar()

console.log(funcionarios.obterElemento(2)) // Ana

funcionarios.remover()
funcionarios.listar()

funcionarios.limpar()
funcionarios.listar()