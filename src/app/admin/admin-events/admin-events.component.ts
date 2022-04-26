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
    this.events = this.eventSrv.getEvents();
  }

  deleteEvent(event:Event){
    if(confirm(`delete event: ${event.title}?`)){
      this.eventSrv.deleteEventByID(event._id);
      alert("event deleted!");
    }
  }

}
