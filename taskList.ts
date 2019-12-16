import { Task } from './task';

class ToDoList {
    public tasks: Task[]=[];
    addTask(newTask: Task){
        this.tasks.push(newTask);
    }
    finishTask(index: number) {
        this.tasks[index].finish();
    }
    allTasks() {
        console.table(this.tasks);
    }
    changeProp(index: number, propName: string, newValue: string) {
        if (this.tasks[index]) {
            this.tasks[index].changeProperty(propName, newValue);
            return
        }
        console.log(`Task does not exist`);
    }
    unfinishedTasks() {
        const notFinished = this.tasks.filter( el => el.completed === false);
        console.table(notFinished);
    }
    removeUnfinishedTask(index: number) {
        if (this.tasks[index] && this.tasks[index].completed === false) {
            this.tasks.splice(index, 1);
            return;
        }
        console.log('Selected task is finished');
    }
}
export { ToDoList };