import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/_models/event';

@Component({
  selector: 'app-speaker-home',
  templateUrl: './speaker-home.component.html',
  styleUrls: ['./speaker-home.component.css']
})
export class SpeakerHomeComponent implements OnInit {

  events:Event[]=[];
  studentID:number = 0;
  constructor(public eventSrv:EventService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentID = this.ar.snapshot.params['id'];
    this.events = this.eventSrv.getEventsByStudentID(this.studentID);
  }


}
