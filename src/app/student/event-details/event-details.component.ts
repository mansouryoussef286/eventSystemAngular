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
  event:Event=new Event(0,"","  ",new Speaker("","","","",{city:"",street:"",building:""}),[],[]);

  constructor(public EventSrv:EventService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
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
  }

}
