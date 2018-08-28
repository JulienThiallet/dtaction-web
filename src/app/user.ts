import { List } from './list';

export class User {

    Id: number;
    Pseudo: string;
    Email: string;
    Psw: string;
    Img: string;

    constructor(id?: number, pseudo?: string, mail?: string, password?: string, pictureProfil?: string, lists?: Array<List>)
    {
        this.Id = id === undefined ? 0 : id;
        this.Pseudo = pseudo === undefined ? '' : pseudo;
        this.Email = mail === undefined ? '' : mail;
        this.Psw = password === undefined ? '' : password;
        this.Img = pictureProfil === undefined ? '' : pictureProfil;
    }
}

