import { Injectable } from '@angular/core';
import { DbMockService } from './db-mock.service';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  
  speakerArrayTemp:Speaker[]=[
      new Speaker("1","speaker@email.com","youssef","",{city:"",street:"",building:""}),
      new Speaker("10","speaker@email.com","torky","",{city:"",street:"",building:""}),
      new Speaker("2","speaker@email.com","speaker name 1","",{city:"",street:"",building:""}),
      new Speaker("3","speaker@email.com","speaker name 2","",{city:"",street:"",building:""}),
      new Speaker("4","speaker@email.com","speaker name 3","",{city:"",street:"",building:""}),
      new Speaker("5","speaker@email.com","speaker name 4","",{city:"",street:"",building:""}),
  ]
  constructor(public dbSrv:DbMockService) { }

  getSpeakerByID(id:string):Speaker{
    return this.dbSrv.speakerArrayTemp.find(s=>s._id == id)?? new Speaker("0","","","",{city:"",street:"",building:""});
  }
  updateSpeaker(id:string, speaker:Speaker){

  }
  getSpeakers():Speaker[]{
    return this.dbSrv.speakerArrayTemp;
  }
  deleteSpeaker(id:string){
    
  }
}
