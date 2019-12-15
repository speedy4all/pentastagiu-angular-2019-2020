export class Task {
    public name: string;
    public endDate: Date;
    public description: string;
    private _isFinished = false;

    constructor(name: string, endDate: Date, description: string) {
        this.name = name;
        this.endDate = endDate;
        this.description = description;
    }

    public finishTask(): void {
        this._isFinished = true;
    }

    public modifyTask(propertyName: string, propertyValue): void {
        if (this._isFinished) {
            console.log('The task is finished and it can not be modified');
            return;
        }

        const taskKeys: Array<string> = Object.keys(this);
        for (let key of taskKeys) {
            if (key === propertyName) {
                this[propertyName] = propertyValue;
                return;
            }
        }
        console.log(`Property ${propertyName} does not exist`);
    }

    get isFinished() {
        return this._isFinished;
    }
}