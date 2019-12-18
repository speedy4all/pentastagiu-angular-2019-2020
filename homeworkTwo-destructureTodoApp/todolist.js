const {Todo} = require("./todo");
class TodoList {
    constructor() {
        this.allTodos = new Array;
    }
    //functie creare task
    createTodo(taskName, endDate, description) {
        let newItem = new Todo(taskName, endDate, false, description);
        this.allTodos.push(newItem);
    }
    //functie listare taskuri
    listTodos() {
        console.table(this.allTodos);
    }
    //functie modificare task
    modifyTask(index, taskName = this.allTodos[index].taskName, endDate = this.allTodos[index].endDate, description = this.allTodos[index].description) {
        this.allTodos[index].taskName = taskName;
        this.allTodos[index].endDate = endDate;
        this.allTodos[index].description = description;
        this.listTodos();
    }
    //functie finalizare task    
    finishTask(index) {
        this.allTodos[index].finish();
        this.listTodos();
    }
    //functie pentru stergerea unui task
    deleteTask(index) {
        this.allTodos.splice(index, 1);
        this.listTodos();
    }
    //functie listare taskuri nefinalizate
    listUnfinishedTodos() {
        const finished = this.allTodos.filter(t => !t.completed);
        console.table(finished);
    }
}


exports.TodoList = TodoList;