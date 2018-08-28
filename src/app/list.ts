import { Task } from './task';

export class List {
  Id: number;
  Title: string;
  Position: number;
  IdUser: number;

  constructor(id?: number, title?: string, position?: number, userId?: number)
  {
    this.Id = id === undefined ? 0 : id;
    this.Title = title === undefined ? '' : title;
    this.Position = position === undefined ? 0 : position;
    this.IdUser = userId === undefined ? 0 : userId;
  }

}
