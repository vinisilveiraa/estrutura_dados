const Buscas = require('./A15-Busca-Ordenacao/Busca.js');
const Sorters = require('./A15-Busca-Ordenacao/Sorters.js');

const tamanho_vetor = 10000;

const vetor_aleatorio = Array.from({ length: tamanho_vetor }, () => Math.floor(Math.random() * tamanho_vetor));
// console.log(vetor_aleatorio)

const vetor_ordenado = Sorters.quickSort(vetor_aleatorio);
// console.log(vetor_ordenado)

console.time('QUICKSORT - vetor nao ordenado');
Sorters.quickSort(vetor_aleatorio);
console.timeEnd('QUICKSORT - vetor nao ordenado');


console.time('QUICKSORT - vetor ordenado');
Sorters.quickSort(vetor_ordenado);
console.timeEnd('QUICKSORT - vetor ordenado');

console.log('');
console.log('No vetor nao ordenado o pivot trabalha melhor pois a partir do PIVOT sao criados dois arrays que trabalham simultaneamente ordenando os elementos maiores direita e menores a esquerda');
console.log('Quando partimos de um vetor ja ordenado, o PIVOT, que é pego do fim do array, acaba percorrendo novemente o array inteiro');

console.log('QUICKsort comumente = O(n log n)');
console.log('QUICKsort pior dos casos = O(n)');