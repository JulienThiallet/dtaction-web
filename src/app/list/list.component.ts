import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TASKS } from '../mock-task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  tasks: Array<Task>;
  task: Task;

  canBeModified: Array<boolean>;
  canAdd: boolean;
  newContent: Array<string>;
  content: string;

  constructor(private service: TaskService) {
    this.tasks = TASKS;
    this.canBeModified = new Array<boolean>();
    this.newContent = new Array<string>();
    this.canAdd = false;
    for(let i: number = 0; i < TASKS.length; i++){
      this.canBeModified[i] = false;
    }
  }

  ngOnInit() {
  }

  removeTask(task: Task){
    this.service.removeTask(task);
  }

  toggleUpdateInput(task: Task){
    let location : number = TASKS.findIndex(t => t.Id === task.Id);
    this.canBeModified[location] === false ? this.canBeModified[location] = true : this.canBeModified[location] = false;
  }

  toggleAddInput(){
    this.canAdd === false ? this.canAdd = true : this.canAdd = false;
  }

  updateTask(task: Task){
    let location : number = TASKS.findIndex(t => t.Id === task.Id);

    this.service.updateTask(task, this.newContent[task.Id]);
    this.newContent[task.Id] = '';
    this.canBeModified[location] = false;
  }

  addTask(){
    let task: Task = new Task();

    task.Id = TASKS[TASKS.length-1].Id + 1;
    task.Content = this.content;

    this.content = '';
    this.canAdd = false;

    this.service.addTask(task);
  }

  styleDisplayUpdate(task: Task){
    return this.canBeModified[this.tasks.findIndex(t => task.Id === t.Id)] ? 'block' : 'none';
  }

  styleDisplayAdd(){
    return this.canAdd ? 'block' : 'none';

  }

}
