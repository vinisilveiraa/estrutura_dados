const bauTesouro = require('./bauclass.js');

const tesouros = new bauTesouro();

tesouros.guardarTesouro("Ouro")
tesouros.guardarTesouro("Prata")

console.log(tesouros.olharTesouro());

console.log("retirado:", tesouros.retirarTesouro());
console.log(tesouros.olharTesouro());
console.log(tesouros.estaVazio())

console.log("retirado:", tesouros.retirarTesouro());
console.log(tesouros.estaVazio())