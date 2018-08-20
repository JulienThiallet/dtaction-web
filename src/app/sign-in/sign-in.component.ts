import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private service: UserService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.signinForm = this.fb.group({
      username: ['username', Validators.required],
      password: ['password', Validators.required]
    });
  }

  onSubmit(){
  }

}
