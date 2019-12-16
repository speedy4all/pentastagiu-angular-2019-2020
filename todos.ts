import {Todo} from './todo';

export class Todos {
    taskList: Todo[];

    constructor() {
        this.taskList = [];
    }

    add(task: Todo) {
        this.taskList.push(task);
    }

    finishTask(index: number) {
        if(index < this.taskList.length && index >= 0)
            this.taskList[index].finish();
    }

    deleteTask(index: number) {
        if(index < this.taskList.length && index >= 0) {
            if(this.taskList[index].finished == false) 
                this.taskList.splice(index);
            else
                console.log("Task-ul este finalizat, nu se poate sterge.");
        } else
            console.log("Index invalid!");
            
    }

    listAll() {
        console.table(this.taskList);
    }

    listNotFinished() {
        
        let unfinishedTaskList : Array<Todo> = this.taskList.filter(task => task.finished == false);

        if(unfinishedTaskList.length > 0) 
            console.table(unfinishedTaskList);
        else
            console.log("Toate task-urile sunt finalizate.");
    }

    modify(index: number, modified: any, target: string) {
        if(index < this.taskList.length && index >= 0)
            this.taskList[index].modify(modified, target);
        else
            console.log("Index invalid!");
    }


}