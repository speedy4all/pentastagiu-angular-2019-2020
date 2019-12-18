import { ToDo } from './ToDo'

export class ToDoList {
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