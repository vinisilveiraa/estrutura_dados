const Sorter = require('./A15-Busca-Ordenacao/Sorters.js');
const Buscas = require('./A15-Busca-Ordenacao/Busca.js');

const tamanho_vetor = 500000;

const vetor_naoUniforme = Array.from({ length: tamanho_vetor }, () => Math.floor(Math.random() * tamanho_vetor));
let vetor_Uniforme = Sorter.quickSort(vetor_naoUniforme);

console.log(" Tamanho do vetor: ", tamanho_vetor);

const posicao_final = tamanho_vetor - 2; // PERTO

console.log(" \n Posicao usada (perto do final): ", posicao_final);

console.log(" \n--------------- Busca Binaria --------------- ");

console.time("BuscaBinaria: Uniforme");
Buscas.binaria(vetor_Uniforme, vetor_Uniforme[posicao_final]);
console.timeEnd("BuscaBinaria: Uniforme");

console.time("BuscaBinaria: Não Uniforme");
Buscas.binaria(vetor_naoUniforme, vetor_naoUniforme[posicao_final]);
console.timeEnd("BuscaBinaria: Não Uniforme");

console.log(" \n--------------- Busca Interpolacao --------------- ");

console.time("BuscaInterpolacao: Uniforme");
Buscas.interpolacao(vetor_Uniforme, vetor_Uniforme[posicao_final]);
console.timeEnd("BuscaInterpolacao: Uniforme");

console.time("BuscaInterpolacao: Não Uniforme");
Buscas.interpolacao(vetor_naoUniforme, vetor_naoUniforme[posicao_final]);
console.timeEnd("BuscaInterpolacao: Não Uniforme");

console.log(posicao_final)
console.log(vetor_naoUniforme[posicao_final])

console.log('');
console.log('A busca por interpolação tem melhor desempenho em buscas ja ordenada pois');

