import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { ListService } from '../list.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  signupForm: FormGroup;
  pass: string;
  flag: boolean;
  flagForm: boolean;

  userExist: boolean;

  constructor(private service: UserService, private serviceList: ListService, private router: Router) {
    this.user = new User();
    this.flag = false;
   }

  ngOnInit() {}

  verifPass(){
    if (this.pass !== this.user.Psw)
    {
      this.flag = true;
    }
    else
    {
      this.flag = false;
    }
  }

  isUserAlreadyExist(){
    this.service.getUserByPseudo(this.user.Pseudo).subscribe(u => (u != undefined && u.Pseudo !='') ? this.userExist = true : this.userExist = false);
  }

  displayUserAlreadyExist(){
    return this.userExist ? 'block' : 'none';
  }

  async createNewList(){
    // this.serviceList.list.UserId = id;
    // this.serviceList.addList(this.serviceList.list);
    console.log('milieu début', this.user.Id);
    await this.service.getLastUser().subscribe(u => console.log(u));
    console.log('milieu fin', this.user.Id);
  }

  async addUser(){
    await this.service.addUser(this.user).subscribe(u => this.service.getLastUser().subscribe(user => sessionStorage.setItem('Id', user.Id.toString())));
  }

  onSubmit(){
    if(!this.userExist){
      this.serviceList.list.Title = 'SuperList';
      this.addUser();
      this.user = new User();
      this.router.navigate(['./list']);
    }
  }

}
