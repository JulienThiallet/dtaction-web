export class Task {

  Id: number;
  Content: string;
  Position: number;
  IdList: number;

  constructor(id?: number, content?:string, position?: number, listId?: number)
  {
    this.Id = id === undefined ? 0 : id;
    this.Content = content === undefined ? '' : content;
    this.Position = position === undefined ? 0 : position;
    this.IdList = listId === undefined ? 0 : listId;
  }

}
