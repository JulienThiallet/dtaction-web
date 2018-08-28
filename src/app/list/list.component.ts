import { Component, OnInit, Input } from '@angular/core';

import { List } from '../list';
import { ListService } from '../list.service';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: List;
  tasks: Array<Task>;

  canBeModified: Array<boolean>;
  canAdd: boolean;
  newContent: Array<string>;
  content: string;

  constructor(private serviceList: ListService, private serviceTask: TaskService) {
    this.list = new List();
    this.tasks = new Array<Task>();
    this.canBeModified = new Array<boolean>();
    console.log('avant', this.list.Id);
    this.getList();
    console.log('apres', this.list.Id);
    //this.list.Id != -1 ?  : ;
    this.newContent = new Array<string>();
    this.canAdd = false;
    console.log("ça marche pas ");

  }

  ngOnInit() {

  }

  async getList()
  { 
    this.serviceList.getListsForAUser(parseInt(sessionStorage.getItem('Id'), 10)).subscribe(u => console.log(u));
    await this.serviceList.getListsForAUser(parseInt(sessionStorage.getItem('Id'), 10)).subscribe(u => u[0] != undefined ? this.listExist(u[0]) : ( console.log('avant1'), this.list.Id = -1, this.list.Title = 'SuperList10', this.tasks = new Array<Task>(), console.log(parseInt(sessionStorage.getItem('Id'), 10)), this.list.IdUser = parseInt(sessionStorage.getItem('Id'), 10), console.log(this.list.IdUser), this.serviceList.addList(this.list), this.serviceList.getLists().subscribe(l => this.list.Id = l[l.length-1].Id)));
  }

  listExist(u: List) {
    this.list = u; 
    this.serviceTask.getTasksFromList(this.list.Id).subscribe(t => this.tasks = t);
  }

  removeTask(task: Task){
    let locationLocal : number = this.tasks.findIndex(t => t.Id === task.Id);
    let location : number = task.Id;
    this.serviceTask.getTasksFromList(this.list.Id).subscribe(t => task.Id = t[locationLocal].Id);
    this.serviceTask.removeTask(task);

    this.tasks.splice
      (
        this.tasks.findIndex(
          e => {
            return e.Id === location;
          }
       )
      , 1);
  }

  toggleUpdateInput(task: Task){
    let location : number = this.tasks.findIndex(t => t.Id === task.Id);
    this.canBeModified[location] !== true ? this.canBeModified[location] = true : this.canBeModified[location] = false;
  }

  toggleAddInput(){
    this.canAdd === false ? this.canAdd = true : this.canAdd = false;
  }

  updateTask(task: Task){
    let locationLocal : number = this.tasks.findIndex(t => t.Id === task.Id);
    let location : number = task.Id;
    task.Content = this.newContent[task.Id];
    this.serviceTask.getTasksFromList(this.list.Id).subscribe(t => task.Id = t[locationLocal].Id);
    this.serviceTask.getTasksFromList(this.list.Id).subscribe(t => console.log(t));
    this.serviceTask.updateTask(task);
    this.canBeModified[locationLocal] = false;
    this.newContent[location] = '';
  }


  addTask(){
    let task: Task = new Task();

    task.Content = this.content;
    task.IdList = this.list.Id;

    this.content = '';
    this.canAdd = false;
    this.list
    this.serviceTask.addTask(task);
    this.tasks.push(task);
  }

  styleDisplayUpdate(task: Task){
    return this.canBeModified[this.tasks.findIndex(t => task.Id === t.Id)] ? 'block' : 'none';
  }

  styleDisplayAdd(){
    return this.canAdd ? 'block' : 'none';

  }

}
