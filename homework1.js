/**
 * 
 * Start of objects definition
 */


/**
 * @returns {Object} Todos 
 * @param {Array<Todo>} todos optional array of todo objects
 */
function Todos(todos = []) {
    this.todos = todos;
}

/**
 * @param {Todo} todo
 */
Todos.prototype.add = function (todo) {
    this.todos.push(todo);
}

/**
 * @returns {Array<Todo>} list of todos
 */
Todos.prototype.getAll = function () {
    return this.todos;
}

/**
 * @displays table of not finished tasks
 */
Todos.prototype.listNotFinished = function () {
    const notFinished = this.todos.filter(t => !t.finished);
    console.table(notFinished);
}

/**
 * @displays table with all tasks
 */
Todos.prototype.listAll = function () {
    console.table(this.todos);
}

/**
 * @param {number} index index of todo to finish
 */
Todos.prototype.finishTask = function (index) {
    this.todos[index].finish();
}

Todos.prototype.editTask = function (index, property, newValue) {
    var todo = this.todos[index];
    if (todo.finished == true) {
        console.log("Can't modify a finished task!")
        return;
    }
    if (property === "name") {
        todo.name = newValue;
    } else if (property === "date") {
        todo.date = newValue;
    }
}
Todos.prototype.deleteTask = function (index) {
    var todo = this.todos[index];
    if (todo.finished == true) {
        console.log("Can't delete a finished task!")
        return;
    }
    this.todos.splice(index, 1);
}

/**
 * 
 * @param {string} name 
 * @param {Date} date 
 */
function Todo(name, date) {
    this.name = name;
    this.data = date;
    this.finished = false;
};

/**
 * @close task
 */
Todo.prototype.finish = function () {
    this.finished = true;
};

/**
 * End of objects definition
 */


/**
 * Start of program execution
 */

const tasks = new Todos();

tasks.add(new Todo("Go to shopping", new Date("2019-12-05")));
tasks.add(new Todo("Go to movie", new Date("2019-12-12")));
tasks.add(new Todo("Dentist appointment", new Date("2019-12-20")));
tasks.add(new Todo("Remote Angular", new Date("12-10-2019")));
tasks.add(new Todo("Take dog out", new Date("2019-12-09")))
tasks.add(new Todo("Buy gifts", new Date("2019-12-15")))

tasks.listAll();

tasks.finishTask(1);

tasks.listAll();

tasks.finishTask(2);

tasks.listAll();

tasks.listNotFinished();

tasks.editTask(5, "name", "Buy gifts for Christmas");

tasks.listAll();

tasks.deleteTask(5);

tasks.listAll();

/**
 * End of program execution
 */