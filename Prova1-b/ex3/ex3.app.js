const ListaDuplamenteEncadeada = require('./ex3.class');

const playlist = new ListaDuplamenteEncadeada();

playlist.append('Bohemion Rhapsody');
playlist.append('Stairway to Heaven');
playlist.append('Like a Rollin Stone');

console.log('')
playlist.preppend('Imagine')
console.log(' --- Normal ---')
playlist.traverse()

console.log('')
console.log(' --- Reverso ---')
playlist.traverseReverse();

console.log('')
console.log('Removido: ' + playlist.removeAt(2))

console.log('')
console.log(' --- Lista final: ---')
playlist.traverse()