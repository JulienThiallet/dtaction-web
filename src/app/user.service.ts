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
    constructor() { 
      this.users = USERS;
    }
  
  getUser(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.push(user);
    USERS.push(user);
  }

}
