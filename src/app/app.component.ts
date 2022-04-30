import { Component, Input, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginComponent } from './core/login/login.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn:boolean = false;

  title = 'project';

  message:string="";
  logInSubscription: Subscription;

  constructor(private data: DataService) { 
    this.logInSubscription = this.data.flag.subscribe(flag => this.loggedIn = flag)
  }

  ngOnDestroy() {
    this.logInSubscription.unsubscribe();
  }

}
