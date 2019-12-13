const { System } = require('systemjs')

System.register(["./ToDo"], function (exports_1, context_1) {
    "use strict";
    var ToDo_1, ToDoList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ToDo_1_1) {
                ToDo_1 = ToDo_1_1;
            }
        ],
        execute: function () {
            ToDoList = class ToDoList {
                constructor() {
                    this.todos = [];
                }
                ;
                addToDo(nume, descriere, data) {
                    this.todos.push(new ToDo_1.ToDo(nume, descriere, data));
                    return;
                }
                modifyToDo(index, descriere, nume) {
                    this.todos[index].modifyToDo(nume, descriere);
                    return;
                }
                setFinished(index) {
                    this.todos[index].setFinished();
                    return;
                }
                deleteToDo(index) {
                    this.todos[index].deleteToDo();
                    delete this.todos[index];
                    return;
                }
                printUnfinished() {
                    let unFinished = [];
                    this.todos.forEach(element => {
                        if (!element.isFinished())
                            unFinished.push(element);
                    });
                    console.table(unFinished);
                    return;
                }
                printTodos() {
                    console.table(this.todos);
                    return;
                }
            };
            exports_1("ToDoList", ToDoList);
        }
    };
});
