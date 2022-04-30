import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/register-service.service';
import { Student } from 'src/app/_models/student';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student:Student= new Student(0,"","");
  speaker:Speaker= new Speaker("0","","","",{city:"",street:"",building:""});

  confirmPw:string = "";

  studentRegister:boolean = true;
  speakerRegister:boolean = false;
  
  errorMsg="";
  successMsg="";
  
  constructor(public registerSrv:RegisterServiceService, public router:Router) { }

  ngOnInit(): void {
  }

  registerType(){
    this.studentRegister= this.studentRegister?false:true;
    this.speakerRegister= this.speakerRegister?false:true;
  }
  register(){
    if(this.studentRegister){
      if(this.student.Email && this.student.password && this.confirmPw){
        if(this.student.password == this.confirmPw){
          this.registerSrv.checkStudentCredentials(this.student).subscribe(
            data=>{
              if(data.message.includes("added")){
                this.successMsg = "registered successfully";
                setTimeout(()=>{
                  this.successMsg = "";
                  this.router.navigateByUrl("/login");
                },2000);
              }
            },
            error=>{
              this.errorMsg = error.error.message;
              setTimeout(()=>{
                this.errorMsg = "";
              },3000);
            }
          )
        }else{
          this.errorMsg = "passwords dont match";
          setTimeout(()=>{
            this.errorMsg = "";
          },3000);
        }
      }else{
        this.errorMsg = "please fill the form";
          setTimeout(()=>{
            this.errorMsg = "";
          },3000);
      }
    }
    else{
      if(this.speaker.Email && this.speaker.password && this.confirmPw && this.speaker.username){
        if(this.speaker.password == this.confirmPw){
          this.registerSrv.checkSpeakerCredentials(this.speaker).subscribe(
            data=>{
              console.log(data);
              if(data.message.includes("added")){
                this.successMsg = "registered successfully";
                setTimeout(()=>{
                  this.successMsg = "";
                  this.router.navigateByUrl("/login");
                },2000);
              }
            },
            error=>{
              this.errorMsg = error.error.message;
              setTimeout(()=>{
                this.errorMsg = "";
              },3000);
            }
          );
        }else{
          this.errorMsg = "passwords dont match";
          setTimeout(()=>{
            this.errorMsg = "";
          },3000);
        }
      }else{
        this.errorMsg = "please fill the form";
          setTimeout(()=>{
            this.errorMsg = "";
          },3000);
      }
    }
  }
}
