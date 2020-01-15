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
Todos.prototype.add = function(todo) {
    this.todos.push(todo);
}

/**
 * @returns {Array<Todo>} list of todos
 */
Todos.prototype.getAll = function() {
    return this.todos;
}

/**
 * @displays table of not finished tasks
 */
Todos.prototype.listNotFinished = function() {
    const notFinished = this.todos.filter(t => !t.finished);
    console.table(notFinished);
}

/**
 * @displays table with all tasks
 */
Todos.prototype.listAll = function() {
    console.table(this.todos);
}

/**
 * @param {number} index index of todo to finish
 */
Todos.prototype.finishTask = function(index) {
    this.todos[index].finish();
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
Todo.prototype.finish = function() {
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


tasks.finishTask(1);

tasks.listAll();

tasks.finishTask(2);

tasks.listAll();

tasks.listNotFinished();

/**
 * End of program execution
 */ 