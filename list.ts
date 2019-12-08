interface ITodo {
    name: string;
    date: object;
    finished: boolean;
}

class Todo implements ITodo {
    constructor(public name: string, public date: object, public description: string, public finished: boolean){    
        this.name = name;
        this.description = description;
        this.date = date;
        this.finished = false;
    };
    finish(): boolean {
        if (!this.finished) {
           return this.finished = true;
        };
    }
    modify(name: string, description: string, date: object): void {
        this.name = name;
        this.description = description;
        this.date = date;
    }
}
 class Todos {
    public static allTodos: Todo[]= new Array;
    add(name: string, description: string, date: object): void{
        let newItem = new Todo(name, date, description, false);
        Todos.allTodos.push(newItem);
    }
    delete(index: number): void{
        Todos.allTodos.splice(index,1);
    }
    update(index:number, name:string, description:string, date:object):void {
        Todos.allTodos[index].modify(name,description,date)
    }
    finishTask(index:number): void{
        Todos.allTodos[index].finish();
    }
    displayAllFinished() {
       return console.table(Todos.allTodos.filter(item=> !item.finished))
    }
    displayAll() {
        return console.table(Todos.allTodos)
    }
 }

 const todos = new Todos();
 todos.add('Doctor appointment', 'medical tests', new Date('2020-12-05'));
 todos.add('Theatre play','Hamlet', new Date('2020-01-05'));
 todos.add('Movie','Titanic', new Date('2020-02-02'));
 todos.add('Shopping','Christmas tree', new Date('2020-01-01'));
 todos.delete(2);
 todos.finishTask(1);
 todos.update(0, 'Dentist appointment', 'tooth decay', new Date('2021-01-04'));
 todos.displayAll();
 todos.displayAllFinished();