const ListaEncadeada = require('./dinamicamente.js');
const ListaDuplamenteEncadeada = require('./duplamente.js')

// const corrida = new ListaEncadeada;
const corrida = new ListaDuplamenteEncadeada;

corrida.append('tartaruga1');
corrida.append('tartaruga2');
corrida.append('tartaruga3');
corrida.append('tartaruga4');
corrida.append('tartaruga5');
corrida.append('tartaruga6');

corrida.preppend('tRapida');
corrida.append('tLenta');
corrida.toString();

corrida.removeLast(); // tira a lerda

console.log(corrida.find('tRapida'));