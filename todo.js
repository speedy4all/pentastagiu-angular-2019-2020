/**
 *
 * @param {string} name
 * @param {Date} date
 */
function Todo(name, date) {
    this.name = name;
    this.data = date;
    this.finished = false;
  }
  
  /**
   * @close task
   */
  Todo.prototype.finish = function() {
    this.finished = true;
  };

  exports.Todo = Todo;