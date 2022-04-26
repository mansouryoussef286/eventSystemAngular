import { Injectable } from '@angular/core';
import { Event } from './_models/event';
import { Speaker } from './_models/speaker';
import { Student } from './_models/student';




@Injectable({
  providedIn: 'root'
})
export class DbMockService {

  std1 = new Student(1,"student1@email.com","");
  std2 = new Student(2,"student2@email.com","");
  std3 = new Student(3,"student3@email.com","");
  std4 = new Student(4,"student4@email.com","");
  std5 = new Student(5,"student5@email.com","");
  std6 = new Student(6,"student6@email.com","");
  std7 = new Student(7,"student7@email.com","");
  std8 = new Student(8,"student8@email.com","");

  speaker1 = new Speaker("1","speaker@email.com","youssef","",{city:"alexandria",street:"vector",building:"23"});
  speaker2 = new Speaker("2","speaker@email.com","hamada","",{city:"",street:"",building:""});
  speaker3 = new Speaker("3","speaker@email.com","mahmoud","",{city:"",street:"",building:""});
  speaker4 = new Speaker("4","speaker@email.com","torky","",{city:"",street:"",building:""});


  public eventArrayTemp:Event[]=[
    new Event(0,"first event title",new Date("2022-10-2"),
    this.speaker1,
    [
      this.speaker2,
      this.speaker3
    ],
    [
        this.std1,
        this.std2,
        this.std3,
        this.std4,
    ]),
    new Event(1,"second event title",new Date("2022-8-23"),
    this.speaker4,
    [
      this.speaker2
    ],
    [
      this.std1,
      this.std2,
      this.std3,
      this.std4,
      this.std5,
    ]),       
    ]

    public speakerArrayTemp:Speaker[]=[
      this.speaker1,
      this.speaker2,
      this.speaker3,
      this.speaker4
    ]

    public studentArrayTemp:Student[] = [
      this.std1,
      this.std2,
      this.std3,
      this.std4,
      this.std5,
      this.std6,
      this.std7,
      this.std8,
    ];    
  constructor() { }

  getEventsByStudentID(id:number):Event[]{
    let event:Event[]=[];
    this.eventArrayTemp.forEach(e=>{
      e.students.forEach(s=>{
        if(s._id== id)
        event.push(e);
      })
    });
    return event;
  }

  addEvent(event:Event){
    this.eventArrayTemp.push(event);
  }
}
