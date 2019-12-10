interface ITodo {
    name: string,
    date: Date,
    finished: boolean,
    description: string
}

class Task implements ITodo {
    constructor(public name: string, public date: Date, public finished: boolean, public description: string) {
        this.name = name;
        this.date = date;
        this.finished = false;
        this.description = description;
    }
}


class ListOfTasks {

    allTasks: Task[] = [];

    addTask(name: string, date: Date, finished: boolean, description: string) {
        let newTask = new Task(name, date, finished, description);
        this.allTasks.push(newTask);
    }

    listAllTasks() {
        console.table(this.allTasks);
    }

    finishTask(index: number) {
        this.allTasks[index].finished = true;
    }

    getTaskAtIndex(index) : Task{
        const task = this.allTasks[index];
        return {
            name: task.name,
            date: task.date,
            finished: task.finished,
            description: task.description
        };
    }

    editTask(index, task) {
        if (this.allTasks[index].finished === false) {
            this.allTasks[index] = task;
        } else {
            console.error('cannot edit task not finished');
        }
    }

    deleteTask(index: number) {
        if (this.allTasks[index].finished === false) {
            this.allTasks.splice(index, 1);
        } else {
            console.error('cannot delete task not finished');
        }
    }

    listNotFinishedTasks() {
        let notFinished = this.allTasks.filter( f => f.finished === false );
        console.table(notFinished);
    }

}


//1.Creare lista taskuri
const todos = new ListOfTasks();

//2.Adaugare 3 taskuri
todos.addTask('Have a coffee', new Date('2020-10-12'), false, 'Not too strong');
todos.addTask('Take a walk', new Date('2012-06-13'), false, 'For at least 30 minutes.');
todos.addTask('Read a book', new Date('2020-02-12'), false, 'Of your choice');

//3.Listare taskuri
todos.listAllTasks();

//4.Finalizare task
todos.finishTask(2);

//5.Modificare task
let editTask1  = todos.getTaskAtIndex(1);
editTask1.name = 'Floricele pe campii';
todos.editTask(1, editTask1);

//3.Listare taskuri
todos.listAllTasks();

//6.Stergere task
todos.deleteTask(0);

//7.Listare taskuri nefinalizate
todos.listNotFinishedTasks();
