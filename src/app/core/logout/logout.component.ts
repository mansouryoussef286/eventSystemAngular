import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router:Router, private data:DataService) { }

  ngOnInit(): void {
    // logout logic and deassign the session and all
    sessionStorage.clear();
    this.data.atLogin(false,"none");
    this.router.navigateByUrl("/login");
  }

}
