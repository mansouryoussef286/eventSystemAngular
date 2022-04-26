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
  studentID:number = 0;
  searchText:string = "";
  constructor(public stdSrv:StudentService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentID = this.ar.snapshot.params['id'];
    this.students = this.stdSrv.getStudents();
  }

  deletStudent(student:Student){
    if(confirm(`delete student: ${student.Email}?`)){
      this.stdSrv.deleteStudent(student._id);
      alert("student deleted!");
    }
  }

}
