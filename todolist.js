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
 *
 * @param {string} name
 * @param {Date} date
 */
function Todo(name, date, description) {
  this.name = name;
  this.data = date;
  this.description = description;
  this.finished = false;
}

/**
 * @param {Todo} todo
 */
Todos.prototype.add = function(todo) {
  this.todos.push(todo);
};

Todos.prototype.deleteTaskByIndex = function(index) {
  this.todos.splice(index, 1);
};

/**
 * @returns {Array<Todo>} list of todos
 */
Todos.prototype.getAll = function() {
  return this.todos;
};

/**
 * @displays table of not finished tasks
 */
Todos.prototype.listNotFinished = function() {
  const notFinished = this.todos.filter(t => !t.finished);
  console.table(notFinished);
};

/**
 * @displays table with all tasks
 */
Todos.prototype.listAll = function() {
  console.table(this.todos);
};

/**
 * @param {number} index index of todo to finish
 */
Todos.prototype.finishTask = function(index) {
  this.todos[index].finish();
};

/**
 * @close task
 */
Todo.prototype.finish = function() {
  this.finished = true;
};

Todo.prototype.setName = function(name) {
  this.name = name;
};

Todos.prototype.modifyName = function(index, name) {
  this.todos[index].setName(name);
};

Todo.prototype.setDate = function(date) {
  this.data = date;
};

Todos.prototype.modifyDate = function(index, date) {
  this.todos[index].setDate(date);
};

Todo.prototype.setDescription = function(description) {
  this.description = description;
};

Todos.prototype.modifyDescription = function(index, description) {
  this.todos[index].setDescription(description);
};
/**
 * End of objects definition
 */

/**
 * Start of program execution
 */

const tasks = new Todos();

tasks.add(new Todo("Go to shopping", new Date("2019-12-05"), "milk, beer..."));
tasks.add(
  new Todo(
    "Go to movie",
    new Date("2019-12-12"),
    "Not decided what movie to watch"
  )
);
tasks.add(
  new Todo(
    "Dentist appointment",
    new Date("2019-12-20"),
    "Be there 15 minutes earlier"
  )
);
tasks.add(
  new Todo(
    "Pick up friend from airport",
    new Date("2019-12-23"),
    "Ask about the exact time the plane will land"
  )
);

tasks.listAll();

tasks.finishTask(1);

tasks.listAll();

tasks.finishTask(2);

tasks.modifyName(0, "Go to the grocery store");

tasks.listAll();

tasks.modifyDescription(3, "Landing at 17:00");

tasks.listNotFinished();

tasks.listAll();

/**
 * End of program execution
 */
