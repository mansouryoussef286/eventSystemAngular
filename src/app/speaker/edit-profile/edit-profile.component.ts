import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_models/speaker';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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
    if(!this.confirmPw || !this.speaker.password || !this.speaker.Email || !this.speaker.username || !this.speaker.Email)
    {
      this.errorMsg = "please fill the form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
      if(this.speaker.password != this.confirmPw && this.confirmPw!=""){
        this.errorMsg = "passwords dont match";
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
}
