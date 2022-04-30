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

  event:Event = new Event(0,"","",new Speaker("","","","",{city:"",street:"",building:""}),[], []);

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
    // get all students
    this.stdSrv.getStudents().subscribe(
      data=>{
        // console.log(data.data);
        this.allStudents = data.data;
      },
      error=>{
        alert(error.error.message);}
    );
    // get all speakers
    this.speakerSrv.getSpeakers().subscribe(
      data=>{
        // console.log(data.data);
        this.allSpeakers = data.data;
      },
      error=>{
        alert(error.error.message);}
    );
  }

  add():void{
    console.log(this.event);
    
    if(!this.event.title || !this.event.date || !this.event.mainSpeakerID)
    {
      this.errorMsg = "please fill the form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
        this.EventSrv.addEvent(this.event).subscribe(
          data=>{
            // console.log(data);
            this.successMsg = "info updated successfully";
            setTimeout(()=>{
              this.router.navigateByUrl("/admin/events");
            },2000);
          },
          error=>{
            this.errorMsg = error.error.message;
            setTimeout(()=>{
              this.errorMsg = "";
            },3000);
          }
        );
        
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
    let newMainSpeaker:Speaker;
    this.speakerSrv.getSpeakerByID(id).subscribe(
      data=>{
        // console.log(data.data);
        newMainSpeaker = data.data[0];
        if(newMainSpeaker._id == "0"){
          alert("this speaker is currently unavailable!");
        }
        else{
          this.event.mainSpeakerID = newMainSpeaker;
        }
      },
      error=>{
        alert(error.error.message);}
    );
    }else{
      let newSpeaker:Speaker;
      // adding other speakers
      this.speakerSrv.getSpeakerByID(id).subscribe(
        data=>{
          // console.log(data.data);
          newSpeaker = data.data[0];
          if(newSpeaker._id == "0"){
            alert("this speaker is currently unavailable!");
          }else{
            if(this.event.mainSpeakerID._id == newSpeaker._id)
              alert("this is the main speaker already");
            else
              this.event.otherSpeakersID.push(newSpeaker);
          }
        },
        error=>{
          alert(error.error.message);}
      );
    }
  }
  removeSpeaker(i:number){
    this.event.otherSpeakersID.splice(i,1);
  }

  addStudent(id:number){
    let newStudent:Student;
    this.stdSrv.getStudentByID(id).subscribe(
      data=>{
        // console.log(data.data);
        newStudent = data.data[0];
        if(newStudent._id == 0){
          alert("this speaker is currently unavailable!");
        }else{
          this.event.studentsID.push(newStudent);
        }
      },
      error=>{
        alert(error.error.message);}
    );
  }
  removeStudent(i:number){
      this.event.studentsID.splice(i,1);
  }
}
