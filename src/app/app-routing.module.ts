import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';
import { RegisterComponent } from './core/register/register.component';

import { StudentHomeComponent } from './student/student-home/student-home.component';
import { EditProfileComponent as studentEditProfileComponent } from './student/edit-profile/edit-profile.component';
import { EventDetailsComponent as studentEventDetailsComponent } from './student/event-details/event-details.component';

import { SpeakerHomeComponent } from './speaker/speaker-home/speaker-home.component';
import { EditProfileComponent as speakerEditProfileComponent } from './speaker/edit-profile/edit-profile.component';
import { EventDetailsComponent as speakerEventDetailsComponent} from './speaker/event-details/event-details.component';

import { AdminEventsComponent } from './admin/admin-events/admin-events.component';
import { AdminEditSpeakersComponent } from './admin/admin-edit-speakers/admin-edit-speakers.component';
import { AddEventComponent } from './admin/add-event/add-event.component';
import { EditEventComponent } from './admin/edit-event/edit-event.component';
import { AdminStudentsComponent } from './admin/admin-students/admin-students.component';
import { AdminSpeakersComponent } from './admin/admin-speakers/admin-speakers.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "logout", component:LogoutComponent},

  {path: "student/home/:id", component:StudentHomeComponent},
  {path: "student/details/:id", component:studentEventDetailsComponent},
  {path: "student/editProfile/:id", component:studentEditProfileComponent},

  {path: "speaker/home/:id", component:SpeakerHomeComponent},
  {path: "speaker/details/:id", component:speakerEventDetailsComponent},
  {path: "speaker/editProfile/:id", component:speakerEditProfileComponent},

  {path: "admin/events", component:AdminEventsComponent},
  {path: "admin/events/add", component:AddEventComponent},
  {path: "admin/events/edit/:id", component:EditEventComponent},
  {path: "admin/students", component:AdminStudentsComponent},
  {path: "admin/speakers", component:AdminSpeakersComponent},
  {path: "admin/speakers/edit/:id", component:AdminEditSpeakersComponent},

  {path: "", component:LoginComponent},
  {path: "**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
