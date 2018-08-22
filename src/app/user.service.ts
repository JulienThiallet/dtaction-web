import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-user';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User>;
  user: User;

  constructor() {
    this.users = USERS;
  }

  getUser(pseudo: string, password: string): Observable<User>{
    var res = USERS.find( u => u.Pseudo === pseudo && u.Password === password);

    this.user = res;

    return of(this.user);
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.push(user);
  }

}
