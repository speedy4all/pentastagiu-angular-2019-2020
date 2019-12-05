//MODEL
class ToDo{
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

    //getters & setters
    setName(name: string){
        this.name = name;
    }

    setDate(date: Date){
        this.endDate = date;
    }

    setDescription(description: string){
        this.description = description;
    }

    getName(){
        return this.name;
    }

    getDate(){
        return this.endDate;
    }

    getDescrption(){
        return this.description;
    }

    //other methods
    finsh(){
        this.finished = true;
    }

    listMe(){
        console.log(`${this.getName} - ${this.getDate} - ${this.getDescrption}`);
    }
}

//CONTROLLER
class ToDoList{

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

    //TYPE: 1 - name , 2 - date, 3 - description
    changeParam(index: number, type: number, parameter: any){
        switch(type){
            case 1:
                this.allTodos[index].setName(parameter as string);
                break;
            case 2:
                this.allTodos[index].setDate(parameter as Date);
                break;
            case 3:
                this.allTodos[index].setDescription(parameter as string);
                break;
        }
    }
}

//EXECUTION
//1 - Create list
const todos = new ToDoList();
//2 - Create items
todos.createTask("Do groceries", new Date("2019-12-13"),"Get something to eat");
todos.createTask("Do laundry", new Date("2019-12-15"),"Wash your dirty clothes.");
todos.createTask("Clean the room", new Date("2019-12-14"),"Make it look clean at least.");
//3 - Display items
todos.listAll();
//4 - Finish tasks
todos.finishTask(2);
todos.finishTask(0);
todos.listAll();
//5 - Change parameters
todos.changeParam(1,1,"New Task Here");
todos.changeParam(1,2,new Date("2019-12-25"));
todos.changeParam(1,3, "New Description Here");
todos.listAll();
//6 - Delete parameter
todos.deleteTask(2)
todos.listAll();
//7 - Display tasks not finished
todos.notFinshed();