function Todos(todos = []) {
    this.todos = todos;
}

Todos.prototype.add = function(todo) {
    this.todos.push(todo);
}

Todos.prototype.deleteTaskByIndex = function (index) {
    this.todos.splice(index,1);
}

Todos.prototype.getAll = function() {
    return this.todos;
}

Todos.prototype.listNotFinished = function() {
    const notFinished = this.todos.filter(t => !t.finished);
    console.table(notFinished);
}

Todos.prototype.listAll = function () {
    console.table(this.todos);
}

Todos.prototype.finishTask = function (index) {
    this.todos[index].finish();
}

function Todo(name,date,description) {
    this.name = name;
    this.data = date;
    this.finished = false;
    this.description = description;
};

Todo.prototype.finish = function () {
    this.finished = true;
};

Todos.prototype.modifyName = function(index,name) {
    this.todos[index].modify(name);
}

Todo.prototype.modify = function (name) {
    this.name = name;
}

Todos.prototype.modifyDate = function(index,data) {
    this.todos[index].modifyData(data);
}

Todo.prototype.modifyData = function (data) {
    this.data = data;
}

Todos.prototype.modifyDescription = function(index,description) {
    this.todos[index].modifyDescribe(description);
}

Todo.prototype.modifyDescribe = function (description) {
    this.description = description;
}

const tasks = new Todos();

tasks.add(new Todo("Go to shopping", new Date("2019-12-07"),"apple, pen"));
tasks.add(new Todo("Go to movie", new Date("2019.12.15"),"cinema"));
tasks.add(new Todo("Dentist", new Date("2019-12-17"),"tooth not found"));
tasks.add(new Todo("Buying a new car", new Date("2019-12-24"),"most important"));

tasks.listAll();
tasks.finishTask(1);
tasks.finishTask(2);
tasks.listAll();
tasks.modifyName(0,"Go to shopping in Auchan.");
tasks.listAll();
tasks.deleteTaskByIndex(0);
tasks.listAll();
tasks.listNotFinished();
tasks.listAll();







