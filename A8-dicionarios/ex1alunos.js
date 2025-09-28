const alunoInfo = {

}

alunoInfo[1] = 'joaozinho'
console.log(alunoInfo)

function addAluno(id, nome) {
    return alunoInfo[id] = nome;
}

addAluno(2, 'pedrinho')
addAluno(3, 'aninha')

console.log(alunoInfo)

Object.keys(alunoInfo).forEach(matricula =>{
    console.log('Matricula:', matricula, '//  Nome:', alunoInfo[matricula]);
})

// object keys transforma as chaves dos objetos em um array de strings
// foreach percorre esse array item por item