import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-task';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Array<Task>;
  task: Task;

  constructor() {
    this.tasks = TASKS;
  }

  getTasks(): Observable<Task[]>{
    return of(this.tasks);
  }

  getTasksFromList(idList: number): Observable<Task[]>{
    return of(this.tasks.filter(t => t.ListId === idList));
  }

  addTask(task: Task){
    this.tasks.push(task);
  }

  updateTask(task: Task, content: string){
    this.tasks[this.tasks.findIndex(e => e.Id === task.Id)].Content = content;
  }

  removeTask(task: Task){
    this.tasks
      .splice
      (
        this.tasks.findIndex(
          e =>
            e.Id === task.Id
        )
      , 1);
  }

}
