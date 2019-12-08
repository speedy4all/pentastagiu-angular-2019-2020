class Todo {
    constructor(public name: string, public date: Date, public isFinished: boolean, public description: string) {}

    finalize() {
        this.isFinished = true;
    }

    modify(name: string, date: Date, description: string) {
        if (name !== undefined) {
            this.name = name;
        }
        if (date !== undefined) {
            this.date = date;
        }
        if (description !== undefined) {
            this.description = description;
        }
    }
}

class Todos {
    constructor(public todos: Todo[]){}

    add(todo: Todo) {
        this.todos.push(todo);
    }

    delete(index: number) {
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    modify(index: number, name: string, date: Date, description: string) {
        if (index > -1) {
            this.todos[index].modify(name, date, description);
        }
    }

    finalize(index: number) {
        if (index > -1) {
            this.todos[index].finalize();
        }
    }

    print() {
        console.table(this.todos);
    }

    printNotFinished() {
        console.table(this.todos.filter(todo => !todo.isFinished));
    }
}

let tasks = new Todos([]);

tasks.add(new Todo("Go to shopping", new Date("2019-05-07"), false, "Buy groceries for next week"));
tasks.add(new Todo("Go to movie", new Date("2019-07-12"), false, "Attend movie premiere"));
tasks.add(new Todo("Buy fitness membership ", new Date("2020-03-02"), false, "Current membership will expire on this date"));

tasks.print();
tasks.finalize(2);
tasks.print();
tasks.modify(1, "Go to cinema", undefined, undefined);
tasks.print();
tasks.delete(0);
tasks.print();
tasks.printNotFinished();

