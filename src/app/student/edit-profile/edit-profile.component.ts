import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  studentID:number=0;
  student:Student=new Student(0,"","");
  confirmPw:string="";
  errorMsg:string="";
  successMsg:string="";
  constructor(public stdSrv:StudentService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.studentID = this.ar.snapshot.params['id'];
    this.stdSrv.getStudentByID2(this.studentID).subscribe(
      a=>{
      console.log(a);
      this.student = a.data[0];
      },
      error=>{console.log(error)}
    );
  }

  update():void{
    if(!this.confirmPw || !this.student.password || !this.student.Email)
    {
      this.errorMsg = "please fill the form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
      if(this.student.password != this.confirmPw && this.confirmPw!=""){
        this.errorMsg = "passwords dont match";
        setTimeout(()=>{
          this.errorMsg = "";
        },3000);
      }else{
        this.stdSrv.updateStudent(this.student._id, this.student);
        this.successMsg = "info updated successfully";
        setTimeout(()=>{
          this.router.navigateByUrl("/student/home/"+ this.studentID);
        },2000);
      }
    }
  }
}
