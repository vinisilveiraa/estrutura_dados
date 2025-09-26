const ListaEncadeada = require('./dinamicamente.js');
const ListaDuplamenteEncadeada = require('./duplamente.js')

const tour = new ListaEncadeada;
const tourD = new ListaDuplamenteEncadeada;

tour.insertEnd('cachoeira');
tour.insertBegginning('caverna');
tour.insertBegginning('comecoTrilha');
tour.insertEnd('mirante');
tour.toString();

tour.removeValue('caverna');// muito perigoso ;-;
tour.find('mirante');
tour.removeValue('mirante');

tour.toString();
tour.find('mirante');

console.log("=======================")

tourD.append('cachoeira')
tourD.preppend('caverna')
tourD.preppend('comecoTrilha')
tourD.append('mirante')
tourD.toString();

tourD.removeFirst();
tourD.removeLast();
tourD.append('mirante');

tourD.toString();
console.log(tourD.find('mirante'));