const Pilha = require('./ex2.class');

const editor = new Pilha();

editor.guardarItem('Digitar Titulo');
editor.guardarItem('Inserir Imagem');
editor.guardarItem('Adicionar Tabela');
editor.guardarItem('Formatar Negrito');

console.log(`-- Item removido: ${editor.retirarItem()}`);  // negrito
console.log(`-- Item removido: ${editor.retirarItem()}`);  // tabela

console.log(`-- Item no Topo: ${editor.olharItem()}`); // volta inserir imagem

editor.adicionar('Desfazer', 'CTRL + Z');
editor.adicionar('Colar', 'CTRL + V');
editor.adicionar('Copiar', 'CTRL + C');

editor.verItems();
console.log('')

editor.remover()

console.log("")

// console.log(`Item removido: ${editor.remover()}`);
editor.verItems();
console.log(editor.restantes() + " itens restantes");