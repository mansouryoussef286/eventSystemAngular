import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-admin-speakers',
  templateUrl: './admin-speakers.component.html',
  styleUrls: ['./admin-speakers.component.css']
})
export class AdminSpeakersComponent implements OnInit {

  speakers:Speaker[]=[];
  searchText:string = "";
  constructor(public speakerSrv:SpeakerService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.speakers = this.speakerSrv.getSpeakers();
  }

  deletSpeaker(speaker:Speaker){
    if(confirm(`delete speaker: ${speaker.username}?`)){
      this.speakerSrv.deleteSpeaker(speaker._id);
      alert("speaker deleted!");
    }
  }

}
