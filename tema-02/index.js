const { TodoList } = require('./functions.js');
function main() {
    // 1. Se va crea o lista de task-uri
    const tasks = new TodoList();
    // 2. Se vor adauga cel putin 3 task-uri in lista
    tasks.newTodo("Go to shopping", new Date("2019-12-05"), "Holiday shopping in Auchan");
    tasks.newTodo("Go to movie", new Date("2019-12-12"), "Winter premiere");
    tasks.newTodo("Dentist appointment", new Date("2019-12-20"), "Regular check-up");
    // 3. Se vor lista in consola toate task-urile
    tasks.listTodos();
    // 4. Se va finaliza un task
    tasks.endTodo(2);
    // 6. Se va modifica un task nefinalizat
    tasks.modTodo(0, undefined, new Date("2019-12-04"), "Earlier shopping in Kaufland");
    // 7. Se va sterge un task nefinalizat
    tasks.delTodo(1);
    // 8. Se vor lista task-urile nefinalizate
    tasks.listActiveTodos();
}
exports.main = main;