import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor() { }

  checkStudentCredentials(student:Student):number{
    return 1;
  }
  checkSpeakerCredentials(speaker:Speaker):number{
    return 1;
  }
}
