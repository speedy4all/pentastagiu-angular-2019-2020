"use strict";
exports.__esModule = true;
var TODOS = /** @class */ (function () {
    function TODOS() {
        this.tasks = [];
    }
    TODOS.prototype.adaugareTask = function (task) {
        this.tasks.push(task);
    };
    TODOS.prototype.stergereTask = function (task) {
        if (this.tasks.length > 0) {
            if (this.tasks.indexOf(task) > -1) {
                if (task.stare == 'nefinalizat') {
                    if (this.tasks.indexOf(task) == 0)
                        this.tasks.splice(this.tasks.indexOf(task), this.tasks.indexOf(task) + 1);
                    else
                        this.tasks.splice(this.tasks.indexOf(task), this.tasks.indexOf(task));
                }
            }
        }
    };
    TODOS.prototype.modificareTask = function (task, modificare, nume_element_modificat) {
        if (this.tasks.length > 0) {
            if (this.tasks.indexOf(task) > -1) {
                this.tasks[this.tasks.indexOf(task)].modificare(modificare, nume_element_modificat);
            }
        }
    };
    TODOS.prototype.finalizareTasks = function (task) {
        if (this.tasks.length > 0) {
            if (this.tasks.indexOf(task) > -1) {
                this.tasks[this.tasks.indexOf(task)].finalizare();
            }
        }
    };
    TODOS.prototype.listareTasks = function () {
        if (this.tasks.length > 0) {
            console.log('lista de task-uri este urmatoarea:');
            console.table(this.tasks);
        }
        else
            console.log("lista de task-uri este goala");
    };
    TODOS.prototype.listare_unfinished_Tasks = function () {
        var unfinished_tasks = [];
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.stare == 'nefinalizat') {
                unfinished_tasks.push(task);
            }
        }
        if (unfinished_tasks.length > 0) {
            console.log('lista de task-uri nefinalizate este urmatoarea:');
            console.table(unfinished_tasks);
        }
        else
            console.log("lista de task-uri nefinalizate este goala");
    };
    return TODOS;
}());
exports.TODOS = TODOS;
