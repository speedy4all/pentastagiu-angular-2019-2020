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
 * @param {number} index index of todo to remove
 */
Todos.prototype.removeByIndex = function(index) {
  if(this.todos[index].finished){
    throw 'You cannot remove a finished task';
  }
  else{
    this.todos.splice(index,1);
  }
};

/**
 * @param {number} index index of todo to find
 * @param {string} name of todo to modify
 */
Todos.prototype.modifyName = function(index,name) {
  this.todos[index].editName(name);
};

/**
 * @returns {Array<Todo>} list of todos
 */
Todos.prototype.getAll = function() {
  return this.todos;
};

/**
 * @displays table of unfinished tasks
 */
Todos.prototype.listNotFinished = function() {
  let today = new Date();
  const notFinished = this.todos.filter(t => !t.finished && t.date.getMonth()==today.getMonth()
                                        && t.date.getDate() == today.getDate());
  printList(notFinished);
};

/**
 * @displays table with all tasks
 */
Todos.prototype.listAll = function() {
  const tasks = this.todos;
  printList(tasks);
};

/**
 * @param {number} index index of todo to finish
 */
Todos.prototype.finishTask = function(index) {
  this.todos[index].finish();
};

exports.Todos = Todos;
