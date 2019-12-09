var Action = /** @class */ (function () {
    function Action(name, date, finished) {
        this.name = name;
        this.date = date;
        this.finished = finished;
    }
    Action.prototype.finishTask = function () {
        this.finish();
    };
    Action.prototype.finish = function () {
        this.finished = true;
    };
    return Action;
}());
var ActionsList = /** @class */ (function () {
    function ActionsList() {
        this.toDos = [];
    }
    ActionsList.prototype.addToDo = function (Action) {
        this.toDos.push(Action);
    };
    ActionsList.prototype.getToDos = function () {
        return this.toDos;
    };
    ActionsList.prototype.listNotFinished = function () {
        var notFinished = this.toDos.filter(function (t) { return !t.finished; });
        console.table(notFinished);
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
thirdAction.finishTask();
fourthAction.name = 'Eat dinner';
list.listNotFinished();
list.removeToDo(fourthAction);
list.listAll();
// Nota: nu sunt 100% sigura ca este implementat cum trebuie deoarece am folosit Typescript extrem de putin pana acum :)
