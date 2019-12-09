class TODO {
    nume:string;
    data:Date;
    stare:string;
    descriere:string;
    constructor(nume:string,data:Date,stare:string,descriere:string) {
        this.nume=nume;
        this.data=data;
        this.stare=stare;
        this.descriere=descriere;
    }

    finalizare(stare:string='finalizat') {
        if(this.stare!='finalizat')
            this.stare=stare
        else
            console.log('task-ul selectat este deja finalizat');
    }

    modificare(modificare:any,nume_element_modificat:string) {

        switch(nume_element_modificat) {
            case 'nume':
                this.nume=modificare;
                break;
            case 'data':
                this.data=modificare;
                break;
            case 'descriere':
                this.descriere=modificare;
                break;
            default:
                console.log('nu exista elemenul pe care doriti sa il modificati');
                break;
        }
    }
}

class TODOS {
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

let task1=new TODO('Angular Remote1',new Date('December 1, 1995 03:24:00'),'nefinalizat','descriere Angular Remote1');
let task2=new TODO('Angular Remote2',new Date('December 2, 1995 03:24:00'),'nefinalizat','descriere Angular Remote2');
let task3=new TODO('Angular Remote3',new Date('December 3, 1995 03:24:00'),'nefinalizat','descriere Angular Remote3');
let task4=new TODO('Angular Remote4',new Date('December 4, 1995 03:24:00'),'nefinalizat','descriere Angular Remote4');
let task5=new TODO('Angular Remote5',new Date('December 5, 1995 03:24:00'),'nefinalizat','descriere Angular Remote5');

let ListOftasks=new TODOS();

ListOftasks.adaugareTask(task1);
ListOftasks.adaugareTask(task2);
ListOftasks.adaugareTask(task3);
ListOftasks.adaugareTask(task4);
ListOftasks.adaugareTask(task5);

ListOftasks.listareTasks();

ListOftasks.finalizareTasks(task1);

ListOftasks.listareTasks();

ListOftasks.stergereTask(task5);

ListOftasks.listareTasks();

ListOftasks.modificareTask(task3,new Date('December 2, 1995 03:24:00'),'data');

ListOftasks.listareTasks();

ListOftasks.listare_unfinished_Tasks();



