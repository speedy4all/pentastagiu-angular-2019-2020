import {Task} from "./Task";

export class TaskList {
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
