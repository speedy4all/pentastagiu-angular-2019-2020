"use strict";
exports.__esModule = true;
var TODOS_1 = require("./TODOS");
var TODO_1 = require("./TODO");
function run() {
    var task1 = new TODO_1.TODO('Angular Remote1', new Date('December 1, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote1');
    var task2 = new TODO_1.TODO('Angular Remote2', new Date('December 2, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote2');
    var task3 = new TODO_1.TODO('Angular Remote3', new Date('December 3, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote3');
    var task4 = new TODO_1.TODO('Angular Remote4', new Date('December 4, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote4');
    var task5 = new TODO_1.TODO('Angular Remote5', new Date('December 5, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote5');
    var ListOftasks = new TODOS_1.TODOS();
    ListOftasks.adaugareTask(task1);
    ListOftasks.adaugareTask(task2);
    ListOftasks.adaugareTask(task3);
    ListOftasks.adaugareTask(task4);
    ListOftasks.adaugareTask(task5);
    ListOftasks.listareTasks();
    ListOftasks.finalizareTasks(task1);
    ListOftasks.listareTasks();
    ListOftasks.stergereTask(task5);
    ListOftasks.listareTasks();
    ListOftasks.modificareTask(task3, new Date('December 2, 1995 03:24:00'), 'data');
    ListOftasks.listareTasks();
    ListOftasks.listare_unfinished_Tasks();
}
exports.run = run;
