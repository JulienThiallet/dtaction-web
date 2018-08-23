import { List } from './list';

export class User {

    Id: number;
    Pseudo: string;
    Mail: string;
    Password: string;
    PictureProfil: string;
    Lists: Array<List>;

    constructor(id?: number, pseudo?: string, mail?: string, password?: string, pictureProfil?: string, lists?: Array<List>)
    {
        this.Id = id === undefined ? 0 : id;
        this.Pseudo = pseudo === undefined ? '' : pseudo;
        this.Mail = mail === undefined ? '' : mail;
        this.Password = password === undefined ? '' : password;
        this.PictureProfil = pictureProfil === undefined ? '' : pictureProfil;
        this.Lists = lists === undefined ? new Array<List>() : lists;
    }
}

