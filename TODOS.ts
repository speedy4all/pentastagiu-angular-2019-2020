import {TODO} from './TODO'
export class TODOS {
    tasks:Array<TODO>;
    constructor() {
            this.tasks=[];
        }
    adaugareTask(task:TODO) {
            this.tasks.push(task);
        }
        stergereTask(task:TODO) {
        if(this.tasks.length>0) {
            if(this.tasks.indexOf(task)>-1) {
                if(task.stare=='nefinalizat'){
                    if(this.tasks.indexOf(task)==0)
                        this.tasks.splice(this.tasks.indexOf(task),this.tasks.indexOf(task)+1);
                    else
                        this.tasks.splice(this.tasks.indexOf(task),this.tasks.indexOf(task));
                }
            }
        }
    
    }
    modificareTask(task:TODO,modificare:any,nume_element_modificat:string) {
            if(this.tasks.length>0) {
                if(this.tasks.indexOf(task)>-1) {
                    this.tasks[this.tasks.indexOf(task)].modificare(modificare,nume_element_modificat);
                }
            }
        }
    
        finalizareTasks(task:TODO) {
            if(this.tasks.length>0) {
                if(this.tasks.indexOf(task)>-1) {
                    this.tasks[this.tasks.indexOf(task)].finalizare();
                }
            }
        }
        listareTasks()
        {
            if(this.tasks.length>0)
            {
                console.log('lista de task-uri este urmatoarea:');
                console.table(this.tasks);  
            }
            else
                console.log("lista de task-uri este goala");
        }
        listare_unfinished_Tasks()
        {
            let unfinished_tasks:Array<TODO>=[];
            for(let task of this.tasks) {
                if(task.stare=='nefinalizat') {
                    unfinished_tasks.push(task);     
                }    
            }
            if(unfinished_tasks.length>0)
            {
                console.log('lista de task-uri nefinalizate este urmatoarea:');
                console.table(unfinished_tasks);  
            }
            else
                console.log("lista de task-uri nefinalizate este goala");
        }
    
    
    }