export class TodoItem {
    todo: string;
    description: string;
    date: Date;
    complete: boolean = false;

   constructor(todo: string,  date: Date, description?: string, complete: boolean = false){
       this.todo = todo;
       this.description = description;
       this.date = date;
       this.complete = complete;
   }
}

export class TodoCollection { 
    constructor(public userName: string, public todoItems: TodoItem[] = []){
    }

    addTodo(todo:string, description: string): void {
        this.todoItems.push(new TodoItem(todo, new Date, description));;
    }
    deleteTodo(id:number){
        this.todoItems.splice(id,1);
     }
     
    finishTodo(id:number){

         this.todoItems[id].complete=true;
     }
    displayTodo(){
        console.table(this.todoItems);
    }
    modifyTodo(id:number, modify: string, value){
        switch(modify){
            case "todo":
            this.todoItems[id].todo = value;
            break;
            case "description":
            this.todoItems[id].description= value;
            break;
            case "date":
            this.todoItems[id].date = value; 
            break;
        } 
    }
    noFinish(){
        console.table(this.todoItems.filter(item => !item.complete));
    }
    }

let todos = [
    new TodoItem( "Write review", new Date("2019-12-05"),"to eMag"),
    new TodoItem( "Shopping",  new Date("2019-12-05"), "Potatos and Onion"),];


let collection: TodoCollection = new TodoCollection("Rudolf", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

collection.displayTodo();
collection.addTodo("Run a bike","");
collection.addTodo("Bake pizza in microwave", "with salami");
collection.addTodo("Watch new movie","Star Wars");
collection.displayTodo();
collection.finishTodo(2);
collection.displayTodo();
collection.modifyTodo(3,"description", " peperoni");
collection.deleteTodo(1);
collection.displayTodo();
collection.noFinish();