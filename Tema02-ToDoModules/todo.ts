export class ToDo{
    name: string;
    endDate: Date;
    finished: boolean;
    description: string;

    constructor(name: string, endDate: Date, description: string){
        this.name = name;
        this.endDate = endDate;
        this.finished = false;
        this.description = description;
    }

    //KEPT SETTERS FOR ONE METHOD
    setName(name: string){
        this.name = name;
    }

    setDate(date: Date){
        this.endDate = date;
    }

    setDescription(description: string){
        this.description = description;
    }

    //other methods
    finsh(){
        this.finished = true;
    }

}

