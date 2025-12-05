const sorter = require('../A15-Busca-Ordenacao/Sorters.js');
const buscas = require('../A15-Busca-Ordenacao/Busca.js');

// vetor de 10.000.000 numeros aleatorios originalmente, reduzido para 100.000 para testes mais rapidos
const tamanho_vetor = 100000;

// Cria um vetor com 'tamanho_vetor' elementos,
// cada um sendo um número inteiro aleatório entre 0 e tamanho_vetor-1
const vetor = Array.from({ length: tamanho_vetor }, () => Math.floor(Math.random() * tamanho_vetor));

console.log(" Tamanho do vetor: ", vetor.length);

// Gera um índice aleatório dentro do vetor (entre 0 e tamanho_vetor-1)
const posicao_aleatoria = Math.floor(Math.random() * tamanho_vetor);

console.log(" \n Posicao aleatoria sorteada: ", posicao_aleatoria);

// Pega o valor que está dentro dessa posição aleatória do vetor
let valor_procurado = vetor[posicao_aleatoria];

console.log(" \n Valor procurado: ", valor_procurado);

// Declara um vetor vazio que será futuramente usado para armazenar o vetor ordenado
let vetor_organizado = [];

console.log('');

console.log(" \n--------------- BUBBLE SORT --------------- ");
console.time("BubbleSort");
vetor_organizado = sorter.bubbleSort(vetor);
console.timeEnd("BubbleSort");

console.time("BubbleSortSequencial");
buscas.sequencial(vetor_organizado, valor_procurado);
console.timeEnd("BubbleSortSequencial");

console.time("BubbleSortBinario");
buscas.binaria(vetor_organizado, valor_procurado);
console.timeEnd("BubbleSortBinario");

console.time("BubbleSortInterpolacao");
buscas.interpolacao(vetor_organizado, valor_procurado);
console.timeEnd("BubbleSortInterpolacao");

console.log('');

console.log(" \n--------------- QUICK SORT --------------- ");
console.time("QuickSort");
vetor_organizado = sorter.quickSort(vetor);
console.timeEnd("QuickSort");

console.time("QuickSortSequencial");
buscas.sequencial(vetor_organizado, valor_procurado);
console.timeEnd("QuickSortSequencial");

console.time("QuickSortBinario");
buscas.binaria(vetor_organizado, valor_procurado);
console.timeEnd("QuickSortBinario");

console.time("QuickSortInterpolacao");
buscas.interpolacao(vetor_organizado, valor_procurado);
console.timeEnd("QuickSortInterpolacao");

console.log('');

console.log(" \n--------------- MERGE SORT --------------- ");
console.time("MergeSort");
vetor_organizado = sorter.mergeSort(vetor);
console.timeEnd("MergeSort");

console.time("MergeSortSequencial");
buscas.sequencial(vetor_organizado, valor_procurado);
console.timeEnd("MergeSortSequencial");

console.time("MergeSortBinario");
buscas.binaria(vetor_organizado, valor_procurado);
console.timeEnd("MergeSortBinario");

console.time("MergeSortInterpolacao");
buscas.interpolacao(vetor_organizado, valor_procurado);
console.timeEnd("MergeSortInterpolacao");