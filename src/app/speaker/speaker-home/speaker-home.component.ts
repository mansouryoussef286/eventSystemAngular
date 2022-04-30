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
  speakerID:string="";
  errorMsg:string="";
  constructor(public eventSrv:EventService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.speakerID = this.ar.snapshot.params['id'];
    this.eventSrv.getEventsBySpeakerID(this.speakerID).subscribe(
      data=>{
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
