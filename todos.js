const { printList } = require("./utils");

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
  printList(this.todos);
};

/**
 * @param {number} index index of todo to finish
 */
Todos.prototype.finishTask = function(index) {
  this.todos[index].finish();
};

exports.Todos = Todos;
