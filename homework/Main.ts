import {Task} from "./Task";
import {TaskList} from "./TaskList";

const taskList = new TaskList();

let task1: Task = new Task('Christmas party', new Date('2019-12-25'), 'description 1');
let task2: Task = new Task('First Exam', new Date('2020-01-19'), 'description 2');
let task3: Task = new Task('Mothers Day', new Date('2020-03-08'), 'description 3');

taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);

taskList.finishTask(task2);
taskList.printAll();

taskList.modifyTask(task1, 'name', 'Task Updated');
taskList.printAll();

taskList.deleteTask(task3);
taskList.printAll();

taskList.printAllUnfinished();