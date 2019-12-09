var Lista = /** @class */ (function () {
    function Lista(nume, descriere, data, stareFinalizare) {
        this.nume = nume;
        this.descriere = descriere;
        this.data = data;
        this.stareFinalizare = stareFinalizare;
        this.nume = nume;
        this.descriere = descriere;
        this.data = data;
        this.stareFinalizare = false;
    }
    Lista.prototype.finish = function () {
        if (!this.stareFinalizare) {
            return this.stareFinalizare = true;
        }
    };
    Lista.prototype.modificareTask = function (nume, descriere, data) {
        this.nume = nume;
        this.descriere = descriere;
        this.data = data;
    };
    return Lista;
}());
var CreareLista = /** @class */ (function () {
    function CreareLista() {
    }
    CreareLista.prototype.addTask = function (nume, descriere, data) {
        var taskNou = new Lista(nume, descriere, data, false);
        CreareLista.tasks.push(taskNou);
    };
    CreareLista.prototype.stergereTask = function (index) {
        CreareLista.tasks.splice(index, 1);
    };
    CreareLista.prototype.actualizareLista = function (index, nume, descriere, data) {
        CreareLista.tasks[index].modificareTask(nume, descriere, data);
    };
    CreareLista.prototype.finalizareTask = function (index) {
        CreareLista.tasks[index].finish();
    };
    CreareLista.prototype.listUnfinished = function () {
        return console.table(CreareLista.tasks.filter(function (item) { return !item.stareFinalizare; }));
    };
    CreareLista.prototype.listAll = function () {
        return console.table(CreareLista.tasks);
    };
    CreareLista.tasks = new Array;
    return CreareLista;
}());
var todo = new CreareLista;
todo.addTask('Dosar masina', 'Depunere acte', new Date('2020-01-05'));
todo.addTask('Programare doctor', 'Control anual', new Date('2020-01-08'));
todo.addTask('Asigurare masina', 'Plata rata CASCO', new Date('2020-01-12'));
todo.addTask('Programare masina', 'Revizie anuala', new Date('2020-02-05'));
todo.stergereTask(2);
todo.finalizareTask(1);
todo.actualizareLista(0, 'Dosar masina', 'Depunere dosar de inmatriculare ', new Date('2020-01-05'));
todo.listAll();
todo.listUnfinished();
