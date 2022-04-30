import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css']
})
export class AdminStudentsComponent implements OnInit {

  students:Student[]=[];
  searchText:string = "";
  constructor(public stdSrv:StudentService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.stdSrv.getStudents().subscribe(
      data=>{
        // console.log(data);
        this.students = data.data;
      },
      error=>{
        alert(error.error.message);
      }
    );
  }

  deletStudent(student:Student){
    if(confirm(`delete student: ${student.Email}?`)){
      this.stdSrv.deleteStudent(student._id).subscribe(
        data=>{
          // console.log(data);
          if(data.message.includes("delete")){
            alert("student deleted!");
            this.ngOnInit();
          }
        },
        error=>{
          alert(error.error.message);
        }
      );
    }
  }

}
