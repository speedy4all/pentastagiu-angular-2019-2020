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

Todo.prototype.finish = function() {
  this.finished = true;
};

Todo.prototype.setName = function(name) {
  this.name = name;
};

Todo.prototype.setDescription = function(description) {
  this.description = description;
};

Todo.prototype.setDate = function(date) {
  this.data = date;
};

exports.Todo = Todo;
