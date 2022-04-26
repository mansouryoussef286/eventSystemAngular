import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerHomeComponent } from './speaker-home/speaker-home.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpeakerHomeComponent,
    EventDetailsComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SpeakerModule { }
