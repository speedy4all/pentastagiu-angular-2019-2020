//MODEL
var ToDo = /** @class */ (function () {
    function ToDo(name, endDate, description) {
        this.name = name;
        this.endDate = endDate;
        this.finished = false;
        this.description = description;
    }
    //getters & setters
    ToDo.prototype.setName = function (name) {
        this.name = name;
    };
    ToDo.prototype.setDate = function (date) {
        this.endDate = date;
    };
    ToDo.prototype.setDescription = function (description) {
        this.description = description;
    };
    ToDo.prototype.getName = function () {
        return this.name;
    };
    ToDo.prototype.getDate = function () {
        return this.endDate;
    };
    ToDo.prototype.getDescrption = function () {
        return this.description;
    };
    //other methods
    ToDo.prototype.finsh = function () {
        this.finished = true;
    };
    ToDo.prototype.listMe = function () {
        console.log(this.getName + " - " + this.getDate + " - " + this.getDescrption);
    };
    return ToDo;
}());
//CONTROLLER
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.allTodos = new Array;
        this.index = 0;
    }
    //adds new ToDo
    ToDoList.prototype.createTask = function (name, endDate, description) {
        this.allTodos.push(new ToDo(name, endDate, description));
    };
    //display all ToDos
    ToDoList.prototype.listAll = function () {
        console.table(this.allTodos);
    };
    //finish a task
    ToDoList.prototype.finishTask = function (index) {
        this.allTodos[index].finsh();
    };
    //delete a task
    ToDoList.prototype.deleteTask = function (index) {
        this.allTodos.splice(index, 1);
    };
    //list all not finished tasks
    ToDoList.prototype.notFinshed = function () {
        var table = this.allTodos.filter(function (t) { return !t.finished; });
        console.table(table);
    };
    //TYPE: 1 - name , 2 - date, 3 - description
    ToDoList.prototype.changeParam = function (index, type, parameter) {
        switch (type) {
            case 1:
                this.allTodos[index].setName(parameter);
                break;
            case 2:
                this.allTodos[index].setDate(parameter);
                break;
            case 3:
                this.allTodos[index].setDescription(parameter);
                break;
        }
    };
    return ToDoList;
}());
//EXECUTION
//1 - Create list
var todos = new ToDoList();
//2 - Create items
todos.createTask("Do groceries", new Date("2019-12-13"), "Get something to eat");
todos.createTask("Do laundry", new Date("2019-12-15"), "Wash your dirty clothes.");
todos.createTask("Clean the room", new Date("2019-12-14"), "Make it look clean at least.");
//3 - Display items
todos.listAll();
//4 - Finish tasks
todos.finishTask(2);
todos.finishTask(0);
todos.listAll();
//5 - Change parameters
todos.changeParam(1, 1, "New Task Here");
todos.changeParam(1, 2, new Date("2019-12-25"));
todos.changeParam(1, 3, "New Description Here");
todos.listAll();
//6 - Delete parameter
todos.deleteTask(2);
todos.listAll();
//7 - Display tasks not finished
todos.notFinshed();
