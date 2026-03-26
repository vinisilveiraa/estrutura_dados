const Sorter = require('./A15-Busca-Ordenacao/Sorters.js');
const Busca = require('./A15-Busca-Ordenacao/Busca.js');

const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log("Busca Sequencial: ", Busca.sequencial(array, 23));
console.log("Busca Binaria: ", Busca.binaria(array, 23));

console.log('')
console.log('Considerando que a busca binaria O(log n) corta na metade o array varias vezes, ela tem o dobro de eficiencia comparada a busca sequencial O(n)');