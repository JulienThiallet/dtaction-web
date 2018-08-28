import { Injectable } from '@angular/core';
import { Task } from './task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task: Task;

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.get<Task[]>('http://dtaction.azurewebsites.net/api/task', httpOptions);
  }

  getTasksFromList(idList: number): Observable<Task[]>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.get<Task[]>(`http://dtaction.azurewebsites.net/api/getbylist/${idList}`, httpOptions);
  }

  addTask(task: Task){
    //this.tasks.push(task);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    this.http.post<Task>('http://dtaction.azurewebsites.net/api/task', task, httpOptions).subscribe();
  }

  updateTask(task: Task){
    //this.tasks[this.tasks.findIndex(e => e.Id === task.Id)].Content = content;
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    this.http.put<Task>(`http://dtaction.azurewebsites.net/api/task/${task.Id}`, task, httpOptions).subscribe();
  }

  removeTask(task: Task){
    // this.tasks
    //   .splice
    //   (
    //     this.tasks.findIndex(
    //       e =>
    //         e.Id === task.Id
    //     )
    //   , 1);
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    this.http.delete<Task>(`http://dtaction.azurewebsites.net/api/task/${task.Id}`, httpOptions).subscribe();
  }

}
