class Todo {

    name:string;
    date:Date;
    finished: boolean;
    description: string;

    constructor (name:string, date:Date, description:string) {
        this.name=name;
        this.date=date;
        this.finished=false;
        this.description=description;
        
    }

     finish() {
            if(this.finished==false) {
                this.finished=true;
            }
            else{
                console.log("Task finalizat!");
            }
    }

    modify(target:string, modified:any) {
        switch(target) {
            case "name":
                this.name=modified;
                break;
            case "date":
                this.date=modified;
                break;
            case "description":
                this.description=modified;
                break;
        }

    }

}



class Todos {

    taskList: Todo[];

    constructor (){
        this.taskList=[];
    }

    add(task:Todo){
        this.taskList.push(task);
    }

    delete(index:number){
        if(index<this.taskList.length)
            delete this.taskList[index];
        else
            console.log("index invalid!");
    }

    modify(index:number,target:string, modified:any){
        if(index<this.taskList.length)
            this.taskList[index].modify(target, modified);
        else
            console.log("index invalid!");
        
    }

    finish(index:number){
        if(index<this.taskList.length)
            this.taskList[index].finish();
        else
            console.log("index invalid");
    }

    list(){
        console.table(this.taskList);

    }


    listNotFinished(){

        let unfinishedTaskList:Array <Todo> =this.taskList.filter(task=>task.finished==false);
    

        if(unfinishedTaskList.length>0) {

            console.table(unfinishedTaskList);
        }
        else {

            console.log("Toate task-urile au fost finalizate");
        }
    }

    
}
