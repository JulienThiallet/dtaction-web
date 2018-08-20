export class User {

    Id: number;
    Pseudo: string;
    Mail: string;
    Password: string;
    PictureProfil: string;
    
    constructor(id?: number, pseudo?: string, mail?: string, password?: string, pictureProfil?: string)
    {
        this.Id = id === undefined ? 0 : id;
        this.Pseudo = pseudo === undefined ? '' : pseudo;
        this.Mail = mail === undefined ? '' : mail;
        this.Password = password === undefined ? '' : password;
        this.PictureProfil = pictureProfil === undefined ? '' : pictureProfil;
    }
}

