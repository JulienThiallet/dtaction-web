import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User;
  isValid: boolean;

  signinForm: FormGroup;

  @Output() close = new EventEmitter();

  constructor(private service: UserService, private fb: FormBuilder, private router: Router) {
    this.createForm();
    this.user = new User();
    this.isValid = false;
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
    this.service.getUser(this.user.Pseudo, this.user.Password).subscribe(u => (u != undefined && u.Pseudo !='') ? this.validAndPutUserId(u.Id) : this.isValid = false);

    if(this.isValid)
    {
      sessionStorage.setItem('Id', this.user.Id.toString());
      this.router.navigate(['/list']);
    }
  }

  validAndPutUserId(id: number){
    this.user.Id = id;
    this.isValid = true;
  }

  onClose(){
    this.close.emit();
  }
}
