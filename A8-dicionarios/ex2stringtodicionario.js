const lista = {}
const lista2 = {}

const array = ['carne', 'arroz', 'cafe', 'arroz', 'feijao']
console.log(array)

array.forEach(item => {
    if(lista[item] === undefined) {
        lista[item] = 1;
    } else {
        lista[item] += 1;
    }
    // encurtado fica assim:
    // lista[item] = (lista[item] || 0) + 1;
});

array.forEach(item => {
    lista2[item] = (lista2[item] || 0) + 1;
})

console.table(lista)
console.table(lista2)

// ! explicacao do " || "
// || - ou logico do js

console.log(   0    ||   10   )
//           valor1 || valor2
// Se VALOR1 for TRUE use ele, se nao use VALOR2

// valores nao true: 0, undefined, null, false, ""

console.log(0 || 10)
console.log("" || 10)
console.log(false || 10)
console.log(undefined || 10)
console.log(null || 10)

