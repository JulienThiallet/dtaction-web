import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isVisible: boolean;

  constructor(private router: Router) {
    this.isVisible = false;
  }

  ngOnInit() {
  }

  displayModal(){
    this.isVisible = true;
  }

  closeModal(){
    this.isVisible = false;
  }

  navigateSignUp()
  {
    this.router.navigate(['/list']);
  }

}
