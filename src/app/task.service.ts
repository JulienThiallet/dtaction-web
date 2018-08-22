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

  // getUser(pseudo: string, password: string): Observable<Task>{
  //   var res = Task.find( u => u.Pseudo === pseudo && u.Password === password);

  //   this.task = res;

  //   return of(this.task);
  // }

  getTasks(): Observable<Task[]>{
    return of(this.tasks);
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
            e.Content === task.Content
            &&
            e.Id === task.Id
        )
      , 1);
  }

}
