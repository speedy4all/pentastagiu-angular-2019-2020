interface IToDo {
    name: string,
    date: Date,
    finished: boolean,
}

class Action implements IToDo {
    constructor(public name: string, public date: Date, public finished: boolean) {
    }

    public finishTask() {
        this.finish();
    }

    private finish() {
        this.finished = true;
    }
}

class ActionsList {
    public toDos = [];

    public addToDo(Action: object) {
        this.toDos.push(Action);
    }

    public getToDos() {
        return this.toDos;
    }

    public listNotFinished() {
        const notFinished = this.toDos.filter(t => !t.finished);
        console.table(notFinished);
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
thirdAction.finishTask();
fourthAction.name = 'Eat dinner';
list.listNotFinished();
list.removeToDo(fourthAction);
list.listAll();

// Nota: nu sunt 100% sigura ca este implementat cum trebuie deoarece am folosit Typescript extrem de putin pana acum :)