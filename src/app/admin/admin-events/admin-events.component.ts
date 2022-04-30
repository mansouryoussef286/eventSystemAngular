import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';



@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {

  events:Event[]=[];
  studentID:number = 0;
  searchText:string = "";
  constructor(public eventSrv:EventService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentID = this.ar.snapshot.params['id'];
    this.eventSrv.getEvents().subscribe(
      data=>{
        // console.log(data.data);
        this.events = data.data;
      },
      error=>{
        alert(error.error.message);}
    );
  }

  deleteEvent(event:Event){
    if(confirm(`delete event: ${event.title}?`)){
      this.eventSrv.deleteEventByID(event._id).subscribe(
        data=>{
          // console.log(data);
          if(data.message.includes("delete")){
            alert("event deleted!");
            this.ngOnInit();
          }
        },
        error=>{
          alert(error.error.message);
        }
      );
    }
  }

}
