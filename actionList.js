var Action = /** @class */ (function () {
    function Action(name, date, finished) {
        this.name = name;
        this.date = date;
        this.finished = finished;
    }
    Action.prototype.finish = function () {
        this.finished = true;
    };
    return Action;
}());
var ActionsList = /** @class */ (function () {
    function ActionsList() {
        this.toDos = [];
    }
    ActionsList.prototype.addToDo = function (action) {
        this.toDos.push(action);
    };
    ActionsList.prototype.getToDos = function () {
        return this.toDos;
    };
    ActionsList.prototype.listNotFinished = function () {
        var notFinished = this.toDos.filter(function (t) { return !t.finished; });
        console.table(notFinished);
    };
    ActionsList.prototype.finishTask = function (action) {
        if (!action.finished) {
            for (var i = 0; i < this.toDos.length; i++) {
                if (this.toDos[i].name === action.name) {
                    action.finish(this.toDos[i]);
                }
            }
        }
    };
    ActionsList.prototype.listAll = function () {
        console.table(this.toDos);
    };
    ActionsList.prototype.removeToDo = function (action) {
        if (!action.finished) {
            for (var i = 0; i < this.toDos.length; i++) {
                if (this.toDos[i].name === action.name) {
                    this.toDos.splice(i, 1);
                }
            }
        }
    };
    ActionsList.prototype.modifyToDo = function (action, name) {
        for (var i = 0; i < this.toDos.length; i++) {
            if (this.toDos[i].name === action.name) {
                this.toDos[i].name = name;
            }
        }
    };
    return ActionsList;
}());
var firstAction = new Action('Go to work', new Date('09.12.2019'), true);
var secondAction = new Action('Go shopping', new Date('09.12.2019'), false);
var thirdAction = new Action('Play with your child', new Date('09.12.2019'), false);
var fourthAction = new Action('Watch a movie', new Date('09.12.2019'), false);
var list = new ActionsList();
list.addToDo(firstAction);
list.addToDo(secondAction);
list.addToDo(thirdAction);
list.addToDo(fourthAction);
list.listAll();
list.finishTask(thirdAction);
list.modifyToDo(fourthAction, 'Eat dinner');
list.listNotFinished();
list.removeToDo(fourthAction);
list.listAll();
