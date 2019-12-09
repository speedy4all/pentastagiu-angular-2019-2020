var TODO = /** @class */ (function () {
    function TODO(nume, data, stare, descriere) {
        this.nume = nume;
        this.data = data;
        this.stare = stare;
        this.descriere = descriere;
    }
    TODO.prototype.finalizare = function (stare) {
        if (stare === void 0) { stare = 'finalizat'; }
        if (this.stare != 'finalizat')
            this.stare = stare;
        else
            console.log('task-ul selectat este deja finalizat');
    };
    TODO.prototype.modificare = function (modificare, nume_element_modificat) {
        switch (nume_element_modificat) {
            case 'nume':
                this.nume = modificare;
                break;
            case 'data':
                this.data = modificare;
                break;
            case 'descriere':
                this.descriere = modificare;
                break;
            default:
                console.log('nu exista elemenul pe care doriti sa il modificati');
                break;
        }
    };
    return TODO;
}());
var TODOS = /** @class */ (function () {
    function TODOS() {
        this.tasks = [];
    }
    TODOS.prototype.adaugareTask = function (task) {
        this.tasks.push(task);
    };
    TODOS.prototype.stergereTask = function (task) {
        if (this.tasks.length > 0) {
            if (this.tasks.indexOf(task) > -1) {
                if (task.stare == 'nefinalizat') {
                    if (this.tasks.indexOf(task) == 0)
                        this.tasks.splice(this.tasks.indexOf(task), this.tasks.indexOf(task) + 1);
                    else
                        this.tasks.splice(this.tasks.indexOf(task), this.tasks.indexOf(task));
                }
            }
        }
    };
    TODOS.prototype.modificareTask = function (task, modificare, nume_element_modificat) {
        if (this.tasks.length > 0) {
            if (this.tasks.indexOf(task) > -1) {
                this.tasks[this.tasks.indexOf(task)].modificare(modificare, nume_element_modificat);
            }
        }
    };
    TODOS.prototype.finalizareTasks = function (task) {
        if (this.tasks.length > 0) {
            if (this.tasks.indexOf(task) > -1) {
                this.tasks[this.tasks.indexOf(task)].finalizare();
            }
        }
    };
    TODOS.prototype.listareTasks = function () {
        if (this.tasks.length > 0) {
            console.log('lista de task-uri este urmatoarea:');
            console.table(this.tasks);
        }
        else
            console.log("lista de task-uri este goala");
    };
    TODOS.prototype.listare_unfinished_Tasks = function () {
        var unfinished_tasks = [];
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.stare == 'nefinalizat') {
                unfinished_tasks.push(task);
            }
        }
        if (unfinished_tasks.length > 0) {
            console.log('lista de task-uri nefinalizate este urmatoarea:');
            console.table(unfinished_tasks);
        }
        else
            console.log("lista de task-uri nefinalizate este goala");
    };
    return TODOS;
}());
var task1 = new TODO('Angular Remote1', new Date('December 1, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote1');
var task2 = new TODO('Angular Remote2', new Date('December 2, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote2');
var task3 = new TODO('Angular Remote3', new Date('December 3, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote3');
var task4 = new TODO('Angular Remote4', new Date('December 4, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote4');
var task5 = new TODO('Angular Remote5', new Date('December 5, 1995 03:24:00'), 'nefinalizat', 'descriere Angular Remote5');
var ListOftasks = new TODOS();
ListOftasks.adaugareTask(task1);
ListOftasks.adaugareTask(task2);
ListOftasks.adaugareTask(task3);
ListOftasks.adaugareTask(task4);
ListOftasks.adaugareTask(task5);
ListOftasks.listareTasks();
ListOftasks.finalizareTasks(task1);
ListOftasks.listareTasks();
ListOftasks.stergereTask(task5);
ListOftasks.listareTasks();
ListOftasks.modificareTask(task3, new Date('December 2, 1995 03:24:00'), 'data');
ListOftasks.listareTasks();
ListOftasks.listare_unfinished_Tasks();
