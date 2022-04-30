import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Login } from 'src/app/_models/login';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials:Login={
    username:"",
    password:""
  };
  errorMsg:string="";

  sub:Subscription|null=null;
  role:string="";
  token:string="";

  constructor(public router:Router, public loginSrv:LoginService, private data:DataService) { }

  ngOnInit() {
  }

  signIn(){
    this.sub = this.loginSrv.checkCredentials(this.credentials.username, this.credentials.password).subscribe(
      data=>{
        this.token = data.token;
        // console.log(data);
        if(data.message.includes("admin")){
          this.role = "admin";
          this.router.navigateByUrl("/admin/events");
        }
        if(data.message.includes("student")){
          this.role = "student";
          let id = JSON.parse(atob(this.token.split('.')[1])).id;
          this.data.assignStudentID(id);
          this.router.navigateByUrl("/student/home/"+ id);
        }
        if(data.message.includes("speaker")){
          this.role = "speaker";
          let id = JSON.parse(atob(this.token.split('.')[1])).id;
          this.data.assignSpeakerID(id);
          this.router.navigateByUrl("/speaker/home/"+ id);
        }
        // if logged in add the token and role to the local storage
        if(this.role){
          sessionStorage.setItem("role",this.role);
          sessionStorage.setItem("token",this.token);
          // change logged in the appcomponent
          this.data.atLogin(true,this.role);
        }
      },
      error => {
        // console.log(error)
        this.errorMsg = error.error.message;
          setTimeout(()=>this.errorMsg = "",3000);
      }
    );
  }

}
