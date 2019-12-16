export class Todo {

    name: string;
    date: Date;
    finished: boolean;
    description: string;

    constructor(name: string, date: Date, description: string) {
        this.name = name;
        this.date = date;
        this.finished = false;
        this.description = description;
    }

    finish() {
        if(this.finished != true)
            this.finished = true;
        else
            console.log("Task-ul " + this.name + " este deja finalizat.");
    }

    modify(modified: any, target: string) {
        switch(target) {
            case "name":
                this.name = modified;
                break;
            case "date":
                this.date = modified;
                break;
            case "description":
                this.description = modified;
                break;
        }
    }

}

