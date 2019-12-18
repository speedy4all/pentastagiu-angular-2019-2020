import { Task } from './task';
import { ToDoList } from './taskList';

function runTaskList () {
    let myList = new ToDoList()
    myList.addTask(new Task('Shopping', new Date('2019-12-20'), 'Buy hat', false));
    myList.addTask(new Task('Phone Call', new Date('2019-12-20'), 'Call uncle for birthday', false));
    myList.addTask(new Task('Pay bills', new Date('2019-12-20'), 'Pay gas bill', false));
    myList.addTask(new Task('Shopping', new Date('2019-12-20'), 'Buy washing machine', false));
    myList.allTasks();
    myList.finishTask(1);
    myList.allTasks();
    myList.changeProp(0, 'description', 'Buy hat and scarf');
    myList.allTasks();
    myList.removeUnfinishedTask(2);
    myList.unfinishedTasks();
}

export { runTaskList };