const object = {
    chave1: 'item1',
    chave2: 'item2'
}

function object_map(objeto) {
    const mapa = new Map();
    Object.keys(objeto).forEach(chave => {
        mapa.set(chave, objeto[chave]); 
    });
    return mapa;
}

const mapa = new Map([
    ["chave1", "item1"],
    ["chave2", "item2"]
])

function map_object(map) {
    const object = {}
    
    for (const [chave, valor] of map) {
        object[chave] = valor
    }
    return object
}
console.log(object)
console.log(object_map(object));

console.log("")

console.log(mapa)
console.log(map_object(mapa))