import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';


@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  events:Event[]=[];
  studentID:number = 0;
  errorMsg:string="";
  constructor(public eventSrv:EventService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentID = this.ar.snapshot.params['id'];
    this.eventSrv.getEventsByStudentID(this.studentID).subscribe(
      data=>{
        // console.log(data);
        if(data.message.includes("no events")){
          this.errorMsg = "No events assigned for you yet :)";
        }else{
          this.events = data.data;
        }
      },
      error=>alert(error.error.message)
    );
  }

}
