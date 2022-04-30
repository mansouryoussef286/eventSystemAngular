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
    this.speakerSrv.getSpeakers().subscribe(
      data=>{
        // console.log(data);
        this.speakers = data.data;
      },
      error=>{
        alert(error.error.message);
      }
    );
  }

  deletSpeaker(speaker:Speaker){
    if(confirm(`delete speaker: ${speaker.username}?`)){
      this.speakerSrv.deleteSpeaker(speaker._id).subscribe(
        data=>{
          // console.log(data);
          if(data.message.includes("delete")){
            alert("speaker deleted!");
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
