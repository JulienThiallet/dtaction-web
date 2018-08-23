import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { USERS } from '../mock-user';

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

  constructor(private service: UserService, private router: Router) {
    this.user = new User();
    this.flag = false;
   }

  ngOnInit() {}

  verifPass(){
    if (this.pass !== this.user.Password)
    {
      this.flag = true;
    }
    else
    {
      this.flag = false;
    }
  }

  isUserAlreadyExist(){
    let alreadyExist: boolean;
    this.service.getUserByPseudo(this.user.Pseudo).subscribe(u => (u != undefined && u.Pseudo !='') ? alreadyExist = true : alreadyExist = false);

    alreadyExist ? this.userExist = true : this.userExist = false;
  }

  displayUserAlreadyExist(){
    return this.userExist ? 'block' : 'none';
  }

  onSubmit(){
    if(!this.userExist){
      this.userExist = false;
      this.service.addUser(this.user);
      sessionStorage.setItem("Id", this.user.Id.toString());
      this.user = new User();
      this.router.navigate(['./list']);
    }
  }

}
