import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
  ]
})
export class CoreModule { }
