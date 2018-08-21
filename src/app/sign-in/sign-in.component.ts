import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User;

  signinForm: FormGroup;

  @Output() close = new EventEmitter();

  constructor(private service: UserService, private fb: FormBuilder) {
    this.createForm();
    this.user = new User();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.signinForm = this.fb.group({
      pseudo: ['username', Validators.required],
      password: ['password', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.service.getUser(this.user.Pseudo, this.user.Password));
  }

  onClose(){
    this.close.emit();
  }
}
