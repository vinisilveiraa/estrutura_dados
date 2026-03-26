const Busca = require('./A15-Busca-Ordenacao/Busca.js');
const Sorter = require('./A15-Busca-Ordenacao/Sorters.js');

let array = [64, 34, 25, 12, 22, 11, 90];

console.log('====== Resultados: ======')
console.log('BubbleSort:', Sorter.bubbleSort(array));
console.log('')
console.log('MergeSort:', Sorter.mergeSort(array));

console.log('')
console.log('Para um array com um milhao de numeros o metodo mais rapido é: MERGESORT que é considerado O(n log n)');
console.log('O BUBBLESORT fica atras, sendo O(n²) pois se trata de dois laços aninhados');