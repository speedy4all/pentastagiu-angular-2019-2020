class Todo {
    constructor(taskName, endDate, completed, description) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.completed = false;
        this.description = description;
    }
    finish() {
        this.completed = true;
    }
    modify(taskName, endDate, description) {
        this.taskName = taskName;
        this.endDate = endDate;
        this.description = description;
    }
}
class TodoList {
    constructor() {
        this.allTodos = new Array;
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
    delTask(index) {
        this.allTodos.splice(index, 1);
        this.listTodos();
    }
    // functie de modificare
    modTask(index, taskName, endDate, description) {
        this.allTodos[index].taskName = taskName || this.allTodos[index].taskName;
        this.allTodos[index].endDate = endDate || this.allTodos[index].endDate;
        this.allTodos[index].description = description || this.allTodos[index].description;
        this.listTodos();
    }
    // functie pentru finalizarea unui task
    endTask(index) {
        this.allTodos[index].finish();
        this.listTodos();
    }
    // functie listare taskuri nefinalizate
    listActiveTodos() {
        const unFinished = this.allTodos.filter(t => !t.completed);
        console.table(unFinished);
        this.listTodos();
    }
}
// 1. Se va crea o lista de task-uri
const tasks = new TodoList();
// 2. Se vor adauga cel putin 3 task-uri in lista
tasks.newTodo("Go to shopping", new Date("2019-12-05"), "Holiday shopping in Auchan");
tasks.newTodo("Go to movie", new Date("2019-12-12"), "Winter premiere");
tasks.newTodo("Dentist appointment", new Date("2019-12-20"), "Regular check-up");
// 3. Se vor lista in consola toate task-urile
tasks.listTodos();
// 4. Se va finaliza un task
tasks.endTask(2);
// 6. Se va modifica un task nefinalizat
tasks.modTask(0, undefined, new Date("2019-12-04"), "Earlier shopping in Kaufland");
// 7. Se va sterge un task nefinalizat
tasks.delTask(1);
// 8. Se vor lista task-urile nefinalizate
tasks.listActiveTodos();