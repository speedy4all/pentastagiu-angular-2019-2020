function Todo(name, date, finished, description){
    this.name = name;
    this.date = date;
    this.finished = false;
    this.description = description;
}

Todo.prototype.finish = function(){
    this.finished = true;
}

Todo.prototype.modify = function(name){
    this.name = name;
}

module.exports.Todo = Todo;