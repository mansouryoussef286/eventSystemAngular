import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/_models/login';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';


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

  constructor(public router:Router, public loginSrv:LoginService) { }

  ngOnInit(): void {
  }

  signIn(){
    let logged:boolean = false;
    let loginID= this.loginSrv.checkCredentials(this.credentials.username, this.credentials.password);
    if(loginID != -1 && this.credentials.password && this.credentials.username){
      this.router.navigateByUrl("/speaker/home/"+loginID);
      logged = true;
    }
    if(!logged){
      this.errorMsg = "email or password is incorrect";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }
  }

}
