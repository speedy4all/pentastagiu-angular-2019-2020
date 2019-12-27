interface IToDo {
    name: string,
    date: Date,
    finished: boolean,
}

class Action implements IToDo {
    constructor(public name: string, public date: Date, public finished: boolean) {
    }

    private finish() {
        this.finished = true;
    }
}

class ActionsList {
    public toDos = [];

    public addToDo(action: object) {
        this.toDos.push(action);
    }

    public getToDos() {
        return this.toDos;
    }

    public listNotFinished() {
        const notFinished = this.toDos.filter(t => !t.finished);
        console.table(notFinished);
    }

    public finishTask(action) {
        if (!action.finished) {
            for (var i = 0; i < this.toDos.length; i++) {
                if (this.toDos[i].name === action.name) {
                    action.finish(this.toDos[i]);
                }
            }
        }
    }

    public listAll() {
        console.table(this.toDos);
    }

    public removeToDo(action) {
        if (!action.finished) {
            for (var i = 0; i < this.toDos.length; i++) {
                if (this.toDos[i].name === action.name) {
                    this.toDos.splice(i, 1)
                }
            }
        }
    }

    public modifyToDo(action, name) {
        for (var i = 0; i < this.toDos.length; i++) {
            if (this.toDos[i].name === action.name) {
                this.toDos[i].name = name;
            }
        }
    }
}

const firstAction = new Action('Go to work', new Date('09.12.2019'), true);
const secondAction = new Action('Go shopping', new Date('09.12.2019'), false);
const thirdAction = new Action('Play with your child', new Date('09.12.2019'), false);
const fourthAction = new Action('Watch a movie', new Date('09.12.2019'), false);

const list = new ActionsList();
list.addToDo(firstAction);
list.addToDo(secondAction);
list.addToDo(thirdAction);
list.addToDo(fourthAction);
list.listAll();
list.finishTask(thirdAction);
list.modifyToDo(fourthAction, 'Eat dinner');
list.listNotFinished();
list.removeToDo(fourthAction);
list.listAll();
