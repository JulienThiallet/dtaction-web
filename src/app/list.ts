import { Task } from './task';

export class List {
  Id: number;
  Title: string;
  Position: number;
  UserId: number;

  constructor(id?: number, title?: string, position?: number, userId?: number)
  {
    this.Id = id === undefined ? 0 : id;
    this.Title = title === undefined ? '' : title;
    this.Position = position === undefined ? 0 : position;
    this.UserId = userId === undefined ? 0 : userId;
  }

}
