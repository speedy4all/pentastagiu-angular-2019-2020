class TodoList {
    private todos: Array<any> = [];

    addTodos(name: string,  date: Date, description: string, finished?: boolean): void {
        if (name === '') {
            return;
        }
        this.todos.push({
            name: name,
            date: date,
            description: description,
            finished: false
        });
    }

    getUnfinishedTasks(): void {
        const notFinished = this.todos.filter(todo => !todo.finished);
        console.table(notFinished);
    }

    modifyTask(index: number, newName: string): void {
        const notFinished = this.todos.filter(todo => !todo.finished);
        let anotherName: string;
        for (let task of notFinished) {
            if (task.finished || typeof index !== 'number') {
                return;
            }
            anotherName = task.name;
        }
        anotherName = newName;
        this.todos[index].name = anotherName;
    }

    deleteUnfinishedTask(index: number): Array<Object> {
        const notFinished = this.todos.filter(todo => !todo.finished);
        notFinished.splice(index, 1);
        const finished = this.todos.filter(todo => todo.finished);
        const newArr = finished.concat(notFinished);
        this.todos = newArr;
        const sortedTodo = this.todos.sort();
        return sortedTodo;
    }

    finishTask(task: number): void {
        this.todos[task].finished = true;
    }

    getAllTodos(): void {
        console.table(this.todos.filter(todo => todo.name))
    }

}

const todo = new TodoList();
todo.addTodos('Wake up',  new Date("2019-12-05"), 'I hope i wake up.');
todo.addTodos('Work for money',  new Date("2019-12-15"), 'I hope for more money.');
todo.addTodos('Go to the gym and deadlift',  new Date("2019-12-25"), 'I hope to deadlift 200kg today.');
todo.addTodos('Go home',  new Date("2019-12-10"), 'I hope to find my home.');
todo.addTodos('Go to the window',  new Date("2019-12-12"), 'I home my window is close.');
todo.getAllTodos();
todo.finishTask(0);
todo.getAllTodos();
todo.modifyTask(1, 'A new name');
todo.getAllTodos();
todo.deleteUnfinishedTask(2);
todo.getUnfinishedTasks();
todo.getAllTodos();
