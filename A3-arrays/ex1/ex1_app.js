const tarefa = require('./ex1_class.js');

const tarefas = new tarefa()


tarefas.adicionar('Reunião de planejamento');
tarefas.adicionar('Desenvolver protótipo do produto');
tarefas.adicionar('Testar funcionalidades');
tarefas.adicionar('Revisar documentação');
tarefas.adicionar('Enviar relatório semanal');
tarefas.listar();

tarefas.remover();
tarefas.listar();