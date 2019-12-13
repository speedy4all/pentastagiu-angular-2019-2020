System.register("models/IToDo", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("classes/ToDo", [], function (exports_2, context_2) {
    "use strict";
    var ToDo;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            ToDo = class ToDo {
                constructor(nume, descriere, data) {
                    this.nume = nume;
                    this.descriere = descriere;
                    this.data = data;
                    this.finished = false;
                }
                ;
                isFinished() {
                    return this.finished;
                }
                modifyToDo(numeNou, descriereNoua) {
                    if (numeNou)
                        this.nume = numeNou;
                    if (descriereNoua)
                        this.descriere = descriereNoua;
                    return;
                }
                setFinished() {
                    this.finished = true;
                    return;
                }
                deleteToDo() {
                    delete this.data;
                    delete this.descriere;
                    delete this.nume;
                    delete this.finished;
                    return;
                }
            };
            exports_2("ToDo", ToDo);
        }
    };
});
System.register("classes/ToDoList", ["classes/ToDo"], function (exports_3, context_3) {
    "use strict";
    var ToDo_1, ToDoList;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (ToDo_1_1) {
                ToDo_1 = ToDo_1_1;
            }
        ],
        execute: function () {
            ToDoList = class ToDoList {
                constructor() {
                    this.todos = [];
                }
                ;
                addToDo(nume, descriere, data) {
                    this.todos.push(new ToDo_1.ToDo(nume, descriere, data));
                    return;
                }
                modifyToDo(index, descriere, nume) {
                    this.todos[index].modifyToDo(nume, descriere);
                    return;
                }
                setFinished(index) {
                    this.todos[index].setFinished();
                    return;
                }
                deleteToDo(index) {
                    this.todos[index].deleteToDo();
                    delete this.todos[index];
                    return;
                }
                printUnfinished() {
                    let unFinished = [];
                    this.todos.forEach(element => {
                        if (!element.isFinished())
                            unFinished.push(element);
                    });
                    console.table(unFinished);
                    return;
                }
                printTodos() {
                    console.table(this.todos);
                    return;
                }
            };
            exports_3("ToDoList", ToDoList);
        }
    };
});
System.register("TodoHomework", ["classes/ToDoList"], function (exports_4, context_4) {
    "use strict";
    var ToDoList_1, todos;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (ToDoList_1_1) {
                ToDoList_1 = ToDoList_1_1;
            }
        ],
        execute: function () {
            todos = new ToDoList_1.ToDoList();
            // Adding todos
            todos.addToDo('Morning routine', 'Woke up, drink my coffee then get redy for work', new Date('12/12/2019'));
            todos.addToDo('Work', 'Finish those scripts', new Date());
            todos.addToDo('Lunch', 'Find somethig to eat', new Date());
            todos.addToDo('Relax', 'Watch a movie or something', new Date());
            // Printing todos
            todos.printTodos();
            //Modifying toods 
            todos.modifyToDo(0, "Well, I think I'm gonna be late for work", "Late for work");
            todos.modifyToDo(2, "I think I'm gonna order something");
            todos.printTodos();
            // Finishing
            todos.setFinished(3);
            todos.printTodos();
            //Deleteting
            todos.deleteToDo(1);
            todos.printTodos();
            //Ptinting the unfinished todos
            todos.printUnfinished();
        }
    };
});
