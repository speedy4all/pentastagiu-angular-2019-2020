const { Todo } = require('./todo.js');
class TodoList {
    constructor() {
        this.allTodos = new Array(); // corectat eroare tema 1
    }
    // lista de task-uri
    listTodos() {
        console.table(this.allTodos);
    }
    // functie de adaugare
    newTodo(taskName, endDate, description) {
        let addItem = new Todo(taskName, endDate, false, description);
        this.allTodos.push(addItem);
    }
    // functie de stergere
    delTodo(index) {
        this.allTodos.splice(index, 1);
        this.listTodos();
    }
    // functie de modificare
    modTodo(index, taskName, endDate, description) {
        this.allTodos[index].taskName = taskName || this.allTodos[index].taskName;
        this.allTodos[index].endDate = endDate || this.allTodos[index].endDate;
        this.allTodos[index].description = description || this.allTodos[index].description;
        this.listTodos();
    }
    // functie pentru finalizarea unui task
    endTodo(index) {
        this.allTodos[index].finish();
        this.listTodos();
    }
    // functie listare taskuri nefinalizate
    listActiveTodos() {
        const unFinished = this.allTodos.filter(t => !t.completed);
        console.table(unFinished);
        // this.listTodos(); - anulat pe baza observatiilor la tema 1
    }
}
exports.TodoList = TodoList;