import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DbMockService } from './db-mock.service';
import { Student } from './_models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string= "http://localhost:2525/students/";
  constructor(public dbSrv:DbMockService, public http:HttpClient) { }

  getStudentByID(id:number){
    return this.dbSrv.studentArrayTemp.find(s=>s._id == id)?? new Student(0,"","");
  }
  getStudentByID2(id:number){
    return this.http.get<{message: string ,data: Student[]}>(this.baseUrl + id);
  }
  updateStudent(id:number, student:Student){

  }
  getStudents():Student[]{
    return this.dbSrv.studentArrayTemp;
  }
  deleteStudent(id:number){
    
  }
}
