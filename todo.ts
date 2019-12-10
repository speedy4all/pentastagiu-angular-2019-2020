interface ITask {
    name: string,
    date: Date,
    description: string,
    completed: boolean
}

class Task implements ITask {
    constructor(public name:string, public date: Date, public description: string, public completed: boolean){
    }
    finish() {
        this.completed = true;
    }
    changeProperty(propName: string, newValue: string) {
        if (this[propName]) {
            this[propName] = newValue;   
            return;
        }
        console.log(`Property "${propName}" does not exist`);
    }
}

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
