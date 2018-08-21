import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isVisible: boolean;

  constructor() {
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

}
