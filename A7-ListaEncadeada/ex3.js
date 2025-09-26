const ListaDuplamenteEncadeada = require('./duplamente.js')

const poderes = new ListaDuplamenteEncadeada;

poderes.append('Bola_Fogo')
poderes.append('Raio_Congelante')
poderes.append('Escudo_Fogo')
poderes.preppend('Espinhos_Gelo')
poderes.preppend('Escudo_Pedra')

poderes.toString();

poderes.removeAt(3);
poderes.toString();

console.log(poderes.find('Escudo_Fogo'));