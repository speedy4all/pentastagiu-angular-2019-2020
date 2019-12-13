const { System } = require('systemjs')

System.register([], function (exports_1, context_1) {
    "use strict";
    var ToDo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ToDo = class ToDo {
                constructor(nume, descriere, data) {
                    this.nume = nume;
                    this.descriere = descriere;
                    this.data = data;
                    this.finished = false;
                }
                ;
                isFinished() {
                    return this.finished;
                }
                modifyToDo(numeNou, descriereNoua) {
                    if (numeNou)
                        this.nume = numeNou;
                    if (descriereNoua)
                        this.descriere = descriereNoua;
                    return;
                }
                setFinished() {
                    this.finished = true;
                    return;
                }
                deleteToDo() {
                    delete this.data;
                    delete this.descriere;
                    delete this.nume;
                    delete this.finished;
                    return;
                }
            };
            exports_1("ToDo", ToDo);
        }
    };
});
