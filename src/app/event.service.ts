import { Injectable } from '@angular/core';
import { DbMockService } from './db-mock.service';
import { StudentService } from './student.service';
import { Event } from './_models/event';
import { Speaker } from './_models/speaker';
import { Student } from './_models/student';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  // eventArrayTemp:Event[]=[
  //     new Event(0,"first event title",new Date("2022-10-2"),
  //       new Speaker("1","speaker@email.com","youssef","",{city:"",street:"",building:""}),
  //       [
  //         new Speaker("2","speaker@email.com","speaker name 1","",{city:"",street:"",building:""}),
  //         new Speaker("3","speaker@email.com","speaker name 2","",{city:"",street:"",building:""}),
  //       ],
  //       [
  //         new Student(1,"student1@email.com",""),
  //         new Student(2,"student2@email.com",""),
  //         new Student(3,"student3@email.com",""),
  //         new Student(4,"student4@email.com",""),
  //       ]),
  //       new Event(1,"second event title",new Date("2022-8-23"),
  //       new Speaker("10","speaker@email.com","torky","",{city:"",street:"",building:""}),
  //       [
  //         new Speaker("2","speaker@email.com","speaker name 1","",{city:"",street:"",building:""}),
  //         new Speaker("3","speaker@email.com","speaker name 2","",{city:"",street:"",building:""}),
  //       ],
  //       [
  //         new Student(1,"student1@email.com",""),
  //         new Student(2,"student2@email.com",""),
  //         new Student(3,"student3@email.com",""),
  //         new Student(4,"student4@email.com",""),
  //         new Student(5,"student5@email.com",""),
  //         new Student(6,"student6@email.com",""),
  //       ]),
  //   ]
  constructor(public dbSrv:DbMockService) { }

  getEventsByStudentID(id:number):Event[]{
    return this.dbSrv.getEventsByStudentID(id);
  }

  getEventByID(id:number){
    return this.dbSrv.eventArrayTemp[id];
  }

  getEvents(){
    return this.dbSrv.eventArrayTemp;
  }

  deleteEventByID(id:number){
    
  }
  updateEvent(id:number, event:Event){
    
  }
  addEvent(event:Event){
    this.dbSrv.addEvent(event);
  }

}
