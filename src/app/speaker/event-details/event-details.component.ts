import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventID:number=0;
  event:Event=new Event(0,"",new Date(),new Speaker("","","","",{city:"",street:"",building:""}),[],[]);

  constructor(public eventSrv:EventService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.eventID = this.ar.snapshot.params['id'];
    this.event = this.eventSrv.getEventByID(this.eventID);
  }

}
