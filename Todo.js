class Todo {
    constructor(name, finishDate, description) {
        this.name = name;
        this.finishDate = finishDate;
        this.finished = false;
        this.description = description;
    }

    finishTask = () => this.finished = true;
    modifyName = (name) => this.name = name;
}

class Todos {
    constructor(todos = []) {
        this.todos = todos;
    }

    add = (todo) => this.todos.push(todo)
    addTask = (todo) => this.todos.push(todo);
    deleteUnfinishedTask = (index) => this.todos.splice(index, 1);

    deleteFirstUnfinishedTask = () => {
        this.todos.forEach((todo, index) => {
            if(!todo.finished){
                this.todos.splice(index, 1);
                return;
            }
        })
    };


    deleteAllUnfinishedTasks = () => this.todos.filter(t => !t.finished);

    modifyTaskName = (currentTaskName, newTaskName) => {
        let count = 0;
        this.todos.forEach(todo => {
            if (todo.name === currentTaskName) {
                todo.name = newTaskName;
                count++;
            }
        });
        if (count < 1) {
            console.error("Task ", currentTaskName, " not existent");
        }
    }
    listTasks = () => console.table(this.todos);
    finishTask = (taskName) => {
        this.todos.forEach(todo => {
            if (todo.name === taskName) {
                todo.finishTask();
            }
        });
    }
}

const todos = new Todos();
todos.add(new Todo("Go to the gym", new Date("2019-03-02"), "Pull day"));
todos.add(new Todo("Cook", new Date("2019-12-12"), "Chicken Breast"));
todos.add(new Todo("Buy materials", new Date("2019-11-12"), "Renovate room"));
todos.listTasks();
todos.finishTask("Go to the gym");
todos.modifyTaskName("Cook", "Cook for the entire week");
todos.listTasks();
todos.deleteFirstUnfinishedTask();
todos.listTasks();