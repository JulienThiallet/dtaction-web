import { Task } from './task';

export class List {
  Id: number;
  Title: string;
  UserId: number;
  Tasks: Array<Task>;

  constructor(id?: number, title?: string, userId?: number, tasks?: Array<Task>)
  {
    this.Id = id === undefined ? 0 : id;
    this.Title = title === undefined ? '' : title;
    this.UserId = userId === undefined ? 0 : userId;
    this.Tasks = tasks === undefined ? new Array<Task>() : tasks;
  }

}
