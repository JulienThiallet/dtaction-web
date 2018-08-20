export class Utilisateur {
    Id: number;
    Pseudo: string;
    Mail: string;
    Password: string;
    ImageProfil: string;

    constructor(id?: number, pseudo?: string, mail?: string, password?: string, imageProfil?: string)
    {
        this.Id = id === undefined ? 0 : id;
        this.Pseudo = pseudo === undefined ? '' : pseudo;
        this.Mail = mail === undefined ? '' : mail;
        this.Password = password === undefined ? '' : password;
        this.ImageProfil = imageProfil === undefined ? '' : imageProfil;
    }
}

