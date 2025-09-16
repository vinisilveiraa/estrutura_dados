const organizaFeitico = require("./feiticeiroclass.js");

const feiticeiro = new organizaFeitico();

feiticeiro.addFeitico("Fogo");
feiticeiro.addFeitico("Gelo");
//adiciona feitico
feiticeiro.showFeiticoTopo();
//mostra feitico

feiticeiro.removeFeitico();
feiticeiro.showFeiticoTopo();

feiticeiro.removeFeitico();
feiticeiro.removeFeitico();
//remove 

feiticeiro.showFeiticoTopo();
// pilha vazia