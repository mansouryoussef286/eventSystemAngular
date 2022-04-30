import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  studentBaseUrl:string= "http://localhost:2525/students";
  speakerBaseUrl:string= "http://localhost:2525/speakers";
  
  constructor(public http:HttpClient) { }

  checkStudentCredentials(student:Student){
    return this.http.post<{message: string ,data: string}>(this.studentBaseUrl, {email: student.Email, password: student.password});
  }
  checkSpeakerCredentials(speaker:Speaker){
    return this.http.post<{message: string ,speaker: Speaker}>(this.speakerBaseUrl, {
      email: speaker.Email, 
      password: speaker.password,
      username: speaker.username,
      address:{
        city: speaker.address.city,
        street: speaker.address.street,
        building: speaker.address.building,
      }
    });
  }
}
