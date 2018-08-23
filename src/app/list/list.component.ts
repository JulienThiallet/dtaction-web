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

  canBeModified: Array<boolean>;
  canAdd: boolean;
  newContent: Array<string>;
  content: string;

  constructor(private serviceList: ListService, private serviceTask: TaskService) {
    serviceList.getListsForAUser(parseInt(sessionStorage.getItem('Id'), 10)).subscribe(u => this.list = u);
    this.canBeModified = new Array<boolean>();
    this.newContent = new Array<string>();
    this.canAdd = false;
    for(let i: number = 0; i < this.list.Tasks.length; i++){
      this.canBeModified[i] = false;
    }
  }

  ngOnInit() {
  }

  removeTask(task: Task){
    this.serviceTask.removeTask(task);

    this.list.Tasks.splice
      (
        this.list.Tasks.findIndex(
          e => {
            return e.Id === task.Id;
          }
       )
      , 1);
  }

  toggleUpdateInput(task: Task){
    let location : number = this.list.Tasks.findIndex(t => t.Id === task.Id);
    this.canBeModified[location] === false ? this.canBeModified[location] = true : this.canBeModified[location] = false;
  }

  toggleAddInput(){
    this.canAdd === false ? this.canAdd = true : this.canAdd = false;
  }

  updateTask(task: Task){
    let location : number = this.list.Tasks.findIndex(t => t.Id === task.Id);

    this.serviceTask.updateTask(task, this.newContent[task.Id]);
    this.newContent[task.Id] = '';
    this.canBeModified[location] = false;
  }


  addTask(){
    let task: Task = new Task();

    this.serviceTask.getTasks().subscribe(tasks => task.Id = tasks[tasks.length-1].Id + 1);
    task.Content = this.content;
    task.ListId = this.list.Id;

    this.content = '';
    this.canAdd = false;

    this.serviceTask.addTask(task);
    this.list.Tasks.push(task);
  }

  styleDisplayUpdate(task: Task){
    return this.canBeModified[this.list.Tasks.findIndex(t => task.Id === t.Id)] ? 'block' : 'none';
  }

  styleDisplayAdd(){
    return this.canAdd ? 'block' : 'none';

  }

}
