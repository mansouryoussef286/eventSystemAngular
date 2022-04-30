import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  studentID:number=0;
  speakerID:string=""; 

  loggedIn:boolean=true;
  roleSubscription: Subscription;
  studentIDSubscription: Subscription;
  speakerIDSubscription: Subscription;

  // isStudent:boolean=true;
  // isSpeaker:boolean=true;
  // isAdmin:boolean=true;

  role:string="none";

  constructor(private data: DataService) { 
    this.roleSubscription = this.data.role.subscribe(role => this.role = role);
    this.studentIDSubscription = this.data.studentID.subscribe(id => this.studentID = id);
    this.speakerIDSubscription = this.data.speakerID.subscribe(id => this.speakerID = id);
    
  }

  ngOnDestroy() {
    this.roleSubscription.unsubscribe();
    this.studentIDSubscription.unsubscribe();
    this.speakerIDSubscription.unsubscribe();
  }  

  
  ngOnInit(): void {
  }

}
