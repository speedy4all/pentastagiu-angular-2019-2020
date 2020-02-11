class Actions {
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

    public modifyToDo(action, property, newValue) {
        for (var i = 0; i < this.toDos.length; i++) {
            if (this.toDos[i].name === action.name) {
                action.modifyAction(property, newValue);
            }
        }
    }
}

export { Actions };