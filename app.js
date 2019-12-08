var Todo = /** @class */ (function() {
    function Todo(name, date, isFinished, description) {
        this.name = name;
        this.date = date;
        this.isFinished = isFinished;
        this.description = description;
    }
    Todo.prototype.finalize = function() {
        this.isFinished = true;
    };
    Todo.prototype.modify = function(name, date, description) {
        if (name !== undefined) {
            this.name = name;
        }
        if (date !== undefined) {
            this.date = date;
        }
        if (description !== undefined) {
            this.description = description;
        }
    };
    return Todo;
}());
var Todos = /** @class */ (function() {
    function Todos(todos) {
        this.todos = todos;
    }
    Todos.prototype.add = function(todo) {
        this.todos.push(todo);
    };
    Todos.prototype["delete"] = function(index) {
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
    Todos.prototype.modify = function(index, name, date, description) {
        if (index > -1) {
            this.todos[index].modify(name, date, description);
        }
    };
    Todos.prototype.finalize = function(index) {
        if (index > -1) {
            this.todos[index].finalize();
        }
    };
    Todos.prototype.print = function() {
        console.table(this.todos);
    };
    Todos.prototype.printNotFinished = function() {
        console.table(this.todos.filter(function(todo) { return !todo.isFinished; }));
    };
    return Todos;
}());
var tasks = new Todos([]);
tasks.add(new Todo("Go to shopping", new Date("2019-05-07"), false, "Buy green vegetables"));
tasks.add(new Todo("Go to movie", new Date("2019-07-12"), false, "Avengers Movie"));
tasks.add(new Todo("Gym", new Date("2020-03-02"), false, "Go to the gym everyday"));
tasks.print();
tasks.finalize(2);
tasks.print();
tasks.modify(1, "Go to cinema", undefined, undefined);
tasks.print();
tasks["delete"](0);
tasks.print();
tasks.printNotFinished();