import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private service: UserService) {
    this.user = new User();
    this.flag = false;
   }

  ngOnInit() {
    
  }

  verifPass(){
    console.log('pass ' +this.pass);
    console.log(this.user.Password);
    if (this.pass !== this.user.Password)
    {
      console.log("pas de concordance");
      this.flag = true;
    }
    else 
    {
      this.flag = false;
    }
    console.log("affiche "+this.flag);
  }

 /* verifForm(){
    let b : boolean = !this.flag;
    // on a deja les deux pass idem

  }*/

  onSubmit(){
    this.service.addUser(this.user);
    this.service.getUser().subscribe(u => console.log(u));
    this.user = new User();
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
  debug(){
    const es = this.signupForm.controls['Pseudo'].errors.forEach(e=>console.log(e));
    /*array.forEach(element => {
      console.log(element);
    });;*/
      console.log(" on focus ourt  :  " + es);
  }
}
