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
  event:Event = new Event(0,"","",new Speaker("","","","",{city:"",street:"",building:""}),[], []);


  date:string="";

  errorMsg:string="";
  successMsg:string="";

  showMainSpeaker:boolean=false;
  showAllSpeakers:boolean=false;
  showAllStudents:boolean=false;

  allStudents:Student[]=[];
  allSpeakers:Speaker[]=[];
  constructor(public EventSrv:EventService, public stdSrv:StudentService, public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    // get the selected event
    this.eventID = this.ar.snapshot.params['id'];
    this.EventSrv.getEventByID(this.eventID).subscribe(
      data=>{
        // console.log(data.data);
        this.event = data.data[0];
        this.event.date = this.event.date.split('T')[0];
      },
      error=>{
        alert(error.error.message);}
    );
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

  update():void{
    if(!this.event.title || !this.event.date || !this.event.mainSpeakerID)
    {
      this.errorMsg = "please fill the form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
        this.EventSrv.updateEvent(this.event._id,this.event).subscribe(
          data=>{
            // console.log(data);
            if(data.message.includes("updated")){
              this.successMsg = "info updated successfully";
              setTimeout(()=>{
                this.router.navigateByUrl("/admin/events");
              },2000);
            }
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
          alert("this student is currently unavailable!");
        }else{
          this.event.studentsID.push(newStudent);
          console.log(this.event);
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
