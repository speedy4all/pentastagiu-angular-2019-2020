interface ITodo {
    nume: string,
    descriere: string,
    data: Date;
    finished: boolean,
}

class ToDo implements ITodo {

    finished: boolean;

    constructor(public nume: string, public descriere: string, public data: Date,) {
        this.finished = false;
    };

    isFinished(): boolean {
        return this.finished;
    }

    modifyToDo(numeNou?: string, descriereNoua?: string) {
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

    deleteToDo(): void {
        delete this.data;
        delete this.descriere;
        delete this.nume;
        delete this.finished;
        return;
    }

}

class ToDoList {
    private todos: Array<ToDo> = [];
    constructor() {};

    addToDo(nume: string, descriere: string, data: Date): void {
        this.todos.push(new ToDo(nume, descriere, data));
        return;
    }

    modifyToDo(index: number, descriere?: string, nume?: string): void {
        this.todos[index].modifyToDo(nume, descriere);
        return;
    }

    setFinished(index: number): void {
        this.todos[index].setFinished();
        return;
    }

    deleteToDo(index: number): void {
        this.todos[index].deleteToDo();
        delete this.todos[index];
        return;
    }

    printUnfinished(): void {
        let unFinished: Array<ToDo> = [];
        this.todos.forEach(element => {
            if(!element.isFinished())
                unFinished.push(element);
        });
        console.table(unFinished);
        return;
    }

    printTodos(): void {
        console.table(this.todos);
        return;
    }
}

let todos = new ToDoList();

todos.addToDo('Morning routine', 'Woke up, drink my coffee then get redy for work', new Date('12/12/2019'));
todos.addToDo('Work', 'Finish those scripts', new Date());
todos.addToDo('Lunch', 'Find somethig to eat', new Date());
todos.addToDo('Relax', 'Watch a movie or something', new Date());

todos.printTodos();

todos.modifyToDo(0, "Well, I think I'm gonna be late for work", "Late for work");
todos.modifyToDo(2, "I think I'm gonna order something")

todos.printTodos();

todos.setFinished(3);

todos.printTodos();

todos.deleteToDo(1);

todos.printTodos();

todos.printUnfinished();

