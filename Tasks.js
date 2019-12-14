Se va folosi functia `console.table()` pentru afisarea task-urilor in consola.
Structura si functionalitatea obiectelor va fi urmatoarea:
Todos:
//a) lista de task-uri    OK
//b) functie de adaugare  OK
//c) functie de stergere
//d) functie de modificare
e) functie pentru finalizarea unui task
//f) functie pentru listare in consola
Todo:
//- nume
//- data finalizare
//- stare (finalizat sau nu)
//- descriere
- functie pentru finalizare
- functie pentru modificare

Pasii de executie ce trebuie urmati sunt urmatorii:
//1. Se va crea o lista de task-uri - DONE
//2. Se vor adauga cel putin 3 task-uri in lista
//3. Se vor lista in consola toate task-urile
//4. Se va finaliza un task
//6. Se va modifica un task nefinalizat (una din proprietatile: nume, data, descriere) (ex: "Go to shopping" -> "Go to shopping in Auchan")
7. Se va sterge un task nefinalizat
8. Se vor lista task-urile nefinalizate

//Declare ToDos Object 
//a) lista task-uri
function Todos(taskArray = new  Array() ){
    this.taskArray = taskArray;
}

//b) fct adaugare
function addTask(myNewTask){
this.taskArray.push(myNewTask);
}

//C) functie de stergere

function removeTask(givenTask){
    for(var i=0; i<taskArray.length; i++){
        if(givenTask==taskArray[i]){
            this.taskArray.splice(i,1);
        }
    }
}

//d) functie de modificare

Todo.prototype.modify=function modifyTask(indexTask, newName, newDate){
this.todos[indexTask].name = newName;
this.todos[indexTask].date = newDate;
}
//e) functie pentru finalizarea unui task


//---

function getTasksNotFinished(){
    return this.taskArray;
}

//f) functie pentru listare in consola
function displayAllTasks(){
    console.table(this.taskArray);
}


function Todo(name, date, description){
    this.name = name;
    this.data = date;
    this.finished = finished;
    this.description = description;
}

function finishTask(){
    this.finished = true;
}

function EndTask(taskIndex){
this.todos[taskIndex].finishTask():
}

var sprint = new Todos();

var task1 = new Todo("Go to shopping", new Date("2019-12-5"));
var task2 = new Todo("Go swimming", new Date("2019-12-9"));
var task3 = new Todo("Go to space", new Date("2020-12-15"));

sprint.addTask(task1);
sprint.addTask(task2);
sprint.addTask(task3);

sprint.EndTask(2);

sprint.modify(1,"Go to shopping to Auchan", new Date("2019-12-8"));
sprint.displayAllTasks();
}