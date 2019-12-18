interface ITask {
    name: string,
    date: Date,
    description: string,
    completed: boolean
}

class Task implements ITask {
    constructor(public name:string, public date: Date, public description: string, public completed: boolean){
    }
    finish() {
        this.completed = true;
    }
    changeProperty(propName: string, newValue: string) {
        if (this[propName]) {
            this[propName] = newValue;   
            return;
        }
        console.log(`Property "${propName}" does not exist`);
    }
}
export { Task };