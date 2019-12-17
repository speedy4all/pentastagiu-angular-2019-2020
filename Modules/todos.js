function Todos(tasks = []) { //Todos constructor
    this.tasks = tasks;
}

//- functie de adaugare
Todos.prototype.addTask = function (newTask) {
    this.tasks.push(newTask);
}

//- functie de stergere
Todos.prototype.deleteTask = function (index) {
    this.tasks.splice(index, 1);
}

// - functie pentru finalizarea unui task
Todos.prototype.finishTask = function (index) {
    this.tasks[index].finish();
}
// - functie pentru listare in consola
Todos.prototype.printAllTasks = function () {
    console.table(this.tasks);
}

Todos.prototype.modifyName = function (index, name) {
    this.tasks[index].modify(name);
}

Todos.prototype.printUnfinishedTasks = function () {
    for (var i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].finished == false) {
            console.table(this.tasks[i]);
        }
    }
}

module.exports.Todos = Todos;