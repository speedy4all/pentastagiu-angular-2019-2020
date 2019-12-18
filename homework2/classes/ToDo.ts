import { ITodo } from './../models/IToDo'

export class ToDo implements ITodo {

    finished: boolean;

    constructor(public nume: string, public descriere: string, public data: Date) {
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