import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  studentID:number=0;
  loggedIn:boolean=true;

  isStudent:boolean=true;
  isSpeaker:boolean=true;
  isAdmin:boolean=true;

  
  constructor() { }

  ngOnInit(): void {
    this.studentID = 1;
  }

}
