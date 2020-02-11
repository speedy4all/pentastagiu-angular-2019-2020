"use strict";
exports.__esModule = true;
var actions_1 = require("./actions");
var action_1 = require("./action");
function runActionsList() {
    var firstAction = new action_1.Action('Go to work', new Date('12.21.2019'), true);
    var secondAction = new action_1.Action('Go shopping', new Date('12.21.2019'), false);
    var thirdAction = new action_1.Action('Play with your child', new Date('12.21.2019'), false);
    var fourthAction = new action_1.Action('Watch a movie', new Date('12.21.2019'), false);
    var list = new actions_1.Actions();
    list.addToDo(firstAction);
    list.addToDo(secondAction);
    list.addToDo(thirdAction);
    list.addToDo(fourthAction);
    list.listAll();
    list.finishTask(thirdAction);
    list.modifyToDo(fourthAction, 'name', 'Eat dinner');
    list.modifyToDo(thirdAction, 'date', new Date('12.22.2019'));
    list.listNotFinished();
    list.removeToDo(fourthAction);
    list.listAll();
}
exports.runActionsList = runActionsList;
