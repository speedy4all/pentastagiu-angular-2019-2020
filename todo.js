/**
 *
 * @param {string} name
 * @param {Date} date
 * @param {string} description
 */
function Todo(name, date, description) {
  this.name = name;
  this.date = date;
  this.finished = false;
  this.description = description;
}

/**
 * @close task
 */
Todo.prototype.finish = function() {
  this.finished = true;
};

exports.Todo = Todo;