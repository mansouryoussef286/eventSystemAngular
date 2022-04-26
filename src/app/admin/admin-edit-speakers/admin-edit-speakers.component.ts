import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_models/speaker';
import { SpeakerService } from 'src/app/speaker.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-edit-speakers',
  templateUrl: './admin-edit-speakers.component.html',
  styleUrls: ['./admin-edit-speakers.component.css']
})
export class AdminEditSpeakersComponent implements OnInit {

  speakerID:string="0";
  speaker:Speaker = new Speaker("","","","",{city:"",street:"",building:""});
  confirmPw:string="";
  errorMsg:string="";
  successMsg:string="";

  constructor(public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.speakerID = this.ar.snapshot.params['id'];
    this.speaker = this.speakerSrv.getSpeakerByID(this.speakerID);
  }

  update():void{
    if(!this.speaker.Email)
    {
      this.errorMsg = "please fill the form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
      
        this.speakerSrv.updateSpeaker(this.speaker._id,this.speaker);
        this.successMsg = "info updated successfully";
        setTimeout(()=>{
          this.router.navigateByUrl("/speaker/home/"+ this.speakerID);
        },2000);
    }
  }

}
