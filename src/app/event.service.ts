import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentService } from './student.service';
import { Event } from './_models/event';
import { Speaker } from './_models/speaker';
import { Student } from './_models/student';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsBaseUrl:string= "http://localhost:2525/events/";
  studentEventsBaseUrl:string= "http://localhost:2525/students/events/";
  speakerEventsBaseUrl:string= "http://localhost:2525/speakers/events/";
  constructor(public http:HttpClient) { }

  getEventsByStudentID(id:number){
    return this.http.get<{message:string, data:Event[]}>(this.studentEventsBaseUrl + id);
  }

  getEventsBySpeakerID(id:string){
    return this.http.get<{message:string, data:Event[]}>(this.speakerEventsBaseUrl + id);
  }

  getEventByID(id:number){
    return this.http.get<{message:string, data:Event[]}>(this.eventsBaseUrl + id);
  }

  getEvents(){
    return this.http.get<{message:string, data:Event[]}>(this.eventsBaseUrl);
  }

  deleteEventByID(id:number){
    return this.http.delete<{message:string}>(this.eventsBaseUrl + id);
  }
  updateEvent(id:number, event:Event){
    // prepare the event object that'll be sent to the server 
    let AddEventObj={
      id: id,
      title: "",
      date: "",
      mainSpeakerID: "",
      otherSpeakersID: [""],
      studentsID: [0]
    };
    AddEventObj.title = event.title;
    AddEventObj.date = event.date;
    AddEventObj.mainSpeakerID = event.mainSpeakerID._id;
    AddEventObj.otherSpeakersID.pop();
    event.otherSpeakersID.forEach(os=>{
      AddEventObj.otherSpeakersID.push(os._id);
    });
    AddEventObj.studentsID.pop();
    event.studentsID.forEach(s=>{
      AddEventObj.studentsID.push(s._id);
    });
    return this.http.put<{message:string, data:Event[]}>(this.eventsBaseUrl ,AddEventObj);
  }
  addEvent(event:Event){
    // prepare the event object that'll be sent to the server 
    let AddEventObj={
      // id: 3,
      title: "",
      date: "",
      mainSpeakerID: "",
      otherSpeakersID: [""],
      studentsID: [0]
    };
    AddEventObj.title = event.title;
    AddEventObj.date = event.date;
    AddEventObj.mainSpeakerID = event.mainSpeakerID._id;
    AddEventObj.otherSpeakersID.pop();
    event.otherSpeakersID.forEach(os=>{
      AddEventObj.otherSpeakersID.push(os._id);
    });
    AddEventObj.studentsID.pop();
    event.studentsID.forEach(s=>{
      AddEventObj.studentsID.push(s._id);
    });
    return this.http.post<{message:string, events:Event[]}>(this.eventsBaseUrl ,AddEventObj);
  }

}
