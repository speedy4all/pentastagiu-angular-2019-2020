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

    private modifyAction(property: string, newValue: string) {
        this[property] = newValue;
    }
}

export { Action };