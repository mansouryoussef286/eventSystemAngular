import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminEditSpeakersComponent } from './admin-edit-speakers/admin-edit-speakers.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { SharedModule } from '../shared/shared.module';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminSpeakersComponent } from './admin-speakers/admin-speakers.component';



@NgModule({
  declarations: [
    AdminEventsComponent,
    AdminEditSpeakersComponent,
    AddEventComponent,
    EditEventComponent,
    AdminStudentsComponent,
    AdminSpeakersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
