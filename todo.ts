class Todo {

    name: string;
    date: Date;
    finished: boolean;
    description: string;

    constructor(name: string, date: Date, description: string) {
        this.name = name;
        this.date = date;
        this.finished = false;
        this.description = description;
    }

    finish() {
        if(this.finished != true)
            this.finished = true;
        else
            console.log("Task-ul " + this.name + " este deja finalizat.");
    }

    modify(modified: any, target: string) {
        switch(target) {
            case "name":
                this.name = modified;
                break;
            case "date":
                this.date = modified;
                break;
            case "description":
                this.description = modified;
                break;
        }
    }

}

class Todos {
    taskList: Todo[];

    constructor() {
        this.taskList = [];
    }

    add(task: Todo) {
        this.taskList.push(task);
    }

    finishTask(index: number) {
        if(index < this.taskList.length)
            this.taskList[index].finish();
    }

    deleteTask(index: number) {
        if(index < this.taskList.length) {
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
        if(index < this.taskList.length)
            this.taskList[index].modify(modified, target);
        else
            console.log("Index invalid!");
    }


}