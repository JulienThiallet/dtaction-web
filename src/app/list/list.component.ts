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
    this.list = this.serviceList.list;
    this.tasks = new Array<Task>();
    this.list.Id != -1 ? this.listExist() : (this.tasks = new Array<Task>(), this.serviceList.addList(this.list), this.serviceList.getLists().subscribe(l => this.list.Id = l[l.length].Id));
    this.newContent = new Array<string>();
    this.canAdd = false;


  }

  ngOnInit() {

  }

  listExist() {
    this.serviceTask.getTasksFromList(this.list.Id).subscribe(t => this.tasks = t);
    this.canBeModified = new Array<boolean>(false);
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
