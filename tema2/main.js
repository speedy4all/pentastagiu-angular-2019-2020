const {Todos} = require("./lists")
var todos = new Todos();
todos.add('Doctor appointment', 'medical tests', new Date('2020-12-05'));
todos.add('Theatre play', 'Hamlet', new Date('2020-01-05'));
todos.add('Movie', 'Titanic', new Date('2020-02-02'));
todos.add('Shopping', 'Christmas tree', new Date('2020-01-01'));
todos["delete"](2);
todos.finishTask(1);
todos.update(0, 'Dentist appointment', 'tooth decay', new Date('2021-01-04'));
todos.displayAll();
todos.displayAllFinished();
