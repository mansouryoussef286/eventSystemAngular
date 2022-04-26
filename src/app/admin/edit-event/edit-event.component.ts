import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { StudentService } from 'src/app/student.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';




@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  eventID:number=0;
  event:Event = new Event(0,
    "event title",
    new Date("2022,1,25"),
    new Speaker("1","speaker@email.com","main speaker name","",{city:"",street:"",building:""}),
    [
      new Speaker("2","speaker@email.com","speaker name 1","",{city:"",street:"",building:""}),
      new Speaker("3","speaker@email.com","speaker name 2","",{city:"",street:"",building:""}),
    ],
    [
      new Student(1,"student@email.com",""),
      new Student(2,"student@email.com",""),
    ]);

  errorMsg:string="";
  successMsg:string="";

  showMainSpeaker:boolean=false;
  showAllSpeakers:boolean=false;
  showAllStudents:boolean=false;

  allStudents:Student[]=[];
  allSpeakers:Speaker[]=[];
  constructor(public EventSrv:EventService, public stdSrv:StudentService, public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.allStudents = this.stdSrv.getStudents();
    this.allSpeakers = this.speakerSrv.getSpeakers();
    this.eventID = this.ar.snapshot.params['id'];
    this.event = this.EventSrv.getEventByID(this.eventID);
  }

  update():void{
    if(!this.event.title || !this.event.date || !this.event.mainSpeaker)
    {
      this.errorMsg = "please fill the form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
        this.EventSrv.updateEvent(this.event._id,this.event);
        this.successMsg = "info updated successfully";
        setTimeout(()=>{
          this.router.navigateByUrl("/admin/events");
        },2000);
    }
  }

  showMainnSpeaker(){
    this.showMainSpeaker = !this.showMainSpeaker? true:false;
    this.showAllSpeakers=false;
    this.showAllStudents=false;
  }
  showSpeakers(){
    this.showAllSpeakers = !this.showAllSpeakers? true:false;
    this.showAllStudents=false;
    this.showMainSpeaker=false;
  }
  showStudents(){
    this.showAllStudents = !this.showAllStudents? true:false;
    this.showAllSpeakers=false;
    this.showMainSpeaker=false;
  }

  addSpeaker(id:string){
    // adding the main speaker
    if(this.showMainSpeaker){
      let newMainSpeaker = this.speakerSrv.getSpeakerByID(id);
      if(newMainSpeaker._id == "0"){
        alert("this speaker is currently unavailable!");
      }
      else{
        this.event.mainSpeaker = newMainSpeaker;
      }
    }else{
      // adding other speakers
      let newSpeaker = this.speakerSrv.getSpeakerByID(id);
      if(newSpeaker._id == "0"){
        alert("this speaker is currently unavailable!");
      }else{
        if(this.event.mainSpeaker._id == newSpeaker._id)
          alert("this is the main speaker already");
        else
          this.event.otherSpeakers.push(newSpeaker);
      }
    }
  }
  removeSpeaker(i:number){
    this.event.otherSpeakers.splice(i,1);
  }

  addStudent(id:number){
    let newStudent = this.stdSrv.getStudentByID(id);
    if(newStudent._id == 0){
      alert("this speaker is currently unavailable!");
    }else{
      this.event.students.push(newStudent);
    }
  }
  removeStudent(i:number){
      this.event.students.splice(i,1);
  }

}
