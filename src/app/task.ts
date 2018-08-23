export class Task {

  Id: number;
  Content: string;
  ListId: number;

  constructor(id?: number, content?:string, listId?: number)
  {
    this.Id = id === undefined ? 0 : id;
    this.Content = content === undefined ? '' : content;
    this.ListId = listId === undefined ? 0 : listId;
  }

}
