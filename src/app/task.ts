export class Task {

  Id: number;
  Content: string;

  constructor(id?: number, content?:string)
  {
    this.Id = id === undefined ? 0 : id;
    this.Content = content === undefined ? '' : content;
  }

}
