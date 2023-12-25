import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AllMeetingComponent} from './all-meeting/all-meeting.component';
import {MeetingDetailsComponent} from './meeting-details/meeting-details.component';
import {CreateMeetingComponent} from './create-meeting/create-meeting.component';
import {MeetingRoomComponent} from './meeting-room/meeting-room.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppModule} from "../../app.module";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    AllMeetingComponent,
    MeetingDetailsComponent,
    CreateMeetingComponent,
    MeetingRoomComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class UserModule {
}
