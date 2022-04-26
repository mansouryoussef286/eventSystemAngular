import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { Student } from 'src/app/_models/student';
import { Event } from 'src/app/_models/event';
import { EventService } from 'src/app/event.service';
import { StudentService } from 'src/app/student.service';
import { SpeakerService } from 'src/app/speaker.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event:Event = new Event(0,"",new Date(),new Speaker("","","","",{city:"",street:"",building:""}),[], []);

  errorMsg:string="";
  successMsg:string="";

  showMainSpeaker:boolean=false;
  showAllSpeakers:boolean=false;
  showAllStudents:boolean=false;

  allStudents:Student[]=[];
  allSpeakers:Speaker[]=[];
  // allStudentsIDs:number[]=[];
  constructor(public EventSrv:EventService, public stdSrv:StudentService, 
    public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.allStudents = this.stdSrv.getStudents();
    this.allSpeakers = this.speakerSrv.getSpeakers();
  }

  add():void{
    if(!this.event.title || !this.event.date || !this.event.mainSpeaker)
    {
      this.errorMsg = "please fill the form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
        this.EventSrv.addEvent(this.event);
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
    console.log("addstudent")
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
