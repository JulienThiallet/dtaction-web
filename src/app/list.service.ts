import { Injectable } from '@angular/core';
import { List } from './list';
import { LISTS } from './mock-list';
import { Observable, of } from 'rxjs';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  lists: Array<List>;
  list: List;

  constructor(private serviceTask: TaskService) {
    this.lists = LISTS;
  }

  getList(): Observable<List>{
    return of(this.list);
  }

  getListsForAUser(idUser: number):Observable<List>{
    this.list = this.lists.find(l => l.UserId === idUser);
    this.serviceTask.getTasksFromList(this.list.Id).subscribe(l => this.list.Tasks = l);
    return of(this.list);
  }

  getListById(id: number):Observable<List>{
    return of(this.lists.find(l => l.Id === id));
  }

  getLists(): Observable<List[]>{
    return of(this.lists);
  }

  addList(list: List){
    this.lists.push(list);
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
