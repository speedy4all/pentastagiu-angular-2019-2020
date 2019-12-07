interface ITodo {
    taskName: string,
    endDate: Date,
    completed: boolean,
    description: string,
    finish(): any,
    modify(taskName: string, endDate: Date, description: string): any
}

class Todo implements ITodo {


    constructor(public taskName: string, public endDate: Date, public completed: boolean, public description: string) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.completed = false;
        this.description = description;
    }
    finish() {
        this.completed = true;
    }
    modify(taskName: string, endDate: Date, description: string) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.description = description;
    }

}

class TodoList {
    allTodos: Todo[] = new Array;
    //functie creare task
    createTodo(taskName: string, endDate: Date, description: string, ) {
        let newItem = new Todo(taskName, endDate, false, description);
        this.allTodos.push(newItem);

    }
    //functie listare taskuri
    listTodos() {
        console.table(this.allTodos);
    }
    //functie modificare task
    modifyTask(index: number, taskName ? : string, endDate ? : Date, description ? : string, ) {
        this.allTodos[index].taskName = taskName || this.allTodos[index].taskName;
        this.allTodos[index].endDate = endDate || this.allTodos[index].endDate;
        this.allTodos[index].description = description || this.allTodos[index].description;
        this.listTodos();
    }
    //functie finalizare task    
    finishTask(index: number) {
        this.allTodos[index].finish();
        this.listTodos();
    }
    //functie pentru stergerea unui task
    deleteTask(index: number) {
        this.allTodos.splice(index, 1);
        this.listTodos();
    }
    //functie listare taskuri nefinalizate
    listUnfinishedTodos() {
        const finished = this.allTodos.filter(t => !t.completed);
        console.table(finished);
        this.listTodos();

    }
}
//1.Creare lista taskuri
const todos = new TodoList();
//2.Adaugare 3 taskuri
todos.createTodo('Take a break', new Date('2019-12-12'), 'Once you earn it');
todos.createTodo('Listen to music', new Date('2020-06-23'), 'Not too loud');
todos.createTodo('Have dinner with friends', new Date('2020-01-11'), 'Dont drink too much');
//3.Listare taskuri
todos.listTodos();
//4.Finalizare task
todos.finishTask(2);
//5.Modificare task
todos.modifyTask(1, undefined, undefined, "Loud af");
//6.Stergere task
todos.deleteTask(0);
//7.Listare taskuri nefinalizate
todos.listUnfinishedTodos();