import { ToDo } from './todo';

export class ToDoList{

    allTodos: ToDo[] = new Array;

    //adds new ToDo
    createTask(name: string, endDate: Date, description: string){
        this.allTodos.push(new ToDo(name,endDate,description));
    }

    //display all ToDos
    listAll(){
        console.table(this.allTodos);
    }

    //finish a task
    finishTask(index: number){
        this.allTodos[index].finsh(); 
    }

    //delete a task
    deleteTask(index: number){
        this.allTodos.splice(index, 1);
    }

    //list all not finished tasks
    notFinshed(){
        var table = this.allTodos.filter(t => !t.finished);
        console.table(table);   
    }

    //Am modificat functia sa fie mai intuitiva
    changeParam(index: number, type: string, parameter: any){
        switch(type){
            case "name":
                this.allTodos[index].setName(parameter as string);
                break;
            case "date":
                this.allTodos[index].setDate(parameter as Date);
                break;
            case "description":
                this.allTodos[index].setDescription(parameter as string);
                break;
        }
    }
}

