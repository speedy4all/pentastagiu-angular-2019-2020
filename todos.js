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

Todos.prototype.modifyName = function(index, name) {
  this.todos[index].setName(name);
};

Todos.prototype.modifyDate = function(index, date) {
  this.todos[index].setDate(date);
};

Todos.prototype.modifyDescription = function(index, description) {
  this.todos[index].setDescription(description);
};

exports.Todos = Todos;
