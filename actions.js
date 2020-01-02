"use strict";
exports.__esModule = true;
var Actions = /** @class */ (function () {
    function Actions() {
        this.toDos = [];
    }
    Actions.prototype.addToDo = function (action) {
        this.toDos.push(action);
    };
    Actions.prototype.getToDos = function () {
        return this.toDos;
    };
    Actions.prototype.listNotFinished = function () {
        var notFinished = this.toDos.filter(function (t) { return !t.finished; });
        console.table(notFinished);
    };
    Actions.prototype.finishTask = function (action) {
        if (!action.finished) {
            for (var i = 0; i < this.toDos.length; i++) {
                if (this.toDos[i].name === action.name) {
                    action.finish(this.toDos[i]);
                }
            }
        }
    };
    Actions.prototype.listAll = function () {
        console.table(this.toDos);
    };
    Actions.prototype.removeToDo = function (action) {
        if (!action.finished) {
            for (var i = 0; i < this.toDos.length; i++) {
                if (this.toDos[i].name === action.name) {
                    this.toDos.splice(i, 1);
                }
            }
        }
    };
    Actions.prototype.modifyToDo = function (action, property, newValue) {
        for (var i = 0; i < this.toDos.length; i++) {
            if (this.toDos[i].name === action.name) {
                action.modifyAction(property, newValue);
            }
        }
    };
    return Actions;
}());
exports.Actions = Actions;
