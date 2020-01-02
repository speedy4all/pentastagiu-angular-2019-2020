"use strict";
exports.__esModule = true;
var Action = /** @class */ (function () {
    function Action(name, date, finished) {
        this.name = name;
        this.date = date;
        this.finished = finished;
    }
    Action.prototype.finish = function () {
        this.finished = true;
    };
    Action.prototype.modifyAction = function (property, newValue) {
        this[property] = newValue;
    };
    return Action;
}());
exports.Action = Action;
