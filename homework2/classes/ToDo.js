"use strict";
exports.__esModule = true;
var ToDo = /** @class */ (function () {
    function ToDo(nume, descriere, data) {
        this.nume = nume;
        this.descriere = descriere;
        this.data = data;
        this.finished = false;
    }
    ;
    ToDo.prototype.isFinished = function () {
        return this.finished;
    };
    ToDo.prototype.modifyToDo = function (numeNou, descriereNoua) {
        if (numeNou)
            this.nume = numeNou;
        if (descriereNoua)
            this.descriere = descriereNoua;
        return;
    };
    ToDo.prototype.setFinished = function () {
        this.finished = true;
        return;
    };
    ToDo.prototype.deleteToDo = function () {
        delete this.data;
        delete this.descriere;
        delete this.nume;
        delete this.finished;
        return;
    };
    return ToDo;
}());
exports.ToDo = ToDo;
