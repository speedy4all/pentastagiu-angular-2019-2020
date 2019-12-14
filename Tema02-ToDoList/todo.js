"use strict";
exports.__esModule = true;
var ToDo = /** @class */ (function () {
    function ToDo(name, endDate, description) {
        this.name = name;
        this.endDate = endDate;
        this.finished = false;
        this.description = description;
    }
    //getters & setters
    ToDo.prototype.setName = function (name) {
        this.name = name;
    };
    ToDo.prototype.setDate = function (date) {
        this.endDate = date;
    };
    ToDo.prototype.setDescription = function (description) {
        this.description = description;
    };
    ToDo.prototype.getName = function () {
        return this.name;
    };
    ToDo.prototype.getDate = function () {
        return this.endDate;
    };
    ToDo.prototype.getDescrption = function () {
        return this.description;
    };
    //other methods
    ToDo.prototype.finsh = function () {
        this.finished = true;
    };
    return ToDo;
}());
exports.ToDo = ToDo;
