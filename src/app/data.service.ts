import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private flagSource = new BehaviorSubject<boolean>(false);
  flag = this.flagSource.asObservable();

  private roleSource = new BehaviorSubject<string>("none");
  role = this.roleSource.asObservable();

  private studentIDSource = new BehaviorSubject<number>(0);
  studentID = this.studentIDSource.asObservable();

  private speakerIDSource = new BehaviorSubject<string>("");
  speakerID = this.speakerIDSource.asObservable();

  constructor() { 
    // re assign the behaviour subject as it disappears after any reload to the page
    // re assign the role
    let token = sessionStorage.getItem("token");
    let encryptedToken= token?.split('.')[1];
    let ID;
    if(encryptedToken){
      let obj = JSON.parse(atob(encryptedToken));
      ID=obj.id;
    }
    this.flagSource.next(!!token);
    let role = sessionStorage.getItem("role");
    if(role=="student"){
      this.roleSource.next(role);
      this.studentIDSource.next(ID)
    } 
    if(role=="speaker"){
      this.roleSource.next(role);
      this.speakerIDSource.next(ID)
    } 
    if(role=="admin") this.roleSource.next(role);
    // re assign the id

  }

  atLogin(flag: boolean, role:string) {
    this.flagSource.next(flag);
    this.roleSource.next(role);
  }
  assignStudentID(id:number){
    // console.log("id assigned "+ id);
    this.studentIDSource.next(id);
  }
  assignSpeakerID(id:string){
    // console.log("id assigned "+ id);
    this.speakerIDSource.next(id);
  }
}
