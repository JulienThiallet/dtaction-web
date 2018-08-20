import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  signupForm: FormGroup;
  pass: string;

  constructor(private service: UserService, private fb: FormBuilder) {
    this.user = new User();
    this.createForm();

   }

  ngOnInit() {
  }

  createForm(): void {
    this.signupForm = this.fb.group({
      Pseudo:['pseudo', Validators.required],
      Mail:['mail', Validators.required],
      Password:['password', Validators.required],
      VerificationPassword:['verificationPassword', Validators.required]
    })
  }
}
