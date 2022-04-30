import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  
  baseUrl:string= "http://localhost:2525/speakers/";
  constructor(public http:HttpClient) { }

  getSpeakerByID(id:string){
    return this.http.get<{message: string ,data: Speaker[]}>(this.baseUrl + id);
  }
  updateSpeaker(id:string, speaker:Speaker){
    return this.http.put<{message: string}>(this.baseUrl,
      {
        id: id,
        email: speaker.Email,
        username: speaker.username,
        password: speaker.password,
        address: {
            city: speaker.address.city,
            street: speaker.address.street,
            building: speaker.address.building
        }
    });
  }
  getSpeakers(){
    return this.http.get<{message: string ,data: Speaker[]}>(this.baseUrl);
  }
  deleteSpeaker(id:string){
    return this.http.delete<{message: string}>(this.baseUrl + id);
  }
}
