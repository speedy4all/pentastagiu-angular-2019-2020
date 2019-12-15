"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(name, endDate, description) {
        this._isFinished = false;
        this.name = name;
        this.endDate = endDate;
        this.description = description;
    }
    Task.prototype.finishTask = function () {
        this._isFinished = true;
    };
    Task.prototype.modifyTask = function (propertyName, propertyValue) {
        if (this._isFinished) {
            console.log('The task is finished and it can not be modified');
            return;
        }
        var taskKeys = Object.keys(this);
        for (var _i = 0, taskKeys_1 = taskKeys; _i < taskKeys_1.length; _i++) {
            var key = taskKeys_1[_i];
            if (key === propertyName) {
                this[propertyName] = propertyValue;
                return;
            }
        }
        console.log("Property " + propertyName + " does not exist");
    };
    Object.defineProperty(Task.prototype, "isFinished", {
        get: function () {
            return this._isFinished;
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
exports.Task = Task;
