import { Injectable } from '@angular/core';
import { List } from './list';
import { Observable, of } from 'rxjs';
import { TaskService } from './task.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lists: Array<List>;
  list: List;

  constructor(private serviceTask: TaskService, private http: HttpClient) {
    this.list = new List();
    this.list.Id = -1;
  }

  getList(): Observable<List>{
    return of(this.list);
  }

  getListsForAUser(idUser: number):Observable<List[]>{
    // this.list = this.lists.find(l => l.UserId === idUser);
    // this.serviceTask.getTasksFromList(this.list.Id).subscribe(l => this.list.Tasks = l);
    // this.serviceTask.getTasks().subscribe(t => this.list.Tasks.filter(task => task.ListId = this.list.Id));
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.get<List[]>(`http://dtaction.azurewebsites.net/api/getbyuser/${idUser}`, httpOptions);
  }

  getListById(id: number):Observable<List>{
    return of(this.lists.find(l => l.Id === id));
  }

  getLists(): Observable<List[]>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.get<List[]>(`http://dtaction.azurewebsites.net/api/list`, httpOptions);
  }

  addList(list: List){
    //this.lists.push(list);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    this.http.post<List>('http://dtaction.azurewebsites.net/api/list', list, httpOptions).subscribe();
  }

  updateList(list: List, title: string){
    this.lists[this.lists.findIndex(l => l.Id === list.Id)].Title = title;
  }

  removeList(list: List){
    this.lists
      .splice
      (
        this.lists.findIndex(
          l =>
            l.Title === list.Title
            &&
            l.Id === list.Id
        )
      , 1);
  }
}
