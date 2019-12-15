class Task {
  public name: string;
  public endDate: Date;
  public description: string;
  private _isFinished = false;

  constructor(name: string, endDate: Date, description: string) {
    this.name = name;
    this.endDate = endDate;
    this.description = description;
  }

  public finishTask(): void {
    this._isFinished = true;
  }

  public modifyTask(propertyName: string, propertyValue): void {
    if (this._isFinished) {
      console.log('The task is finished and it can not be modified');
      return;
    }

    const taskKeys: Array<string> = Object.keys(this);
    for (let key of taskKeys) {
      if (key === propertyName) {
        this[propertyName] = propertyValue;
        return;
      }
    }
    console.log(`Property ${propertyName} does not exist`);
  }

  get isFinished() {
    return this._isFinished;
  }
}

class TaskList {
  private taskList: Array<Task> = [];

  constructor() {
    console.log('The list of tasks was created.')
  }

  public addTask(task: Task): void {
    this.taskList.push(task);
  }

  public deleteTask(task: Task): void {
    if (task.isFinished) {
      console.log('The task can not be deleted because is finished.')
    } else {
      this.taskList = this.taskList.filter(t => t !== task);
    }
  }

  public modifyTask(task: Task, propertyName: string, propertyValue: any): void {
    this.taskList.forEach(t => {
      if (t === task) {
        t.modifyTask(propertyName, propertyValue);
      }
    });
  }

  public finishTask(task: Task) {
    this.taskList.forEach(t => {
      if (t === task) {
        t.finishTask();
      }
    });
  }

  public printAll(): void {
    this.taskList.forEach(task => console.table(task));
  }

  public printAllUnfinished(): void {
    this.taskList.filter(task => !task.isFinished).forEach(task => console.table(task));
  }

}

const taskList = new TaskList();

let task1: Task = new Task('Christmas party', new Date('2019-12-25'), 'description 1');
let task2: Task = new Task('First Exam', new Date('2020-01-19'), 'description 2');
let task3: Task = new Task('Mothers Day', new Date('2020-03-08'), 'description 3');

taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);

taskList.finishTask(task2);
taskList.printAll();

taskList.modifyTask(task1, 'name', 'Task Updated');
taskList.printAll();

taskList.deleteTask(task3);
taskList.printAll();

taskList.printAllUnfinished();
