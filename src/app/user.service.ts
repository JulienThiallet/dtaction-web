import { Injectable } from '@angular/core';
import { User } from './user';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;
  user: User;

  constructor(private http: HttpClient) {
    this.users = new Array<User>();
  }

  getUserByPseudo(pseudo: string): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.get<User>('http://dtaction.azurewebsites.net/api/user/getbypseudo/'+pseudo, httpOptions);
    // let user: User = this.users.find(u => u.Pseudo === pseudo);

    // return of(user);
  }

  getUser(pseudo: string, password: string): Observable<User>{
   const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    //this.getUsers().subscribe(u => u.find(user => user.Pseudo === pseudo && user.Password === password));
    return this.http.get<User>('http://dtaction.azurewebsites.net/api/user/getbypseudopsw/'+pseudo+'/'+password, httpOptions);
  }

  getUsers(): Observable<User[]>{
    // return of(this.users);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.get<User[]>('http://dtaction.azurewebsites.net/api/user', httpOptions);
  }

  getLastUser(): Observable<User>{
    // return of(this.users);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return this.http.get<User>('http://dtaction.azurewebsites.net/api/getlastuser', httpOptions);
  }

  addUser(user: User): Observable<User>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    this.http.post<User>('http://dtaction.azurewebsites.net/api/user', user, httpOptions).subscribe();

    return this.getLastUser();
    
  }

}
