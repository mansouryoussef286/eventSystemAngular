import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string= "http://localhost:2525/students/";
  constructor(public http:HttpClient) { }

  getStudentByID(id:number){
    return this.http.get<{message: string ,data: Student[]}>(this.baseUrl + id);
  }
  updateStudent(id:number, student:Student){
    return this.http.put<{message: string}>(this.baseUrl,{
        id: id,
        email: student.Email,
        password: student.password
    });
  }
  getStudents(){
    return this.http.get<{message: string ,data: Student[]}>(this.baseUrl);
  }
  deleteStudent(id:number){
    return this.http.delete<{message: string}>(this.baseUrl + id);
  }
}
